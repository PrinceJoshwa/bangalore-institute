
// // "use client"

// // import type React from "react"

// // import { useState } from "react"
// // import { Calendar, FileText, CheckCircle, AlertCircle, Users, Award, BookOpen, CreditCard } from "lucide-react"

// // export default function Admission() {
// //   const [selectedStep, setSelectedStep] = useState(0)
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     program: "",
// //     qualification: "",
// //     percentage: "",
// //     category: "",
// //   })

// //   const admissionSteps = [
// //     {
// //       title: "Application Form",
// //       description: "Fill out the online application form",
// //       icon: FileText,
// //       status: "current",
// //     },
// //     {
// //       title: "Document Verification",
// //       description: "Submit required documents",
// //       icon: CheckCircle,
// //       status: "upcoming",
// //     },
// //     {
// //       title: "Entrance Test",
// //       description: "Appear for entrance examination",
// //       icon: BookOpen,
// //       status: "upcoming",
// //     },
// //     {
// //       title: "Interview",
// //       description: "Personal interview with faculty",
// //       icon: Users,
// //       status: "upcoming",
// //     },
// //     {
// //       title: "Fee Payment",
// //       description: "Complete admission formalities",
// //       icon: CreditCard,
// //       status: "upcoming",
// //     },
// //   ]

// //   const programs = [
// //     {
// //       name: "BCA + Full Stack Development + PGCCA",
// //       duration: "3 Years",
// //       fee: "₹2,50,000",
// //       eligibility: "12th Pass (Any Stream)",
// //       seats: "60",
// //     },
// //     {
// //       name: "BCA + Data Analytics + PGCCA",
// //       duration: "3 Years",
// //       fee: "₹2,50,000",
// //       eligibility: "12th Pass (Any Stream)",
// //       seats: "60",
// //     },
// //     {
// //       name: "BCA + Digital Marketing + PGCCA",
// //       duration: "3 Years",
// //       fee: "₹2,50,000",
// //       eligibility: "12th Pass (Any Stream)",
// //       seats: "60",
// //     },
// //     {
// //       name: "BBA + Digital Marketing + PGCBA",
// //       duration: "3 Years",
// //       fee: "₹2,30,000",
// //       eligibility: "12th Pass (Any Stream)",
// //       seats: "60",
// //     },
// //     {
// //       name: "BCOM + ACCA + PGCFM",
// //       duration: "3 Years",
// //       fee: "₹2,80,000",
// //       eligibility: "12th Pass (Commerce/Science)",
// //       seats: "40",
// //     },
// //   ]

// //   const importantDates = [
// //     { event: "Application Opens", date: "January 15, 2025", status: "active" },
// //     { event: "Last Date to Apply", date: "June 30, 2025", status: "upcoming" },
// //     { event: "Entrance Test", date: "July 15, 2025", status: "upcoming" },
// //     { event: "Results Declaration", date: "July 25, 2025", status: "upcoming" },
// //     { event: "Admission Confirmation", date: "August 10, 2025", status: "upcoming" },
// //   ]

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     })
// //   }

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault()
// //     console.log("Form submitted:", formData)
// //     // Handle form submission
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
// //       {/* Hero Section */}
// //       <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
// //         <div className="absolute inset-0 bg-black/20"></div>
// //         <div className="relative container mx-auto px-4 text-center">
// //           <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
// //             Admissions 2025-26
// //           </h1>
// //           <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
// //             Join India's leading institute for technology and management education. Shape your future with
// //             industry-relevant programs and 100% placement guarantee.
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
// //               Apply Now - Free
// //             </button>
// //             <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
// //               Download Brochure
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="container mx-auto px-4 py-16">
// //         <div className="grid lg:grid-cols-3 gap-12">
// //           {/* Main Content */}
// //           <div className="lg:col-span-2 space-y-12">
// //             {/* Admission Process */}
// //             <div className="bg-white rounded-2xl shadow-xl p-8">
// //               <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Admission Process</h2>
// //               <div className="space-y-6">
// //                 {admissionSteps.map((step, index) => {
// //                   const Icon = step.icon
// //                   return (
// //                     <div
// //                       key={index}
// //                       className={`flex items-center p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
// //                         selectedStep === index
// //                           ? "border-blue-500 bg-blue-50 shadow-lg"
// //                           : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
// //                       }`}
// //                       onClick={() => setSelectedStep(index)}
// //                     >
// //                       <div
// //                         className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
// //                           selectedStep === index ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"
// //                         }`}
// //                       >
// //                         <Icon className="h-6 w-6" />
// //                       </div>
// //                       <div className="flex-1">
// //                         <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
// //                         <p className="text-gray-600">{step.description}</p>
// //                       </div>
// //                       <div className="text-2xl font-bold text-gray-300">{index + 1}</div>
// //                     </div>
// //                   )
// //                 })}
// //               </div>
// //             </div>

