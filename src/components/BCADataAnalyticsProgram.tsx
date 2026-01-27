// "use client"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { ArrowRight, CheckCircle, BarChart3 } from "lucide-react"

// export default function BCADataAnalyticsProgram() {
//   const [activeTab, setActiveTab] = useState("overview")

//   const programHighlights = [
//     "120-150 hours specialized training",
//     "Python & SQL certification included",
//     "Predictive modeling and machine learning",
//     "92% placement rate with 7 LPA average",
//     "Data visualization tools mastery",
//     "Industry datasets and real-world projects",
//     "Tableau and Power BI certifications",
//     "Statistical analysis and business intelligence",
//   ]

//   const careerOpportunities = [
//     { role: "Data Analyst", package: "₹3.5-9 LPA", companies: ["IBM", "Microsoft", "Amazon"] },
//     { role: "Business Analyst", package: "₹4-8 LPA", companies: ["Deloitte", "Accenture", "TCS"] },
//     { role: "Data Visualization Specialist", package: "₹5-10 LPA", companies: ["Tableau", "Qlik", "SAS"] },
//     { role: "Junior Data Scientist", package: "₹6-12 LPA", companies: ["Google", "Facebook", "Netflix"] },
//     { role: "Market Research Analyst", package: "₹4-7 LPA", companies: ["Nielsen", "Kantar", "IPSOS"] },
//     { role: "Database Administrator", package: "₹5-9 LPA", companies: ["Oracle", "MongoDB", "MySQL"] },
//   ]

//   const feeStructure = {
//     admissionFee: "₹25,000",
//     firstYear: "₹2,00,000",
//     secondYear: "₹85,000",
//     thirdYear: "₹85,000",
//     fourthYear: "100% Scholarship",
//     totalFee: "₹3,95,000",
//   }

//   const placementStats = {
//     placementRate: "92%",
//     averagePackage: "₹7 LPA",
//     highestPackage: "₹9 LPA",
//     minimumPackage: "₹3.5 LPA",
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-purple-900 via-pink-800 to-red-900 text-white py-20">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center gap-2 bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3 text-sm font-medium mb-6">
//                 <BarChart3 className="h-5 w-5 text-purple-400" />
//                 High Growth Field
//               </div>
//               <h1 className="text-5xl lg:text-6xl font-bold mb-6">
//                 BCA + Data Analytics
//                 <span className="block text-3xl lg:text-4xl text-purple-300 font-normal mt-2">+ PGCCA</span>
//               </h1>
//               <p className="text-xl text-purple-100 mb-8 leading-relaxed">
//                 Master data science with Python, SQL, and machine learning. Transform raw data into actionable insights
//                 with our comprehensive analytics program.
//               </p>

//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-yellow-400">{placementStats.placementRate}</div>
//                   <div className="text-purple-200 text-sm">Placement Rate</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-green-400">{placementStats.averagePackage}</div>
//                   <div className="text-purple-200 text-sm">Average Package</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-pink-400">{placementStats.highestPackage}</div>
//                   <div className="text-purple-200 text-sm">Highest Package</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-3xl font-bold text-blue-400">4 Years</div>
//                   <div className="text-purple-200 text-sm">Duration</div>
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
//                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//                 alt="Data Analytics"
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
//                 { id: "tools", name: "Tools & Tech" },
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
//             <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
//               <div className="text-center mb-8">
//                 <h3 className="text-3xl font-bold mb-4">Investment Details</h3>
//                 <p className="text-purple-100 text-lg">Transparent fee structure with flexible payment options</p>
//               </div>

//               <div className="grid md:grid-cols-3 gap-6 mb-8">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
//                   <div className="text-3xl font-bold">{feeStructure.totalFee}</div>
//                   <div className="text-purple-100">Total Program Fee</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
//                   <div className="text-3xl font-bold">{feeStructure.fourthYear}</div>
//                   <div className="text-purple-100">4th Year Scholarship</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center h-32 flex flex-col justify-center">
//                   <div className="text-3xl font-bold">0%</div>
//                   <div className="text-purple-100">Interest EMI</div>
//                 </div>
//               </div>

//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
//                 <h4 className="text-xl font-bold mb-4 text-center">Year-wise Fee Breakdown</h4>
//                 <div className="grid md:grid-cols-5 gap-4">
//                   <div className="text-center">
//                     <div className="text-lg font-bold">{feeStructure.admissionFee}</div>
//                     <div className="text-purple-100 text-sm">Admission Fee</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-lg font-bold">{feeStructure.firstYear}</div>
//                     <div className="text-purple-100 text-sm">First Year</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-lg font-bold">{feeStructure.secondYear}</div>
//                     <div className="text-purple-100 text-sm">Second Year</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-lg font-bold">{feeStructure.thirdYear}</div>
//                     <div className="text-purple-100 text-sm">Third Year</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-lg font-bold text-green-300">{feeStructure.fourthYear}</div>
//                     <div className="text-purple-100 text-sm">Fourth Year</div>
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
//                         <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
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
//             <h2 className="text-4xl font-bold mb-6">Ready to Become a Data Analyst?</h2>
//             <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
//               Join our comprehensive data analytics program and launch your career in the fastest-growing field with
//               guaranteed placement assistance.
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
import { ArrowRight, CheckCircle, BarChart3, BookOpen } from "lucide-react"

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

  // Added curriculum based on PDF data (Pages 2, 6, 12)
  const curriculum = [
    {
      semester: "Semester 1-2",
      subjects: [
        "Computer Science Foundations", // 
        "Statistics & Probability", // [cite: 134]
        "Excel (Advanced) & Google Sheets", // [cite: 132]
        "Mathematics for Data Science", // 
        "Introduction to Programming", // 
        "Business Communication",
      ],
    },
    {
      semester: "Semester 3-4",
      subjects: [
        "SQL & Database Management", // [cite: 131]
        "Data Cleaning & Wrangling", // [cite: 135]
        "Python for Data Analysis", // [cite: 130]
        "Exploratory Data Analysis (EDA)", // Implied from "Interpret complex data sets" [cite: 116]
        "Database Querying Techniques", // [cite: 131]
        "Data Warehousing Concepts", // Implied from Database Manager roles [cite: 124]
      ],
    },
    {
      semester: "Semester 5-6",
      subjects: [
        "Data Visualization (Power BI, Tableau)", // [cite: 133]
        "Business Intelligence Tools", // [cite: 136]
        "Reporting Automation & Dashboarding", // [cite: 137]
        "Predictive Analytics Basics", // Implied from "identify trends" [cite: 116]
        "Real-world Capstone Project", // 
        "Industry Internship", // [cite: 51]
      ],
    },
    {
      semester: "PGCCA Year",
      subjects: [
        "Advanced Data Analytics", // [cite: 9]
        "Machine Learning Applications", // [cite: 121]
        "Big Data Technologies", // Implied from "Advanced IT topics" 
        "Advanced Statistical Modeling", // [cite: 121]
        "Research Methodology", // Implied from "Market Research" [cite: 122]
        "Industry Certification Programs", // [cite: 19]
      ],
    },
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

        {/* Curriculum Section Added Here */}
        {activeTab === "curriculum" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Comprehensive Curriculum</h2>
            <div className="space-y-8">
              {curriculum.map((sem, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-purple-600 mb-6">{sem.semester}</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sem.subjects.map((subject, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4 h-16 flex items-center">
                        <BookOpen className="h-5 w-5 text-purple-600 mr-3 shrink-0" />
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