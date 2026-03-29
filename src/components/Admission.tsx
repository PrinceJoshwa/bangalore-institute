// "use client"

// import type React from "react"
// import { useState } from "react"
// import {
//   GraduationCap,
//   Calendar,
//   FileText,
//   Users,
//   Award,
//   CheckCircle,
//   Clock,
//   Phone,
//   Mail,
//   MapPin,
//   Download,
//   ArrowRight,
//   Star,
//   TrendingUp,
//   Shield,
// } from "lucide-react"
// import  supabase  from "../lib/supabase"

// export default function Admission() {
//   const [selectedProgram, setSelectedProgram] = useState("")
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     program: "",
//     qualification: "",
//     percentage: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     guardianName: "",
//     guardianPhone: "",
//     preferredDate: "",
//   })

//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

//   const programs = [
//     {
//       id: "bca-fullstack",
//       name: "BCA + Full Stack + PGCCA",
//       duration: "4 Years",
//       fee: "₹2.5L Total",
//       highlights: ["Full Stack Development", "Industry Certifications", "Live Projects"],
//       eligibility: "12th Pass (Any Stream)",
//       seats: "60",
//       href: "programs/bca-full-stack",
//     },
//     {
//       id: "bca-data-analytics",
//       name: "BCA + Data Analytics + PGCCA",
//       duration: "4 Years",
//       fee: "₹2.5L Total",
//       highlights: ["Data Science", "Machine Learning", "Business Intelligence"],
//       eligibility: "12th Pass (Any Stream)",
//       seats: "60",
//       href: "programs/bca-data-analytics",
//     },
//     {
//       id: "bca-digital-marketing",
//       name: "BCA + Digital Marketing + PGCCA",
//       duration: "4 Years",
//       fee: "₹2.5L Total",
//       highlights: ["SEO/SEM", "Social Media Marketing", "Content Strategy"],
//       eligibility: "12th Pass (Any Stream)",
//       seats: "60",
//       href: "programs/bca-digital-marketing",
//     },
//     {
//       id: "bba-digital-marketing",
//       name: "BBA + Digital Marketing + PGCBA",
//       duration: "4 Years",
//       fee: "₹2.3L Total",
//       highlights: ["Business Management", "Digital Strategy", "Brand Management"],
//       eligibility: "12th Pass (Any Stream)",
//       seats: "60",
//       href: "programs/bba-digital-marketing",
//     },
//     {
//       id: "bcom-acca",
//       name: "BCOM + ACCA + PGCFM",
//       duration: "4 Years",
//       fee: "₹2.8L Total",
//       highlights: ["Global Accounting", "Financial Management", "ACCA Certification"],
//       eligibility: "12th Pass (Commerce/Science)",
//       seats: "40",
//       href: "programs/bcom-acca",
//     },
//   ]

//   const admissionProcess = [
//     {
//       step: 1,
//       title: "Online Application",
//       description: "Fill out the application form with your academic and personal details",
//       icon: <FileText className="h-6 w-6" />,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       step: 2,
//       title: "Document Verification",
//       description: "Submit required documents for verification and eligibility check",
//       icon: <CheckCircle className="h-6 w-6" />,
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       step: 3,
//       title: "Counseling Session",
//       description: "One-on-one counseling to understand your career goals and program fit",
//       icon: <Users className="h-6 w-6" />,
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       step: 4,
//       title: "Admission Confirmation",
//       description: "Fee payment and seat confirmation to secure your admission",
//       icon: <Award className="h-6 w-6" />,
//       color: "from-orange-500 to-red-500",
//     },
//   ]

//   const requiredDocuments = [
//     "10th & 12th Mark Sheets",
//     "Transfer Certificate",
//     "Migration Certificate",
//     "Conduct Certificate",
//     "Passport Size Photos (6 copies)",
//     "Aadhar Card Copy",
//     "Income Certificate (for scholarship)",
//     "Caste Certificate (if applicable)",
//   ]

