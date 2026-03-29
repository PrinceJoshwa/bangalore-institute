// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { ArrowRight, CheckCircle, DollarSign } from "lucide-react"

// export default function BCOMACCAProgram() {
//   const [activeTab, setActiveTab] = useState("overview")

//   const programHighlights = [
//     "ACCA global certification included",
//     "International finance standards training",
//     "CPA and CFA preparation support",
//     "85% placement rate with 8 LPA average",
//     "Financial modeling and analysis",
//     "Investment banking preparation",
//     "Audit and taxation expertise",
//     "Corporate finance specialization",
//   ]

//   const careerOpportunities = [
//     { role: "Financial Analyst", package: "₹6-12 LPA", companies: ["JP Morgan", "Goldman Sachs", "Morgan Stanley"] },
//     { role: "Chartered Accountant", package: "₹8-15 LPA", companies: ["Deloitte", "EY", "KPMG", "PwC"] },
//     { role: "Investment Banker", package: "₹10-20 LPA", companies: ["Citibank", "HSBC", "Standard Chartered"] },
//     { role: "Finance Manager", package: "₹8-18 LPA", companies: ["Reliance", "Tata", "Mahindra"] },
//     { role: "Tax Consultant", package: "₹5-10 LPA", companies: ["Big 4 Firms", "Boutique Firms"] },
//     { role: "Audit Associate", package: "₹4-8 LPA", companies: ["Grant Thornton", "BDO", "RSM"] },
//   ]

//   const feeStructure = {
//     admissionFee: "₹25,000",
//     firstYear: "₹1,80,000",
//     secondYear: "₹1,10,000",
//     thirdYear: "₹1,10,000",
//     fourthYear: "100% Scholarship",
//     totalFee: "₹3,50,000",
//   }

//   const placementStats = {
//     placementRate: "85%",
//     averagePackage: "₹8 LPA",
//     highestPackage: "₹20 LPA",
//     minimumPackage: "₹4 LPA",
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-indigo-900 via-blue-800 to-purple-900 text-white py-20">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center gap-2 bg-indigo-600/20 backdrop-blur-sm border border-indigo-400/30 rounded-full px-6 py-3 text-sm font-medium mb-6">
//                 <DollarSign className="h-5 w-5 text-indigo-400" />
//                 International Certification
//               </div>
//               <h1 className="text-5xl lg:text-6xl font-bold mb-6">
//                 BCOM + ACCA
//                 <span className="block text-3xl lg:text-4xl text-indigo-300 font-normal mt-2">+ PGCFM</span>
//               </h1>
//               <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
//                 Master global finance with ACCA certification. Build expertise in financial management, audit, and
//                 taxation with international recognition and career opportunities.
//               </p>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-yellow-400">{placementStats.placementRate}</div>
//                   <div className="text-indigo-200 text-sm">Placement Rate</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-green-400">{placementStats.averagePackage}</div>
//                   <div className="text-indigo-200 text-sm">Average Package</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-purple-400">{placementStats.highestPackage}</div>
//                   <div className="text-indigo-200 text-sm">Highest Package</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-pink-400">4 Years</div>
//                   <div className="text-indigo-200 text-sm">Duration</div>
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
//                 src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//                 alt="Finance and Accounting"
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
//                 { id: "acca", name: "ACCA Benefits" },
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                     activeTab === tab.id
//                       ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg"
//                       : "text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
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
//             <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-white">
//               <div className="text-center mb-8">
//                 <h3 className="text-3xl font-bold mb-4">Investment Details</h3>
//                 <p className="text-indigo-100 text-lg">Transparent fee structure with flexible payment options</p>
//               </div>

//               <div className="grid md:grid-cols-3 gap-6 mb-8">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
//                   <div className="text-3xl font-bold">{feeStructure.totalFee}</div>
//                   <div className="text-indigo-100">Total Program Fee</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
//                   <div className="text-3xl font-bold">{feeStructure.fourthYear}</div>
//                   <div className="text-indigo-100">4th Year Scholarship</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
//                   <div className="text-3xl font-bold">0%</div>
//                   <div className="text-indigo-100">Interest EMI</div>
//                 </div>
//               </div>

