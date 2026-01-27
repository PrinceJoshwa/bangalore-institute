// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { ArrowRight, CheckCircle, Briefcase } from "lucide-react"

// export default function BBADigitalMarketingProgram() {
//   const [activeTab, setActiveTab] = useState("overview")

//   const programHighlights = [
//     "Business management + digital marketing",
//     "Leadership and entrepreneurship training",
//     "Strategic marketing and brand management",
//     "88% placement rate with 6.5 LPA average",
//     "Industry mentorship and networking",
//     "Business case studies and simulations",
//     "International business exposure",
//     "Startup incubation support",
//   ]

//   const careerOpportunities = [
//     { role: "Business Development Manager", package: "₹5-10 LPA", companies: ["HDFC", "ICICI", "Axis Bank"] },
//     { role: "Marketing Manager", package: "₹4-8 LPA", companies: ["Reliance", "Tata", "Mahindra"] },
//     { role: "Brand Manager", package: "₹6-12 LPA", companies: ["Unilever", "P&G", "Nestle"] },
//     { role: "Digital Marketing Head", package: "₹7-15 LPA", companies: ["Flipkart", "Amazon", "Myntra"] },
//     { role: "Business Analyst", package: "₹4-9 LPA", companies: ["Deloitte", "EY", "KPMG"] },
//     { role: "Entrepreneur/Startup Founder", package: "Variable", companies: ["Self-employed", "Incubators"] },
//   ]

//   const feeStructure = {
//     admissionFee: "₹25,000",
//     firstYear: "₹1,90,000",
//     secondYear: "₹75,000",
//     thirdYear: "₹75,000",
//     fourthYear: "100% Scholarship",
//     totalFee: "₹3,65,000",
//   }

//   const placementStats = {
//     placementRate: "88%",
//     averagePackage: "₹6.5 LPA",
//     highestPackage: "₹15 LPA",
//     minimumPackage: "₹4 LPA",
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-red-900 via-orange-800 to-yellow-900 text-white py-20">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm border border-red-400/30 rounded-full px-6 py-3 text-sm font-medium mb-6">
//                 <Briefcase className="h-5 w-5 text-red-400" />
//                 Business Leadership
//               </div>
//               <h1 className="text-5xl lg:text-6xl font-bold mb-6">
//                 BBA + Digital Marketing
//                 <span className="block text-3xl lg:text-4xl text-red-300 font-normal mt-2">+ PGCBA</span>
//               </h1>
//               <p className="text-xl text-red-100 mb-8 leading-relaxed">
//                 Combine business management expertise with digital marketing skills. Lead teams, build brands, and drive
//                 business growth in the digital economy.
//               </p>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-yellow-400">{placementStats.placementRate}</div>
//                   <div className="text-red-200 text-sm">Placement Rate</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-green-400">{placementStats.averagePackage}</div>
//                   <div className="text-red-200 text-sm">Average Package</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-blue-400">{placementStats.highestPackage}</div>
//                   <div className="text-red-200 text-sm">Highest Package</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-purple-400">4 Years</div>
//                   <div className="text-red-200 text-sm">Duration</div>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link
//                   to="/admission"
//                   className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
//                 >
//                   Apply for Course
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center"
//                 >
//                   Schedule Campus Visit
//                 </Link>
//               </div>
//             </div>

//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//                 alt="Business Management"
//                 className="rounded-2xl shadow-2xl"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-16">
//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
//             <div className="flex flex-wrap gap-2">
//               {[
//                 { id: "overview", name: "Overview" },
//                 { id: "curriculum", name: "Curriculum" },
//                 { id: "placements", name: "Placements" },
//                 { id: "leadership", name: "Leadership" },
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                     activeTab === tab.id
//                       ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg"
//                       : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
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
//             {/* Program Highlights */}
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Program Highlights</h2>
//               <div className="grid md:grid-cols-2 gap-8">
//                 <div className="space-y-4">
//                   {programHighlights.slice(0, 4).map((highlight, index) => (
//                     <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-md h-20">
//                       <CheckCircle className="h-6 w-6 text-green-600 mt-1 shrink-0" />
//                       <span className="text-gray-700 font-medium">{highlight}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="space-y-4">
//                   {programHighlights.slice(4).map((highlight, index) => (
//                     <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-md h-20">
//                       <CheckCircle className="h-6 w-6 text-green-600 mt-1 shrink-0" />
//                       <span className="text-gray-700 font-medium">{highlight}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Fee Structure */}
//             <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 text-white">
//               <div className="text-center mb-8">
//                 <h3 className="text-3xl font-bold mb-4">Investment Details</h3>
//                 <p className="text-red-100 text-lg">Transparent fee structure with flexible payment options</p>
//               </div>

//               <div className="grid md:grid-cols-3 gap-6 mb-8">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
//                   <div className="text-3xl font-bold">{feeStructure.totalFee}</div>
//                   <div className="text-red-100">Total Program Fee</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
//                   <div className="text-3xl font-bold">{feeStructure.fourthYear}</div>
//                   <div className="text-red-100">4th Year Scholarship</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
//                   <div className="text-3xl font-bold">0%</div>
//                   <div className="text-red-100">Interest EMI</div>
//                 </div>
//               </div>