// //             {/* Application Form */}
// //             <div className="bg-white rounded-2xl shadow-xl p-8">
// //               <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Application Form</h2>
// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div className="grid md:grid-cols-2 gap-6">
// //                   <div>
// //                     <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
// //                     <input
// //                       type="text"
// //                       name="fullName"
// //                       value={formData.fullName}
// //                       onChange={handleInputChange}
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
// //                       placeholder="Enter your full name"
// //                       required
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
// //                     <input
// //                       type="email"
// //                       name="email"
// //                       value={formData.email}
// //                       onChange={handleInputChange}
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
// //                       placeholder="Enter your email"
// //                       required
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
// //                     <input
// //                       type="tel"
// //                       name="phone"
// //                       value={formData.phone}
// //                       onChange={handleInputChange}
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
// //                       placeholder="Enter your phone number"
// //                       required
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-gray-700 mb-2">Program of Interest *</label>
// //                     <select
// //                       name="program"
// //                       value={formData.program}
// //                       onChange={handleInputChange}
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
// //                       required
// //                     >
// //                       <option value="">Select Program</option>
// //                       {programs.map((program, index) => (
// //                         <option key={index} value={program.name}>
// //                           {program.name}
// //                         </option>
// //                       ))}
// //                     </select>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-gray-700 mb-2">Highest Qualification *</label>
// //                     <select
// //                       name="qualification"
// //                       value={formData.qualification}
// //                       onChange={handleInputChange}
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
// //                       required
// //                     >
// //                       <option value="">Select Qualification</option>
// //                       <option value="12th">12th Standard</option>
// //                       <option value="diploma">Diploma</option>
// //                       <option value="graduation">Graduation</option>
// //                     </select>
// //                   </div>
// //                   <div>
// //                     <label className="block text-sm font-semibold text-gray-700 mb-2">Percentage/CGPA *</label>
// //                     <input
// //                       type="text"
// //                       name="percentage"
// //                       value={formData.percentage}
// //                       onChange={handleInputChange}
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
// //                       placeholder="Enter your percentage"
// //                       required
// //                     />
// //                   </div>
// //                 </div>
// //                 <button
// //                   type="submit"
// //                   className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
// //                 >
// //                   Submit Application
// //                 </button>
// //               </form>
// //             </div>

