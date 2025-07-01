// // import { Calendar, FileText, Users, Award, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react"

// // export default function Admission() {
// //   const eligibilityRequirements = [
// //     "10+2 or equivalent from a recognized board",
// //     "Minimum 50% aggregate marks (45% for SC/ST candidates)",
// //     "Valid entrance test score (if applicable)",
// //     "English proficiency for communication",
// //   ]

// //   const admissionProcess = [
// //     {
// //       step: "1",
// //       title: "Online Application",
// //       description: "Submit online application with required documents and ₹10K seat booking",
// //       icon: <FileText className="h-6 w-6 text-blue-600" />,
// //     },
// //     {
// //       step: "2",
// //       title: "Document Verification",
// //       description: "Upload and verify all academic documents and certificates",
// //       icon: <Award className="h-6 w-6 text-blue-600" />,
// //     },
// //     {
// //       step: "3",
// //       title: "Personal Interview",
// //       description: "Face-to-face or online interview with admission panel",
// //       icon: <Users className="h-6 w-6 text-blue-600" />,
// //     },
// //     {
// //       step: "4",
// //       title: "Final Selection",
// //       description: "Merit-based selection and admission confirmation with onboarding kit",
// //       icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
// //     },
// //   ]

// //   const importantDates = [
// //     { event: "Application Start Date", date: "January 2024" },
// //     { event: "Application Last Date", date: "July 2024" },
// //     { event: "Interview Rounds", date: "June-July 2024" },
// //     { event: "Final Merit List", date: "August 2024" },
// //     { event: "Classes Commence", date: "August 2024" },
// //     { event: "Onboarding Kit Distribution", date: "First Week" },
// //   ]

// //   const requiredDocuments = [
// //     "Completed application form",
// //     "10th and 12th mark sheets and certificates",
// //     "Transfer certificate from previous institution",
// //     "Character certificate",
// //     "Caste certificate (if applicable)",
// //     "Passport size photographs",
// //     "Aadhar card copy",
// //     "Income certificate (for scholarships)",
// //   ]

// //   return (
// //     <section id="admission" className="w-full py-12 md:py-24 lg:py-32 bg-white">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
// //           <div className="space-y-2">
// //             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Admissions 2024</div>
// //             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
// //               Join India's First AI-Powered Institute
// //             </h2>
// //             <p className="max-w-3xl text-gray-600 md:text-xl">
// //               Transform your future with BIMSR's revolutionary programs. Limited seats available for 2024 batch with
// //               100% placement guarantee and industry certifications.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Admission Alert */}
// //         <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-12">
// //           <div className="flex items-start gap-3">
// //             <AlertCircle className="h-6 w-6 text-orange-600 mt-1" />
// //             <div>
// //               <h3 className="font-semibold text-orange-800 mb-2">Hurry! Limited Seats Available</h3>
// //               <p className="text-orange-700 text-sm">
// //                 Admissions for 2024 batch are now open. Secure your seat with just ₹10K booking amount. Don't miss this
// //                 opportunity to join India's first AI-powered education institute!
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Eligibility Criteria */}
// //         <div className="grid lg:grid-cols-2 gap-8 mb-12">
// //           <div className="card p-6">
// //             <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
// //               <CheckCircle className="h-6 w-6 text-green-600" />
// //               Eligibility Criteria
// //             </h3>
// //             <ul className="space-y-3">
// //               {eligibilityRequirements.map((requirement, index) => (
// //                 <li key={index} className="flex items-start gap-2">
// //                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
// //                   <span className="text-gray-700 text-sm">{requirement}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           <div className="card p-6">
// //             <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
// //               <Calendar className="h-6 w-6 text-blue-600" />
// //               Important Dates
// //             </h3>
// //             <div className="space-y-3">
// //               {importantDates.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
// //                 >
// //                   <span className="text-gray-700 text-sm">{item.event}</span>
// //                   <span className="text-blue-600 font-semibold text-sm">{item.date}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Admission Process */}
// //         <div className="mb-12">
// //           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Simple Admission Process</h3>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {admissionProcess.map((process, index) => (
// //               <div key={index} className="card p-6 text-center relative">
// //                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //                   {process.icon}
// //                 </div>
// //                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
// //                   {process.step}
// //                 </div>
// //                 <h4 className="text-lg font-bold text-blue-800 mb-2">{process.title}</h4>
// //                 <p className="text-gray-600 text-sm">{process.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Required Documents */}
// //         <div className="card p-6 mb-12">
// //           <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
// //             <FileText className="h-6 w-6 text-blue-600" />
// //             Required Documents
// //           </h3>
// //           <div className="grid md:grid-cols-2 gap-4">
// //             {requiredDocuments.map((document, index) => (
// //               <div key={index} className="flex items-center gap-2">
// //                 <CheckCircle className="h-4 w-4 text-green-600" />
// //                 <span className="text-gray-700 text-sm">{document}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Contact for Admission */}
// //         <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
// //           <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Future?</h3>
// //           <p className="mb-6 text-blue-100">
// //             Our admission counselors are here to guide you through the process. Contact us for personalized assistance
// //             and secure your seat today!
// //           </p>
// //           <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
// //             <div className="flex items-center justify-center gap-2">
// //               <Phone className="h-5 w-5" />
// //               <span>8970002004</span>
// //             </div>
// //             <div className="flex items-center justify-center gap-2">
// //               <Mail className="h-5 w-5" />
// //               <span>admissions@Bangaloreinstitutions.com</span>
// //             </div>
// //           </div>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
// //               Apply Now - Secure Your Seat
// //             </button>
// //             <button className="bg-white/10 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
// //               Schedule Campus Visit
// //             </button>
// //           </div>
// //           <div className="mt-4 text-sm text-blue-100">
// //             <strong>Seat Booking:</strong> Just ₹10K | <strong>Zero-Cost EMI Available</strong>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import type React from "react"