//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                 <h4 className="text-xl font-bold mb-4 text-center">Year-wise Fee Breakdown</h4>
//                 <div className="grid md:grid-cols-5 gap-4">
//                   <div className="text-center">
//                     <div className="text-lg font-bold">{feeStructure.admissionFee}</div>
//                     <div className="text-red-100 text-sm">Admission Fee</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-lg font-bold">{feeStructure.firstYear}</div>
//                     <div className="text-red-100 text-sm">First Year</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-lg font-bold">{feeStructure.secondYear}</div>
//                     <div className="text-red-100 text-sm">Second Year</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-lg font-bold">{feeStructure.thirdYear}</div>
//                     <div className="text-red-100 text-sm">Third Year</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-lg font-bold text-yellow-300">{feeStructure.fourthYear}</div>
//                     <div className="text-red-100 text-sm">Fourth Year</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "placements" && (
//           <div className="space-y-16">
//             {/* Career Opportunities */}
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Career Opportunities</h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 {careerOpportunities.map((career, index) => (
//                   <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-32">
//                     <div className="flex justify-between items-start mb-3">
//                       <h4 className="font-bold text-gray-900">{career.role}</h4>
//                       <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
//                         {career.package}
//                       </span>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {career.companies.map((company, idx) => (
//                         <span key={idx} className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">
//                           {company}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Call to Action */}
//         <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//           <div className="relative z-10 text-center">
//             <h2 className="text-4xl font-bold mb-6">Ready to Lead in Business?</h2>
//             <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
//               Join our comprehensive business management program and launch your leadership career with guaranteed
//               placement assistance.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/admission"
//                 className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
//               >
//                 <span className="mr-2">Apply Now</span>
//                 <ArrowRight className="h-5 w-5" />
//               </Link>
//               <Link
//                 to="/contact"
//                 className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 inline-flex items-center justify-center"
//               >
//                 Schedule Campus Visit
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Briefcase, BookOpen } from "lucide-react"

export default function BBADigitalMarketingProgram() {
  const [activeTab, setActiveTab] = useState("overview")

  // Existing Program Highlights preserved
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

  // NEW: Curriculum added from PDF (Pages 3, 7, 12, 13)
  const curriculum = [
    {
      semester: "Semester 1-2",
      subjects: [
        "Principles of Management", // Based on "Core business principles" [cite: 230]
        "Financial Accounting", // Based on "Finance" [cite: 230]
        "Business Economics",
        "Marketing Management Basics",
        "Organizational Behavior",
        "Business Communication", // Based on "Communication Training" [cite: 242]
      ],
    },
    {
      semester: "Semester 3-4",
      subjects: [
        "Digital Marketing Fundamentals",
        "Search Engine Optimization (SEO)", // Based on "Search Engine Optimization" [cite: 261]
        "Social Media Management (SMM)", // Based on "Social Media Management" [cite: 265]
        "Content Marketing Strategy", // Based on "Content Marketing" [cite: 232]
        "Graphic Design for Marketers (Canva)", // Based on Tools [cite: 356]
        "Consumer Behavior",
      ],
    },
    {
      semester: "Semester 5-6",
      subjects: [
        "Google Ads & PPC Campaigns", // Based on "Google Ads" [cite: 263]
        "Web Analytics (Google Analytics)", // Based on "Analytics Tools" [cite: 350]
        "Email Marketing Automation", // Based on "Email Marketing" [cite: 274]
        "Affiliate & E-Commerce Marketing",
        "Live Projects & Internship", // Based on "Internships" [cite: 256]
        "Marketing Research",
      ],
    },
    {
      semester: "PGCCA Year",
      subjects: [
        "Strategic Business Decisions", // Based on "Strategic business decisions" [cite: 235]
        "Advanced Marketing Analytics",
        "Entrepreneurship Development", // Based on "Entrepreneur" role [cite: 284]
        "Leadership & Soft Skills",
        "International Business",
        "Capstone Project", // Based on "Final semester capstone project" [cite: 365]
      ],
    },
  ]

  // Existing Career Opportunities preserved
  const careerOpportunities = [
    { role: "Business Development Manager", package: "₹5-10 LPA", companies: ["HDFC", "ICICI", "Axis Bank"] },
    { role: "Marketing Manager", package: "₹4-8 LPA", companies: ["Reliance", "Tata", "Mahindra"] },
    { role: "Brand Manager", package: "₹6-12 LPA", companies: ["Unilever", "P&G", "Nestle"] },
    { role: "Digital Marketing Head", package: "₹7-15 LPA", companies: ["Flipkart", "Amazon", "Myntra"] },
    { role: "Business Analyst", package: "₹4-9 LPA", companies: ["Deloitte", "EY", "KPMG"] },
    { role: "Entrepreneur/Startup Founder", package: "Variable", companies: ["Self-employed", "Incubators"] },
  ]

  // Existing Fee Structure preserved
  const feeStructure = {
    admissionFee: "₹25,000",
    firstYear: "₹1,90,000",
    secondYear: "₹75,000",
    thirdYear: "₹75,000",
    fourthYear: "100% Scholarship",
    totalFee: "₹3,65,000",
  }

  // Existing Placement Stats preserved
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
                // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                src="https://ik.imagekit.io/j0xzq9pns/BIMSR/Digi.png"
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

        {/* NEW: Curriculum Content Added Here */}
        {activeTab === "curriculum" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Comprehensive Curriculum</h2>
            <div className="space-y-8">
              {curriculum.map((sem, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-orange-600 mb-6">{sem.semester}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sem.subjects.map((subject, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4 h-16 flex items-center">
                        <BookOpen className="h-5 w-5 text-orange-600 mr-3 shrink-0" />
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