// //             {/* Programs Overview */}
// //             <div className="bg-white rounded-2xl shadow-xl p-8">
// //               <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Programs</h2>
// //               <div className="space-y-6">
// //                 {programs.map((program, index) => (
// //                   <div
// //                     key={index}
// //                     className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
// //                   >
// //                     <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
// //                       <div className="flex-1">
// //                         <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.name}</h3>
// //                         <p className="text-gray-600">Eligibility: {program.eligibility}</p>
// //                       </div>
// //                       <div className="flex flex-col sm:flex-row gap-4 text-center">
// //                         <div className="bg-blue-50 px-4 py-2 rounded-lg">
// //                           <div className="text-sm text-gray-600">Duration</div>
// //                           <div className="font-semibold text-blue-600">{program.duration}</div>
// //                         </div>
// //                         <div className="bg-green-50 px-4 py-2 rounded-lg">
// //                           <div className="text-sm text-gray-600">Total Fee</div>
// //                           <div className="font-semibold text-green-600">{program.fee}</div>
// //                         </div>
// //                         <div className="bg-purple-50 px-4 py-2 rounded-lg">
// //                           <div className="text-sm text-gray-600">Seats</div>
// //                           <div className="font-semibold text-purple-600">{program.seats}</div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Sidebar */}
// //           <div className="space-y-8">
// //             {/* Important Dates */}
// //             <div className="bg-white rounded-2xl shadow-xl p-6">
// //               <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
// //                 <Calendar className="h-6 w-6 mr-2 text-blue-600" />
// //                 Important Dates
// //               </h3>
// //               <div className="space-y-4">
// //                 {importantDates.map((date, index) => (
// //                   <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
// //                     <div>
// //                       <div className="font-semibold text-gray-900">{date.event}</div>
// //                       <div className="text-sm text-gray-600">{date.date}</div>
// //                     </div>
// //                     <div
// //                       className={`w-3 h-3 rounded-full ${date.status === "active" ? "bg-green-500" : "bg-gray-300"}`}
// //                     ></div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Quick Stats */}
// //             <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl p-6">
// //               <h3 className="text-2xl font-bold mb-6">Why Choose BIMSR?</h3>
// //               <div className="space-y-4">
// //                 <div className="flex items-center">
// //                   <Award className="h-6 w-6 mr-3 text-yellow-400" />
// //                   <span>100% Placement Record</span>
// //                 </div>
// //                 <div className="flex items-center">
// //                   <Users className="h-6 w-6 mr-3 text-green-400" />
// //                   <span>Industry Expert Faculty</span>
// //                 </div>
// //                 <div className="flex items-center">
// //                   <BookOpen className="h-6 w-6 mr-3 text-blue-300" />
// //                   <span>Modern Curriculum</span>
// //                 </div>
// //                 <div className="flex items-center">
// //                   <CheckCircle className="h-6 w-6 mr-3 text-emerald-400" />
// //                   <span>Industry Certifications</span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Contact Info */}
// //             <div className="bg-white rounded-2xl shadow-xl p-6">
// //               <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Help?</h3>
// //               <div className="space-y-4">
// //                 <div className="flex items-center p-4 bg-blue-50 rounded-xl">
// //                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
// //                     <AlertCircle className="h-6 w-6 text-blue-600" />
// //                   </div>
// //                   <div>
// //                     <div className="font-semibold text-gray-900">Admission Helpline</div>
// //                     <div className="text-blue-600 font-medium">8970002004</div>
// //                   </div>
// //                 </div>
// //                 <div className="text-center">
// //                   <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-xl font-semibold transition-all duration-300">
// //                     Schedule Campus Visit
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Link } from "react-router-dom"
// import {
//   Calendar,
//   FileText,
//   Users,
//   CheckCircle,
//   Clock,
//   Award,
//   Phone,
//   Mail,
//   Download,
//   Calculator,
//   CreditCard,
//   GraduationCap,
// } from "lucide-react"

// export default function Admission() {
//   const [selectedProgram, setSelectedProgram] = useState("")
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     program: "",
//     qualification: "",
//     marks: "",
//     message: "",
//   })

//   const programs = [
//     {
//       name: "BCA + Full Stack Development + PGCCA",
//       duration: "3+1 Years",
//       fee: "₹2,50,000",
//       eligibility: "12th Pass (Any Stream)",
//       seats: "60",
//     },
//     {
//       name: "BCA + Data Analytics + PGCCA",
//       duration: "3+1 Years",
//       fee: "₹2,50,000",
//       eligibility: "12th Pass (Any Stream)",
//       seats: "60",
//     },
//     {
//       name: "BCA + Digital Marketing + PGCCA",
//       duration: "3+1 Years",
//       fee: "₹2,50,000",
//       eligibility: "12th Pass (Any Stream)",
//       seats: "60",
//     },
//     {
//       name: "BBA + Digital Marketing + PGCBA",
//       duration: "3+1 Years",
//       fee: "₹2,30,000",
//       eligibility: "12th Pass (Any Stream)",
//       seats: "60",
//     },
//     {
//       name: "BCOM + ACCA + PGCFM",
//       duration: "3+1 Years",
//       fee: "₹2,80,000",
//       eligibility: "12th Pass (Commerce/Science)",
//       seats: "40",
//     },
//   ]