// import { useState } from "react"
// import {
//   Calendar,
//   FileText,
//   Users,
//   Award,
//   CheckCircle,
//   AlertCircle,
//   Phone,
//   Mail,
//   Star,
//   Download,
//   Send,
// } from "lucide-react"

// export default function Admission() {
//   const [activeStep, setActiveStep] = useState(0)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     program: "",
//   })

//   const eligibilityRequirements = [
//     {
//       title: "Academic Qualification",
//       description: "10+2 or equivalent from a recognized board",
//       icon: <Award className="h-6 w-6" />,
//     },
//     {
//       title: "Minimum Marks",
//       description: "Minimum 50% aggregate marks (45% for SC/ST candidates)",
//       icon: <Star className="h-6 w-6" />,
//     },
//     {
//       title: "Entrance Test",
//       description: "Valid entrance test score (if applicable)",
//       icon: <FileText className="h-6 w-6" />,
//     },
//     {
//       title: "Language Proficiency",
//       description: "English proficiency for communication",
//       icon: <Users className="h-6 w-6" />,
//     },
//   ]

//   const admissionProcess = [
//     {
//       step: "01",
//       title: "Online Application",
//       description: "Submit online application with required documents and ₹10K seat booking",
//       icon: <FileText className="h-8 w-8" />,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       step: "02",
//       title: "Document Verification",
//       description: "Upload and verify all academic documents and certificates",
//       icon: <Award className="h-8 w-8" />,
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       step: "03",
//       title: "Personal Interview",
//       description: "Face-to-face or online interview with admission panel",
//       icon: <Users className="h-8 w-8" />,
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       step: "04",
//       title: "Final Selection",
//       description: "Merit-based selection and admission confirmation with onboarding kit",
//       icon: <CheckCircle className="h-8 w-8" />,
//       color: "from-orange-500 to-red-500",
//     },
//   ]

//   const importantDates = [
//     { event: "Application Start Date", date: "January 2024", status: "completed" },
//     { event: "Application Last Date", date: "July 2024", status: "active" },
//     { event: "Interview Rounds", date: "June-July 2024", status: "upcoming" },
//     { event: "Final Merit List", date: "August 2024", status: "upcoming" },
//     { event: "Classes Commence", date: "August 2024", status: "upcoming" },
//     { event: "Onboarding Kit Distribution", date: "First Week", status: "upcoming" },
//   ]

//   const requiredDocuments = [
//     "Completed application form",
//     "10th and 12th mark sheets and certificates",
//     "Transfer certificate from previous institution",
//     "Character certificate",
//     "Caste certificate (if applicable)",
//     "Passport size photographs",
//     "Aadhar card copy",
//     "Income certificate (for scholarships)",
//   ]

//   const programs = [
//     "BCA + Full Stack + PGCCA",
//     "BCA + Data Analytics + PGCCA",
//     "BCA + Digital Marketing + PGCCA",
//     "BBA + Digital Marketing + PGCBA",
//     "BCOM + ACCA + PGCFM",
//   ]

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//   }

//   return (
//     <section
//       id="admission"
//       className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
//             <Calendar className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">Admissions 2024</span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               Join India's First
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               AI-Powered Institute
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Transform your future with BIMSR's revolutionary programs. Limited seats available for 2024 batch with 100%
//             placement guarantee and industry certifications.
//           </p>
//         </div>