//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                 <h4 className="text-xl font-bold mb-4 text-center">Year-wise Fee Breakdown</h4>
//                 <div className="grid md:grid-cols-5 gap-4">
//                   <div className="text-center">
//                     <div className="text-lg font-bold">{feeStructure.admissionFee}</div>
//                     <div className="text-indigo-100 text-sm">Admission Fee</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-lg font-bold">{feeStructure.firstYear}</div>
//                     <div className="text-indigo-100 text-sm">First Year</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-lg font-bold">{feeStructure.secondYear}</div>
//                     <div className="text-indigo-100 text-sm">Second Year</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-lg font-bold">{feeStructure.thirdYear}</div>
//                     <div className="text-indigo-100 text-sm">Third Year</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-lg font-bold text-yellow-300">{feeStructure.fourthYear}</div>
//                     <div className="text-indigo-100 text-sm">Fourth Year</div>
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
//                         <span key={idx} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">
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
//             <h2 className="text-4xl font-bold mb-6">Ready for Global Finance Career?</h2>
//             <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
//               Join our comprehensive ACCA program and launch your international finance career with guaranteed placement
//               assistance.
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
import { ArrowRight, CheckCircle, DollarSign, BookOpen } from "lucide-react"

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

  // Added curriculum based on your text (Semesters 1-4) and PDF (Foundation/PGCFM)
  const curriculum = [
    {
      semester: "Semester 1-2 (Foundation)",
      subjects: [
        "Business & Technology (BT)", // ACCA Knowledge Level (PDF Year 1)
        "Management Accounting (MA)", // ACCA Knowledge Level (PDF Year 1)
        "Financial Accounting (FA)",  // ACCA Knowledge Level (PDF Year 1)
        "Business Economics",         // BCom Foundation
        "Commercial Law",             // BCom Foundation
        "Business Mathematics & Statistics",
      ],
    },
    {
      semester: "Semester 3-4 (Skills Level)",
      subjects: [
        "Performance Management (PM)", // From your text (Sem 1)
        "Financial Reporting (FR)",    // From your text (Sem 1)
        "Audit and Assurance (AA)",    // From your text (Sem 2)
        "Financial Management (FM)",   // From your text (Sem 2)
        "Corporate & Business Law (LW)", // Standard ACCA Skills
        "Taxation (TX)",                 // Standard ACCA Skills
      ],
    },
    {
      semester: "Semester 5-6 (Professional)",
      subjects: [
        "Strategic Business Leader (SBL)",    // From your text (Sem 3)
        "Strategic Business Reporting (SBR)", // From your text (Sem 3)
        "Advanced Performance Mgmt (APM)",    // From your text (Sem 4)
        "Advanced Financial Mgmt (AFM)",      // From your text (Sem 4)
        "Entrepreneurship Development",
        "Business Research Methods",
      ],
    },
    {
      semester: "PGCFM Year (Year 4)",
      subjects: [
        "Advanced Investment Analysis",  // From PDF PGCFM
        "Risk Management Strategies",    // From PDF PGCFM
        "International Financial Markets",
        "Portfolio Management",
        "Forensic Accounting",
        "Capstone Project",
      ],
    },
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
    firstYear: "₹1,20,000",
    secondYear: "₹1,15,000",
    thirdYear: "₹1,15,000",
    fourthYear: "100% Scholarship",
    totalFee: "₹3,50,000",
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

        {/* Curriculum Section Added Here */}
        {activeTab === "curriculum" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Comprehensive Curriculum</h2>
            <div className="space-y-8">
              {curriculum.map((sem, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-indigo-600 mb-6">{sem.semester}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sem.subjects.map((subject, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4 h-16 flex items-center">
                        <BookOpen className="h-5 w-5 text-indigo-600 mr-3 shrink-0" />
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

        {activeTab === "acca" && (
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">ACCA Partnership Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="font-bold mb-2">Global Recognition</h4>
                <p className="text-gray-600 text-sm">Accepted in 180+ countries for global mobility.</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold mb-2">Integrated Exams</h4>
                <p className="text-gray-600 text-sm">Curriculum aligned with ACCA papers for ease of clearing.</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-bold mb-2">Exemptions</h4>
                <p className="text-gray-600 text-sm">Up to 6 paper exemptions based on B.Com curriculum.</p>
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