//   const admissionProcess = [
//     {
//       step: "01",
//       title: "Online Application",
//       description: "Fill out the online application form with your academic details",
//       icon: <FileText className="h-6 w-6" />,
//       timeline: "Ongoing",
//     },
//     {
//       step: "02",
//       title: "Document Verification",
//       description: "Submit required documents for verification",
//       icon: <CheckCircle className="h-6 w-6" />,
//       timeline: "Within 2 days",
//     },
//     {
//       step: "03",
//       title: "Counseling Session",
//       description: "One-on-one counseling with our admission experts",
//       icon: <Users className="h-6 w-6" />,
//       timeline: "Scheduled",
//     },
//     {
//       step: "04",
//       title: "Fee Payment",
//       description: "Secure your seat with fee payment (EMI options available)",
//       icon: <CreditCard className="h-6 w-6" />,
//       timeline: "After counseling",
//     },
//     {
//       step: "05",
//       title: "Admission Confirmation",
//       description: "Receive admission confirmation and welcome kit",
//       icon: <Award className="h-6 w-6" />,
//       timeline: "Immediate",
//     },
//   ]

//   const requiredDocuments = [
//     "10th Mark Sheet & Certificate",
//     "12th Mark Sheet & Certificate",
//     "Transfer Certificate (TC)",
//     "Migration Certificate (if applicable)",
//     "Conduct Certificate",
//     "Passport Size Photographs (6 copies)",
//     "Aadhar Card Copy",
//     "Category Certificate (if applicable)",
//   ]

//   const scholarships = [
//     {
//       title: "Merit Scholarship",
//       description: "Up to 25% fee waiver for students with 90%+ in 12th",
//       eligibility: "90%+ in 12th standard",
//       benefit: "25% Fee Waiver",
//     },
//     {
//       title: "Sports Scholarship",
//       description: "Special scholarships for state/national level sports achievers",
//       eligibility: "State/National level sports participation",
//       benefit: "Up to 50% Fee Waiver",
//     },
//     {
//       title: "Need-Based Scholarship",
//       description: "Financial assistance for economically disadvantaged students",
//       eligibility: "Family income < ₹3 LPA",
//       benefit: "Up to 30% Fee Waiver",
//     },
//     {
//       title: "Early Bird Discount",
//       description: "Special discount for early admissions",
//       eligibility: "Apply before March 31st",
//       benefit: "10% Discount",
//     },
//   ]

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     // Submit to Supabase contact table
//     console.log("Submitting admission form to Supabase:", formData)
//     // Add your Supabase integration here
//   }

//   const handleDownloadBrochure = () => {
//     const link = document.createElement("a")
//     link.href = "/course-brochure.pdf"
//     link.download = "BIMSR-Admission-Brochure.pdf"
//     link.click()
//   }

//   const handleFeeCalculator = () => {
//     // Navigate to fee calculator
//     window.location.href = "/fee-calculator"
//   }

//   return (
//     <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600/10 to-blue-600/10 backdrop-blur-sm border border-green-200/50 rounded-full px-6 py-3 mb-6">
//             <GraduationCap className="h-5 w-5 text-green-600" />
//             <span className="text-green-700 font-semibold">Admissions 2025-26 Open</span>
//           </div>
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               Secure Your
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
//               Future Today
//             </span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Join BIMSR's revolutionary programs with 100% placement guarantee. Limited seats available for 2025-26
//             batch. Apply now and transform your career with industry-ready skills.
//           </p>
//         </div>

//         {/* Urgent Alert */}
//         <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-6 text-white mb-16 text-center">
//           <div className="flex items-center justify-center space-x-2 mb-4">
//             <Clock className="h-6 w-6 animate-pulse" />
//             <span className="text-xl font-bold">⚠️ LIMITED SEATS AVAILABLE!</span>
//           </div>
//           <p className="text-lg mb-4">
//             Only a few seats remaining for 2025-26 batch. Don't miss your chance to secure admission with early bird
//             discount.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300">
//               Apply Now - Get 10% Discount
//             </button>
//             <a
//               href="tel:8970002004"
//               className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
//             >
//               Call Now: 8970002004
//             </a>
//           </div>
//         </div>