//   const keyFeatures = [
//     {
//       icon: <Star className="h-8 w-8" />,
//       title: "100% Placement Guarantee",
//       description: "Industry partnerships ensuring job placement for every graduate",
//       gradient: "from-yellow-500 to-orange-500",
//     },
//     {
//       icon: <TrendingUp className="h-8 w-8" />,
//       title: "High Starting Salaries",
//       description: "Average package of ₹8-12 LPA with top performers earning ₹20+ LPA",
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       icon: <Shield className="h-8 w-8" />,
//       title: "Industry Certifications",
//       description: "Multiple certifications from Google, Microsoft, AWS, and other tech giants",
//       gradient: "from-blue-500 to-purple-500",
//     },
//   ]

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       const admissionData = {
//         first_name: formData.firstName,
//         last_name: formData.lastName,
//         email: formData.email,
//         phone: formData.phone,
//         program: formData.program,
//         qualification: formData.qualification,
//         percentage: formData.percentage,
//         address: formData.address,
//         city: formData.city,
//         state: formData.state,
//         pincode: formData.pincode,
//         guardian_name: formData.guardianName,
//         guardian_phone: formData.guardianPhone,
//         preferred_date: formData.preferredDate || null,
//         created_at: new Date().toISOString(),
//       }

//       const { data, error } = await supabase.from("admissions").insert([admissionData])

//       if (error) throw error

//       setSubmitStatus("success")
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         program: "",
//         qualification: "",
//         percentage: "",
//         address: "",
//         city: "",
//         state: "",
//         pincode: "",
//         guardianName: "",
//         guardianPhone: "",
//         preferredDate: "",
//       })
//     } catch (error) {
//       console.error("Error submitting application:", error)
//       setSubmitStatus("error")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
//             <GraduationCap className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">Admissions 2025-26</span>
//           </div>
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               Secure Your
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Future</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Join India's first AI-powered education institute. Transform your career with industry-ready programs,
//             guaranteed placements, and cutting-edge technology education.
//           </p>
//         </div>

//         {/* Key Features */}
//         <div className="grid md:grid-cols-3 gap-8 mb-20">
//           {keyFeatures.map((feature, index) => (
//             <div key={index} className="group">
//               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center h-full">
//                 <div
//                   className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                 >
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Programs Section */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//                 Choose Your Program
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Select from our industry-aligned programs designed to make you job-ready from day one
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {programs.map((program, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="flex justify-between items-start mb-6">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
//                     <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
//                       <span className="flex items-center gap-1">
//                         <Clock className="h-4 w-4" />
//                         {program.duration}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Users className="h-4 w-4" />
//                         {program.seats} Seats
//                       </span>
//                     </div>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {program.highlights.map((highlight, idx) => (
//                         <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
//                           {highlight}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-2xl font-bold text-blue-600">{program.fee}</p>
//                     <p className="text-sm text-gray-500">Total Fee</p>
//                   </div>
//                 </div>

//                 <div className="space-y-3 mb-6">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Eligibility:</span>
//                     <span className="font-medium text-gray-900">{program.eligibility}</span>
//                   </div>
//                 </div>

//                 <div className="flex gap-3">
//                   <a
//                     href={program.href}
//                     className="flex-1 border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 text-center"
//                   >
//                     View Details
//                   </a>
//                   <button
//                     onClick={() => {
//                       setSelectedProgram(program.id)
//                       setFormData((prev) => ({ ...prev, program: program.name }))
//                       document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" })
//                     }}
//                     className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
//                   >
//                     Apply Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Admission Process */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//               <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//                 Admission Process
//               </span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Simple and transparent admission process designed to make your journey smooth
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             {admissionProcess.map((process, index) => (
//               <div key={index} className="text-center">
//                 <div className="relative mb-6">
//                   <div
//                     className={`w-20 h-20 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg`}
//                   >
//                     {process.icon}
//                   </div>
//                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100">
//                     <span className="text-sm font-bold text-gray-700">{process.step}</span>
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Application Form */}
//         <div id="application-form" className="grid lg:grid-cols-2 gap-12 mb-20">
//           {/* Form */}
//           <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Form</h3>
//               <p className="text-gray-600">Fill out the form below to start your admission process</p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
//                     First Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Enter first name"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Last Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Enter last name"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
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
//                     placeholder="Enter email address"
//                     required
//                   />
//                 </div>
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
//                     placeholder="Enter phone number"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Program *
//                 </label>
//                 <select
//                   id="program"
//                   name="program"
//                   value={formData.program}
//                   onChange={handleInputChange}
//                   className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                   required
//                 >
//                   <option value="">Select a program</option>
//                   {programs.map((program, index) => (
//                     <option key={index} value={program.name}>
//                       {program.name}
//                     </option>
//                   ))}
//                 </select>
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
//                     <option value="12th Science">12th Science</option>
//                     <option value="12th Commerce">12th Commerce</option>
//                     <option value="12th Arts">12th Arts</option>
//                     <option value="Diploma">Diploma</option>
//                     <option value="Graduate">Graduate</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label htmlFor="percentage" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Percentage/CGPA *
//                   </label>
//                   <input
//                     type="text"
//                     id="percentage"
//                     name="percentage"
//                     value={formData.percentage}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Enter percentage or CGPA"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Address *
//                 </label>
//                 <input
//                   type="text"
//                   id="address"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                   placeholder="Enter full address"
//                   required
//                 />
//               </div>

//               <div className="grid md:grid-cols-3 gap-6">
//                 <div>
//                   <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
//                     City *
//                   </label>
//                   <input
//                     type="text"
//                     id="city"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Enter city"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
//                     State *
//                   </label>
//                   <input
//                     type="text"
//                     id="state"
//                     name="state"
//                     value={formData.state}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Enter state"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Pincode *
//                   </label>
//                   <input
//                     type="text"
//                     id="pincode"
//                     name="pincode"
//                     value={formData.pincode}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Enter pincode"
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="guardianName" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Guardian Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="guardianName"
//                     name="guardianName"
//                     value={formData.guardianName}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Enter guardian name"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="guardianPhone" className="block text-sm font-semibold text-gray-700 mb-2">
//                     Guardian Phone *
//                   </label>
//                   <input
//                     type="tel"
//                     id="guardianPhone"
//                     name="guardianPhone"
//                     value={formData.guardianPhone}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                     placeholder="Enter guardian phone"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Preferred Counseling Date
//                 </label>
//                 <input
//                   type="date"
//                   id="preferredDate"
//                   name="preferredDate"
//                   value={formData.preferredDate}
//                   onChange={handleInputChange}
//                   className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                     Submitting Application...
//                   </>
//                 ) : (
//                   <>
//                     Submit Application
//                     <ArrowRight className="h-5 w-5" />
//                   </>
//                 )}
//               </button>

//               {submitStatus === "success" && (
//                 <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-800">
//                   <p className="font-semibold">Application submitted successfully!</p>
//                   <p className="text-sm">Our admission team will contact you within 24 hours for the next steps.</p>
//                 </div>
//               )}

//               {submitStatus === "error" && (
//                 <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800">
//                   <p className="font-semibold">Failed to submit application.</p>
//                   <p className="text-sm">Please try again or contact our admission team directly.</p>
//                 </div>
//               )}
//             </form>
//           </div>

//           {/* Required Documents */}
//           <div className="space-y-8">
//             <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//               <h3 className="text-xl font-bold text-gray-900 mb-6">Required Documents</h3>
//               <div className="space-y-3">
//                 {requiredDocuments.map((doc, index) => (
//                   <div key={index} className="flex items-center gap-3">
//                     <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
//                     <span className="text-gray-700">{doc}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Contact Information */}
//             <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
//               <h3 className="text-xl font-bold text-gray-900 mb-6">Need Help?</h3>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <Phone className="h-5 w-5 text-blue-600" />
//                   <div>
//                     <p className="font-medium text-gray-900">Call Us</p>
//                     <p className="text-gray-600">+91 7676401932</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Mail className="h-5 w-5 text-blue-600" />
//                   <div>
//                     <p className="font-medium text-gray-900">Email Us</p>
//                     <p className="text-gray-600">admissions@bangaloreinstitutions.com</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <MapPin className="h-5 w-5 text-blue-600" />
//                   <div>
//                     <p className="font-medium text-gray-900">Visit Us</p>
//                     <p className="text-gray-600">Electronic City, Bangalore</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Download Brochure */}
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
//               <h3 className="text-xl font-bold mb-4">Download Brochure</h3>
//               <p className="text-blue-100 mb-6">
//                 Get detailed information about all our programs, fees, and facilities
//               </p>
//               <a
//                 href="fees-structure.pdf"
//                 download
//                 className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-2"
//               >
//                 <Download className="h-5 w-5" />
//                 Download Now
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Important Dates */}
//         <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white">
//           <div className="text-center mb-8">
//             <h3 className="text-3xl font-bold mb-4">Important Dates</h3>
//             <p className="text-blue-100 text-lg">Mark your calendar for key admission milestones</p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <Calendar className="h-8 w-8" />
//               </div>
//               <h4 className="font-bold text-lg mb-2">Application Start</h4>
//               <p className="text-blue-100">January 15, 2025</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <Clock className="h-8 w-8" />
//               </div>
//               <h4 className="font-bold text-lg mb-2">Application Deadline</h4>
//               <p className="text-blue-100">June 30, 2025</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <Users className="h-8 w-8" />
//               </div>
//               <h4 className="font-bold text-lg mb-2">Counseling Period</h4>
//               <p className="text-blue-100">July 1-15, 2025</p>
//             </div>
//             <div className="text-center">
//               <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                 <GraduationCap className="h-8 w-8" />
//               </div>
//               <h4 className="font-bold text-lg mb-2">Classes Begin</h4>
//               <p className="text-blue-100">August 1, 2025</p>
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
import supabase from "../lib/supabase"

export default function Admission() {
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
      fee: "₹3.95L Total",
      highlights: ["Full Stack Development", "Industry Certifications", "Live Projects"],
      eligibility: "12th Pass (Any Stream)",
      seats: "60",
      href: "programs/bca-full-stack",
    },
    {
      id: "bca-data-analytics",
      name: "BCA + Data Analytics + PGCCA",
      duration: "4 Years",
      fee: "₹3.95L Total",
      highlights: ["Data Science", "Machine Learning", "Business Intelligence"],
      eligibility: "12th Pass (Any Stream)",
      seats: "60",
      href: "programs/bca-data-analytics",
    },
    // {
    //   id: "bca-digital-marketing",
    //   name: "BCA + Digital Marketing + PGCCA",
    //   duration: "4 Years",
    //   fee: "₹3.95L Total",
    //   highlights: ["SEO/SEM", "Social Media Marketing", "Content Strategy"],
    //   eligibility: "12th Pass (Any Stream)",
    //   seats: "60",
    //   href: "programs/bca-digital-marketing",
    // },
    {
      id: "bba-digital-marketing",
      name: "BBA + Digital Marketing + PGCBA",
      duration: "4 Years",
      fee: "₹3.65L Total",
      highlights: ["Business Management", "Digital Strategy", "Brand Management"],
      eligibility: "12th Pass (Any Stream)",
      seats: "60",
      href: "programs/bba-digital-marketing",
    },
    {
      id: "bcom-acca",
      name: "BCOM + ACCA + PGCFM",
      duration: "4 Years",
      fee: "₹4.25L Total",
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

      const { error } = await supabase.from("admissions").insert([admissionData])

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
                    <p className="text-gray-600">+91 7676401932</p>
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
                href="fees-structure.pdf"
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