//         {/* Admission Alert */}
//         <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 mb-16 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
//           <div className="relative z-10">
//             <div className="flex items-start gap-4">
//               <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
//                 <AlertCircle className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold mb-3">Hurry! Limited Seats Available</h3>
//                 <p className="text-orange-100 text-lg leading-relaxed">
//                   Admissions for 2024 batch are now open. Secure your seat with just ₹10K booking amount. Don't miss
//                   this opportunity to join India's first AI-powered education institute!
//                 </p>
//                 <div className="mt-6 flex flex-wrap gap-4">
//                   <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
//                     Apply Now
//                   </button>
//                   <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30">
//                     Download Brochure
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Eligibility & Important Dates */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-20">
//           {/* Eligibility Criteria */}
//           <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//             <div className="flex items-center gap-3 mb-8">
//               <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
//                 <CheckCircle className="h-6 w-6 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900">Eligibility Criteria</h3>
//             </div>
//             <div className="space-y-6">
//               {eligibilityRequirements.map((requirement, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
//                 >
//                   <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
//                     {requirement.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-1">{requirement.title}</h4>
//                     <p className="text-gray-600 text-sm">{requirement.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Important Dates */}
//           <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//             <div className="flex items-center gap-3 mb-8">
//               <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
//                 <Calendar className="h-6 w-6 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900">Important Dates</h3>
//             </div>
//             <div className="space-y-4">
//               {importantDates.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
//                 >
//                   <div>
//                     <span className="text-gray-900 font-medium">{item.event}</span>
//                     <div className="flex items-center gap-2 mt-1">
//                       <div
//                         className={`w-2 h-2 rounded-full ${
//                           item.status === "completed"
//                             ? "bg-green-500"
//                             : item.status === "active"
//                               ? "bg-orange-500"
//                               : "bg-gray-400"
//                         }`}
//                       ></div>
//                       <span className="text-xs text-gray-500 capitalize">{item.status}</span>
//                     </div>
//                   </div>
//                   <span className="text-blue-600 font-semibold">{item.date}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Admission Process */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">Simple Admission Process</h3>
//             <p className="text-gray-600 text-lg">Follow these easy steps to secure your admission</p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {admissionProcess.map((process, index) => (
//               <div key={index} className="group cursor-pointer" onClick={() => setActiveStep(index)}>
//                 <div
//                   className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
//                     activeStep === index ? "border-blue-500" : "border-gray-100"
//                   }`}
//                 >
//                   <div className="relative mb-6">
//                     <div
//                       className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                     >
//                       {process.icon}
//                     </div>
//                     <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
//                       {process.step}
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <h4 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h4>
//                     <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Required Documents */}
//         <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-20">
//           <div className="flex items-center gap-3 mb-8">
//             <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//               <FileText className="h-6 w-6 text-white" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900">Required Documents</h3>
//           </div>
//           <div className="grid md:grid-cols-2 gap-4">
//             {requiredDocuments.map((document, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
//               >
//                 <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
//                 <span className="text-gray-700">{document}</span>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
//             <div className="flex items-center gap-3 mb-3">
//               <Download className="h-5 w-5 text-blue-600" />
//               <span className="font-semibold text-blue-900">Document Checklist</span>
//             </div>
//             <p className="text-blue-700 text-sm mb-4">
//               Download our comprehensive document checklist to ensure you have everything ready for your application.
//             </p>
//             <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
//               Download Checklist
//             </button>
//           </div>
//         </div>

//         {/* Quick Application Form */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//           <div className="relative z-10">
//             <div className="text-center mb-8">
//               <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h3>
//               <p className="text-blue-100 text-lg">Start your application process today and secure your seat</p>
//             </div>

//             <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Full Name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email Address"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="grid md:grid-cols-2 gap-6 mb-8">
//                 <div>
//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone Number"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <select
//                     name="program"
//                     value={formData.program}
//                     onChange={handleInputChange}
//                     className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
//                     required
//                   >
//                     <option value="" className="text-gray-900">
//                       Select Program
//                     </option>
//                     {programs.map((program, index) => (
//                       <option key={index} value={program} className="text-gray-900">
//                         {program}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
//                 >
//                   <Send className="h-5 w-5" />
//                   Submit Application
//                 </button>
//               </div>
//             </form>

//             <div className="mt-8 text-center">
//               <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
//                 <div className="flex items-center justify-center gap-2">
//                   <Phone className="h-5 w-5" />
//                   <span>8970002004</span>
//                 </div>
//                 <div className="flex items-center justify-center gap-2">
//                   <Mail className="h-5 w-5" />
//                   <span>admissions@Bangaloreinstitutions.com</span>
//                 </div>
//               </div>
//               <div className="mt-4 text-sm text-blue-100">
//                 <strong>Seat Booking:</strong> Just ₹10K | <strong>Zero-Cost EMI Available</strong>
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
import { Calendar, FileText, CheckCircle, AlertCircle, Users, Award, BookOpen, CreditCard } from "lucide-react"