//         {/* Programs Overview */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Programs</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Choose from our industry-aligned programs with guaranteed placements and comprehensive skill development
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {programs.map((program, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 p-6"
//               >
//                 <div className="text-center">
//                   <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{program.name}</h3>
//                   <div className="space-y-3 mb-6">
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600 text-sm">Duration:</span>
//                       <span className="font-semibold text-blue-600">{program.duration}</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600 text-sm">Total Fee:</span>
//                       <span className="font-semibold text-green-600">{program.fee}</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600 text-sm">Eligibility:</span>
//                       <span className="font-semibold text-gray-800 text-sm">{program.eligibility}</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600 text-sm">Available Seats:</span>
//                       <span className="font-semibold text-red-600">{program.seats}</span>
//                     </div>
//                   </div>
//                   <Link
//                     to={`/programs/${program.name.toLowerCase().replace(/\s+/g, "-").replace(/\+/g, "")}`}
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Admission Process */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Admission Process</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Our streamlined admission process ensures quick and hassle-free enrollment
//             </p>
//           </div>

//           <div className="grid md:grid-cols-5 gap-8">
//             {admissionProcess.map((process, index) => (
//               <div key={index} className="text-center group">
//                 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative h-full">
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
//                     {process.step}
//                   </div>
//                   <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 mt-4 text-blue-600">
//                     {process.icon}
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
//                   <p className="text-sm text-gray-600 leading-relaxed mb-3">{process.description}</p>
//                   <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
//                     {process.timeline}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Application Form */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-20">
//           {/* Form */}
//           <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Apply Now</h3>
//               <p className="text-gray-600">Fill out the form below to start your admission process</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Enter your full name"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Enter your phone number"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Program of Interest *
//                   </label>
//                   <select
//                     id="program"
//                     name="program"
//                     value={formData.program}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     required
//                   >
//                     <option value="">Select a program</option>
//                     {programs.map((program, index) => (
//                       <option key={index} value={program.name}>
//                         {program.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="qualification" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Highest Qualification *
//                   </label>
//                   <select
//                     id="qualification"
//                     name="qualification"
//                     value={formData.qualification}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     required
//                   >
//                     <option value="">Select qualification</option>
//                     <option value="12th-science">12th Science</option>
//                     <option value="12th-commerce">12th Commerce</option>
//                     <option value="12th-arts">12th Arts</option>
//                     <option value="diploma">Diploma</option>
//                     <option value="graduation">Graduation</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label htmlFor="marks" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Percentage/CGPA *
//                   </label>
//                   <input
//                     type="text"
//                     id="marks"
//                     name="marks"
//                     value={formData.marks}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Enter your marks"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Additional Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   rows={4}
//                   className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
//                   placeholder="Any additional information or questions..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 Submit Application
//               </button>
//             </form>
//           </div>

//           {/* Required Documents & Scholarships */}
//           <div className="space-y-8">
//             {/* Required Documents */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//               <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
//                 <FileText className="h-5 w-5 mr-2 text-blue-600" />
//                 Required Documents
//               </h4>
//               <div className="space-y-3">
//                 {requiredDocuments.map((doc, index) => (
//                   <div key={index} className="flex items-start space-x-3">
//                     <CheckCircle className="h-4 w-4 text-green-600 mt-1 shrink-0" />
//                     <span className="text-gray-700 text-sm">{doc}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Scholarships */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//               <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
//                 <Award className="h-5 w-5 mr-2 text-green-600" />
//                 Scholarships Available
//               </h4>
//               <div className="space-y-4">
//                 {scholarships.map((scholarship, index) => (
//                   <div key={index} className="border border-gray-200 rounded-lg p-4">
//                     <div className="flex justify-between items-start mb-2">
//                       <h5 className="font-semibold text-gray-900">{scholarship.title}</h5>
//                       <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
//                         {scholarship.benefit}
//                       </span>
//                     </div>
//                     <p className="text-gray-600 text-sm mb-2">{scholarship.description}</p>
//                     <p className="text-blue-600 text-xs font-medium">{scholarship.eligibility}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
//               <h4 className="text-xl font-bold mb-4">Need Help?</h4>
//               <div className="space-y-3">
//                 <button
//                   onClick={handleDownloadBrochure}
//                   className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
//                 >
//                   <Download className="h-4 w-4 mr-2" />
//                   Download Brochure
//                 </button>
//                 <button
//                   onClick={handleFeeCalculator}
//                   className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
//                 >
//                   <Calculator className="h-4 w-4 mr-2" />
//                   Fee Calculator
//                 </button>
//                 <a
//                   href="tel:8970002004"
//                   className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
//                 >
//                   <Phone className="h-4 w-4 mr-2" />
//                   Call: 8970002004
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Information */}
//         <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//           <div className="relative z-10 text-center">
//             <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
//             <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
//               Our admission counselors are here to help you make the right choice for your future. Contact us today!
//             </p>
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="text-center">
//                 <Phone className="h-8 w-8 mx-auto mb-3" />
//                 <h4 className="font-bold mb-2">Call Us</h4>
//                 <p className="text-green-100">8970002004</p>
//               </div>
//               <div className="text-center">
//                 <Mail className="h-8 w-8 mx-auto mb-3" />
//                 <h4 className="font-bold mb-2">Email Us</h4>
//                 <p className="text-green-100">admissions@bangaloreinstitutions.com</p>
//               </div>
//               <div className="text-center">
//                 <Calendar className="h-8 w-8 mx-auto mb-3" />
//                 <h4 className="font-bold mb-2">Visit Campus</h4>
//                 <Link to="/contact" className="text-green-100 hover:text-white transition-colors duration-300">
//                   Schedule Tour
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import type React from "react"
import { useState } from "react"
import {
  GraduationCap,
  Calendar,
  FileText,
  Users,
  Award,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  MapPin,
  Download,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
} from "lucide-react"
import  supabase  from "../lib/supabase"

export default function Admission() {
  const [selectedProgram, setSelectedProgram] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    qualification: "",
    percentage: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    guardianName: "",
    guardianPhone: "",
    preferredDate: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const programs = [
    {
      id: "bca-fullstack",
      name: "BCA + Full Stack + PGCCA",
      duration: "4 Years",
      fee: "₹2.5L Total",
      highlights: ["Full Stack Development", "Industry Certifications", "Live Projects"],
      eligibility: "12th Pass (Any Stream)",
      seats: "60",
      href: "programs/bca-full-stack",
    },
    {
      id: "bca-data-analytics",
      name: "BCA + Data Analytics + PGCCA",
      duration: "4 Years",
      fee: "₹2.5L Total",
      highlights: ["Data Science", "Machine Learning", "Business Intelligence"],
      eligibility: "12th Pass (Any Stream)",
      seats: "60",
      href: "programs/bca-data-analytics",
    },
    {
      id: "bca-digital-marketing",
      name: "BCA + Digital Marketing + PGCCA",
      duration: "4 Years",
      fee: "₹2.5L Total",
      highlights: ["SEO/SEM", "Social Media Marketing", "Content Strategy"],
      eligibility: "12th Pass (Any Stream)",
      seats: "60",
      href: "programs/bca-digital-marketing",
    },
    {
      id: "bba-digital-marketing",
      name: "BBA + Digital Marketing + PGCBA",
      duration: "4 Years",
      fee: "₹2.3L Total",
      highlights: ["Business Management", "Digital Strategy", "Brand Management"],
      eligibility: "12th Pass (Any Stream)",
      seats: "60",
      href: "programs/bba-digital-marketing",
    },
    {
      id: "bcom-acca",
      name: "BCOM + ACCA + PGCFM",
      duration: "4 Years",
      fee: "₹2.8L Total",
      highlights: ["Global Accounting", "Financial Management", "ACCA Certification"],
      eligibility: "12th Pass (Commerce/Science)",
      seats: "40",
      href: "programs/bcom-acca",
    },
  ]

  const admissionProcess = [
    {
      step: 1,
      title: "Online Application",
      description: "Fill out the application form with your academic and personal details",
      icon: <FileText className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: 2,
      title: "Document Verification",
      description: "Submit required documents for verification and eligibility check",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: 3,
      title: "Counseling Session",
      description: "One-on-one counseling to understand your career goals and program fit",
      icon: <Users className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description: "Fee payment and seat confirmation to secure your admission",
      icon: <Award className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
    },
  ]

  const requiredDocuments = [
    "10th & 12th Mark Sheets",
    "Transfer Certificate",
    "Migration Certificate",
    "Conduct Certificate",
    "Passport Size Photos (6 copies)",
    "Aadhar Card Copy",
    "Income Certificate (for scholarship)",
    "Caste Certificate (if applicable)",
  ]

  const keyFeatures = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "100% Placement Guarantee",
      description: "Industry partnerships ensuring job placement for every graduate",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "High Starting Salaries",
      description: "Average package of ₹8-12 LPA with top performers earning ₹20+ LPA",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Industry Certifications",
      description: "Multiple certifications from Google, Microsoft, AWS, and other tech giants",
      gradient: "from-blue-500 to-purple-500",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const admissionData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        program: formData.program,
        qualification: formData.qualification,
        percentage: formData.percentage,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        guardian_name: formData.guardianName,
        guardian_phone: formData.guardianPhone,
        preferred_date: formData.preferredDate || null,
        created_at: new Date().toISOString(),
      }

      const { data, error } = await supabase.from("admissions").insert([admissionData])

      if (error) throw error

      setSubmitStatus("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        program: "",
        qualification: "",
        percentage: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        guardianName: "",
        guardianPhone: "",
        preferredDate: "",
      })
    } catch (error) {
      console.error("Error submitting application:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
            <GraduationCap className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Admissions 2025-26</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Secure Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Future</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join India's first AI-powered education institute. Transform your career with industry-ready programs,
            guaranteed placements, and cutting-edge technology education.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center h-full">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Programs Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Choose Your Program
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select from our industry-aligned programs designed to make you job-ready from day one
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {program.seats} Seats
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {program.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">{program.fee}</p>
                    <p className="text-sm text-gray-500">Total Fee</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Eligibility:</span>
                    <span className="font-medium text-gray-900">{program.eligibility}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={program.href}
                    className="flex-1 border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 text-center"
                  >
                    View Details
                  </a>
                  <button
                    onClick={() => {
                      setSelectedProgram(program.id)
                      setFormData((prev) => ({ ...prev, program: program.name }))
                      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Admission Process
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple and transparent admission process designed to make your journey smooth
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {admissionProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg`}
                  >
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
                    <span className="text-sm font-bold text-gray-700">{process.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="application-form" className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Form</h3>
              <p className="text-gray-600">Fill out the form below to start your admission process</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter email address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-2">
                  Program *
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select a program</option>
                  {programs.map((program, index) => (
                    <option key={index} value={program.name}>
                      {program.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="qualification" className="block text-sm font-semibold text-gray-700 mb-2">
                    Highest Qualification *
                  </label>
                  <select
                    id="qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select qualification</option>
                    <option value="12th Science">12th Science</option>
                    <option value="12th Commerce">12th Commerce</option>
                    <option value="12th Arts">12th Arts</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="percentage" className="block text-sm font-semibold text-gray-700 mb-2">
                    Percentage/CGPA *
                  </label>
                  <input
                    type="text"
                    id="percentage"
                    name="percentage"
                    value={formData.percentage}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter percentage or CGPA"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter full address"
                  required
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter city"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter state"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter pincode"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="guardianName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Guardian Name *
                  </label>
                  <input
                    type="text"
                    id="guardianName"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter guardian name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="guardianPhone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Guardian Phone *
                  </label>
                  <input
                    type="tel"
                    id="guardianPhone"
                    name="guardianPhone"
                    value={formData.guardianPhone}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter guardian phone"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Counseling Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-800">
                  <p className="font-semibold">Application submitted successfully!</p>
                  <p className="text-sm">Our admission team will contact you within 24 hours for the next steps.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800">
                  <p className="font-semibold">Failed to submit application.</p>
                  <p className="text-sm">Please try again or contact our admission team directly.</p>
                </div>
              )}
            </form>
          </div>

          {/* Required Documents */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Required Documents</h3>
              <div className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Need Help?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Call Us</p>
                    <p className="text-gray-600">+91 8970002004</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email Us</p>
                    <p className="text-gray-600">admissions@bangaloreinstitutions.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Visit Us</p>
                    <p className="text-gray-600">Electronic City, Bangalore</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Brochure */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Download Brochure</h3>
              <p className="text-blue-100 mb-6">
                Get detailed information about all our programs, fees, and facilities
              </p>
              <a
                href="course-brochure.pdf"
                download
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download Now
              </a>
            </div>
          </div>
        </div>

        {/* Important Dates */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Important Dates</h3>
            <p className="text-blue-100 text-lg">Mark your calendar for key admission milestones</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Application Start</h4>
              <p className="text-blue-100">January 15, 2025</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Application Deadline</h4>
              <p className="text-blue-100">June 30, 2025</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Counseling Period</h4>
              <p className="text-blue-100">July 1-15, 2025</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg mb-2">Classes Begin</h4>
              <p className="text-blue-100">August 1, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