export default function Admission() {
  const [selectedStep, setSelectedStep] = useState(0)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    qualification: "",
    percentage: "",
    category: "",
  })

  const admissionSteps = [
    {
      title: "Application Form",
      description: "Fill out the online application form",
      icon: FileText,
      status: "current",
    },
    {
      title: "Document Verification",
      description: "Submit required documents",
      icon: CheckCircle,
      status: "upcoming",
    },
    {
      title: "Entrance Test",
      description: "Appear for entrance examination",
      icon: BookOpen,
      status: "upcoming",
    },
    {
      title: "Interview",
      description: "Personal interview with faculty",
      icon: Users,
      status: "upcoming",
    },
    {
      title: "Fee Payment",
      description: "Complete admission formalities",
      icon: CreditCard,
      status: "upcoming",
    },
  ]

  const programs = [
    {
      name: "BCA + Full Stack Development + PGCCA",
      duration: "3 Years",
      fee: "₹2,50,000",
      eligibility: "12th Pass (Any Stream)",
      seats: "60",
    },
    {
      name: "BCA + Data Analytics + PGCCA",
      duration: "3 Years",
      fee: "₹2,50,000",
      eligibility: "12th Pass (Any Stream)",
      seats: "60",
    },
    {
      name: "BCA + Digital Marketing + PGCCA",
      duration: "3 Years",
      fee: "₹2,50,000",
      eligibility: "12th Pass (Any Stream)",
      seats: "60",
    },
    {
      name: "BBA + Digital Marketing + PGCBA",
      duration: "3 Years",
      fee: "₹2,30,000",
      eligibility: "12th Pass (Any Stream)",
      seats: "60",
    },
    {
      name: "BCOM + ACCA + PGCFM",
      duration: "3 Years",
      fee: "₹2,80,000",
      eligibility: "12th Pass (Commerce/Science)",
      seats: "40",
    },
  ]

  const importantDates = [
    { event: "Application Opens", date: "January 15, 2025", status: "active" },
    { event: "Last Date to Apply", date: "June 30, 2025", status: "upcoming" },
    { event: "Entrance Test", date: "July 15, 2025", status: "upcoming" },
    { event: "Results Declaration", date: "July 25, 2025", status: "upcoming" },
    { event: "Admission Confirmation", date: "August 10, 2025", status: "upcoming" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Admissions 2025-26
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join India's leading institute for technology and management education. Shape your future with
            industry-relevant programs and 100% placement guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Apply Now - Free
            </button>
            <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Admission Process */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Admission Process</h2>
              <div className="space-y-6">
                {admissionSteps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div
                      key={index}
                      className={`flex items-center p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                        selectedStep === index
                          ? "border-blue-500 bg-blue-50 shadow-lg"
                          : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedStep(index)}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                          selectedStep === index ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                      <div className="text-2xl font-bold text-gray-300">{index + 1}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Application Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Program of Interest *</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select Program</option>
                      {programs.map((program, index) => (
                        <option key={index} value={program.name}>
                          {program.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Highest Qualification *</label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select Qualification</option>
                      <option value="12th">12th Standard</option>
                      <option value="diploma">Diploma</option>
                      <option value="graduation">Graduation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Percentage/CGPA *</label>
                    <input
                      type="text"
                      name="percentage"
                      value={formData.percentage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your percentage"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Submit Application
                </button>
              </form>
            </div>

            {/* Programs Overview */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Programs</h2>
              <div className="space-y-6">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.name}</h3>
                        <p className="text-gray-600">Eligibility: {program.eligibility}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 text-center">
                        <div className="bg-blue-50 px-4 py-2 rounded-lg">
                          <div className="text-sm text-gray-600">Duration</div>
                          <div className="font-semibold text-blue-600">{program.duration}</div>
                        </div>
                        <div className="bg-green-50 px-4 py-2 rounded-lg">
                          <div className="text-sm text-gray-600">Total Fee</div>
                          <div className="font-semibold text-green-600">{program.fee}</div>
                        </div>
                        <div className="bg-purple-50 px-4 py-2 rounded-lg">
                          <div className="text-sm text-gray-600">Seats</div>
                          <div className="font-semibold text-purple-600">{program.seats}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Important Dates */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-blue-600" />
                Important Dates
              </h3>
              <div className="space-y-4">
                {importantDates.map((date, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900">{date.event}</div>
                      <div className="text-sm text-gray-600">{date.date}</div>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full ${date.status === "active" ? "bg-green-500" : "bg-gray-300"}`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Why Choose BIMSR?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="h-6 w-6 mr-3 text-yellow-400" />
                  <span>100% Placement Record</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 mr-3 text-green-400" />
                  <span>Industry Expert Faculty</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-6 w-6 mr-3 text-blue-300" />
                  <span>Modern Curriculum</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-3 text-emerald-400" />
                  <span>Industry Certifications</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Help?</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <AlertCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Admission Helpline</div>
                    <div className="text-blue-600 font-medium">8970002004</div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-xl font-semibold transition-all duration-300">
                    Schedule Campus Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
