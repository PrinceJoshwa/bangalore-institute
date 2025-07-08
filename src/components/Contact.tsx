// // "use client"

// // import type React from "react"

// // import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, User } from "lucide-react"
// // import { useState } from "react"

// // export default function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     program: "",
// //     message: "",
// //   })

// //   const [isSubmitting, setIsSubmitting] = useState(false)
// //   const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
// //     const { name, value } = e.target
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }))
// //   }

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setIsSubmitting(true)

// //     // Simulate form submission
// //     try {
// //       await new Promise((resolve) => setTimeout(resolve, 2000))
// //       setSubmitStatus("success")
// //       setFormData({
// //         name: "",
// //         email: "",
// //         phone: "",
// //         program: "",
// //         message: "",
// //       })
// //     } catch (error) {
// //       setSubmitStatus("error")
// //     } finally {
// //       setIsSubmitting(false)
// //     }
// //   }

// //   const contactInfo = [
// //     {
// //       icon: <MapPin className="h-6 w-6 text-blue-600" />,
// //       title: "Campus Address",
// //       details: [
// //         "BIMSR - Bangalore Institute of",
// //         "Management Science & Research",
// //         "Anekal, Bengaluru, Karnataka 562106",
// //         "India",
// //       ],
// //     },
// //     {
// //       icon: <Phone className="h-6 w-6 text-blue-600" />,
// //       title: "Phone Numbers",
// //       details: ["Admissions: +91 8970002004", "General Inquiry: +91 962 060 2288", "WhatsApp: +91 8970002004"],
// //     },
// //     {
// //       icon: <Mail className="h-6 w-6 text-blue-600" />,
// //       title: "Email Addresses",
// //       details: [
// //         "admissions@Bangaloreinstitutions.com",
// //         "info@bimsr.edu.in",
// //         "placement@bimsr.edu.in",
// //         "support@bimsr.edu.in",
// //       ],
// //     },
// //     {
// //       icon: <Clock className="h-6 w-6 text-blue-600" />,
// //       title: "Office Hours",
// //       details: [
// //         "Monday - Friday: 9:00 AM - 6:00 PM",
// //         "Saturday: 9:00 AM - 2:00 PM",
// //         "Sunday: Closed",
// //         "Emergency: 24/7 Available",
// //       ],
// //     },
// //   ]

// //   const quickActions = [
// //     {
// //       icon: <MessageCircle className="h-8 w-8 text-white" />,
// //       title: "WhatsApp Chat",
// //       description: "Get instant responses to your queries",
// //       action: "Chat Now",
// //       bgColor: "bg-green-600 hover:bg-green-700",
// //     },
// //     {
// //       icon: <Calendar className="h-8 w-8 text-white" />,
// //       title: "Schedule Campus Visit",
// //       description: "Book a personalized campus tour",
// //       action: "Book Visit",
// //       bgColor: "bg-blue-600 hover:bg-blue-700",
// //     },
// //     {
// //       icon: <User className="h-8 w-8 text-white" />,
// //       title: "Talk to Counselor",
// //       description: "Speak with our admission experts",
// //       action: "Call Now",
// //       bgColor: "bg-orange-600 hover:bg-orange-700",
// //     },
// //   ]

// //   const programs = [
// //     "BCA + Full Stack + PGCCA",
// //     "BCA + Data Analytics + PGCCA",
// //     "BCA + Digital Marketing + PGCCA",
// //     "BBA + Digital Marketing + PGCBA",
// //     "BCOM + ACCA + PGCFM",
// //   ]

// //   return (
// //     <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
// //           <div className="space-y-2">
// //             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Get In Touch</div>
// //             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Contact BIMSR</h2>
// //             <p className="max-w-3xl text-gray-600 md:text-xl">
// //               Ready to transform your future? Get in touch with our admission counselors for personalized guidance and
// //               support throughout your application process.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Quick Actions */}
// //         <div className="grid md:grid-cols-3 gap-6 mb-16">
// //           {quickActions.map((action, index) => (
// //             <div
// //               key={index}
// //               className={`${action.bgColor} rounded-xl p-6 text-white text-center cursor-pointer transition-all duration-300 transform hover:scale-105`}
// //             >
// //               <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
// //                 {action.icon}
// //               </div>
// //               <h3 className="text-xl font-bold mb-2">{action.title}</h3>
// //               <p className="text-white/90 text-sm mb-4">{action.description}</p>
// //               <button className="bg-white/20 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors">
// //                 {action.action}
// //               </button>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="grid lg:grid-cols-2 gap-12">
// //           {/* Contact Form */}
// //           <div className="card p-8">
// //             <div className="mb-6">
// //               <h3 className="text-2xl font-bold text-blue-800 mb-2">Send us a Message</h3>
// //               <p className="text-gray-600">
// //                 Fill out the form below and our admission team will get back to you within 24 hours.
// //               </p>
// //             </div>

// //             <form onSubmit={handleSubmit} className="space-y-6">
// //               <div className="grid md:grid-cols-2 gap-4">
// //                 <div>
// //                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
// //                     Full Name *
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="name"
// //                     name="name"
// //                     value={formData.name}
// //                     onChange={handleInputChange}
// //                     required
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
// //                     placeholder="Enter your full name"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
// //                     Email Address *
// //                   </label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleInputChange}
// //                     required
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
// //                     placeholder="Enter your email"
// //                   />
// //                 </div>
// //               </div>

// //               <div className="grid md:grid-cols-2 gap-4">
// //                 <div>
// //                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
// //                     Phone Number *
// //                   </label>
// //                   <input
// //                     type="tel"
// //                     id="phone"
// //                     name="phone"
// //                     value={formData.phone}
// //                     onChange={handleInputChange}
// //                     required
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
// //                     placeholder="Enter your phone number"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
// //                     Program of Interest
// //                   </label>
// //                   <select
// //                     id="program"
// //                     name="program"
// //                     value={formData.program}
// //                     onChange={handleInputChange}
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
// //                   >
// //                     <option value="">Select a program</option>
// //                     {programs.map((program, index) => (
// //                       <option key={index} value={program}>
// //                         {program}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </div>

// //               <div>
// //                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// //                   Message
// //                 </label>
// //                 <textarea
// //                   id="message"
// //                   name="message"
// //                   value={formData.message}
// //                   onChange={handleInputChange}
// //                   rows={4}
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
// //                   placeholder="Tell us about your questions or requirements..."
// //                 />
// //               </div>

// //               <button
// //                 type="submit"
// //                 disabled={isSubmitting}
// //                 className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
// //               >
// //                 {isSubmitting ? (
// //                   <>
// //                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
// //                     Sending...
// //                   </>
// //                 ) : (
// //                   <>
// //                     <Send className="h-4 w-4" />
// //                     Send Message
// //                   </>
// //                 )}
// //               </button>

// //               {submitStatus === "success" && (
// //                 <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
// //                   <p className="font-semibold">Message sent successfully!</p>
// //                   <p className="text-sm">Our team will contact you within 24 hours.</p>
// //                 </div>
// //               )}

// //               {submitStatus === "error" && (
// //                 <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
// //                   <p className="font-semibold">Failed to send message.</p>
// //                   <p className="text-sm">Please try again or contact us directly.</p>
// //                 </div>
// //               )}
// //             </form>
// //           </div>

// //           {/* Contact Information */}
// //           <div className="space-y-8">
// //             <div>
// //               <h3 className="text-2xl font-bold text-blue-800 mb-6">Contact Information</h3>
// //               <div className="space-y-6">
// //                 {contactInfo.map((info, index) => (
// //                   <div key={index} className="card p-6">
// //                     <div className="flex items-start gap-4">
// //                       <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
// //                         {info.icon}
// //                       </div>
// //                       <div>
// //                         <h4 className="font-semibold text-blue-800 mb-2">{info.title}</h4>
// //                         <div className="space-y-1">
// //                           {info.details.map((detail, idx) => (
// //                             <p key={idx} className="text-gray-600 text-sm">
// //                               {detail}
// //                             </p>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Map Placeholder */}
// //             <div className="card p-6">
// //               <h4 className="font-semibold text-blue-800 mb-4">Find Us on Map</h4>
// //               <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
// //                 <div className="text-center">
// //                   <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
// //                   <p className="text-gray-500">Interactive Map</p>
// //                   <p className="text-sm text-gray-400">BIMSR Campus, Anekal, Bengaluru</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Emergency Contact */}
// //         <div className="mt-16 bg-red-50 border border-red-200 rounded-xl p-8 text-center">
// //           <h3 className="text-xl font-bold text-red-800 mb-2">Emergency Contact</h3>
// //           <p className="text-red-700 mb-4">
// //             For urgent matters outside office hours, please contact our emergency helpline.
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <a
// //               href="tel:+918970002004"
// //               className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
// //             >
// //               Emergency: +91 8970002004
// //             </a>
// //             <a
// //               href="mailto:emergency@bimsr.edu.in"
// //               className="bg-red-100 text-red-800 px-6 py-3 rounded-lg font-semibold hover:bg-red-200 transition-colors"
// //             >
// //               emergency@bimsr.edu.in
// //             </a>
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
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Send,
//   MessageCircle,
//   Calendar,
//   User,
//   Building,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Youtube,
// } from "lucide-react"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     program: "",
//     message: "",
//     visitDate: "",
//   })

//   // const [activeTab, setActiveTab] = useState("contact")

//   const contactInfo = [
//     {
//       icon: <Phone className="h-6 w-6" />,
//       title: "Phone Numbers",
//       details: [
//         { label: "Admissions", value: "8970002004" },
//         { label: "General Inquiry", value: "8970002004" },
//         { label: "Placement Cell", value: "8970002004" },
//       ],
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       icon: <Mail className="h-6 w-6" />,
//       title: "Email Addresses",
//       details: [
//         { label: "Admissions", value: "admissions@bangaloreinstitutions.com" },
//         { label: "General", value: "info@bangaloreinstitutions.com" },
//         { label: "Placements", value: "placements@bangaloreinstitutions.com" },
//       ],
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       icon: <MapPin className="h-6 w-6" />,
//       title: "Campus Locations",
//       details: [
//         { label: "Main Campus", value: "Electronic City, Bangalore" },
//         { label: "City Office", value: "MG Road, Bangalore" },
//         { label: "Hostel", value: "Near Main Campus" },
//       ],
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: <Clock className="h-6 w-6" />,
//       title: "Office Hours",
//       details: [
//         { label: "Monday - Friday", value: "9:00 AM - 6:00 PM" },
//         { label: "Saturday", value: "9:00 AM - 4:00 PM" },
//         { label: "Sunday", value: "Closed" },
//       ],
//       color: "from-orange-500 to-red-500",
//     },
//   ]

//   const quickActions = [
//     {
//       title: "Schedule Campus Visit",
//       description: "Book a personalized campus tour and meet our faculty",
//       icon: <Calendar className="h-8 w-8" />,
//       action: "Schedule Visit",
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Download Brochure",
//       description: "Get detailed information about all our programs",
//       icon: <Building className="h-8 w-8" />,
//       action: "Download Now",
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       title: "Talk to Counselor",
//       description: "Get personalized guidance from our admission experts",
//       icon: <MessageCircle className="h-8 w-8" />,
//       action: "Start Chat",
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Apply Online",
//       description: "Submit your application and secure your seat today",
//       icon: <User className="h-8 w-8" />,
//       action: "Apply Now",
//       gradient: "from-orange-500 to-red-500",
//     },
//   ]

//   const socialLinks = [
//     { name: "Facebook", icon: <Facebook className="h-5 w-5" />, url: "#", color: "hover:text-blue-600" },
//     { name: "Twitter", icon: <Twitter className="h-5 w-5" />, url: "#", color: "hover:text-blue-400" },
//     { name: "Instagram", icon: <Instagram className="h-5 w-5" />, url: "#", color: "hover:text-pink-600" },
//     { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, url: "#", color: "hover:text-blue-700" },
//     { name: "YouTube", icon: <Youtube className="h-5 w-5" />, url: "#", color: "hover:text-red-600" },
//   ]

//   const programs = [
//     "BCA + Full Stack + PGCCA",
//     "BCA + Data Analytics + PGCCA",
//     "BCA + Digital Marketing + PGCCA",
//     "BBA + Digital Marketing + PGCBA",
//     "BCOM + ACCA + PGCFM",
//   ]

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     // Handle form submission logic here
//   }

//   return (
//     <section
//       id="contact"
//       className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
//             <MessageCircle className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">Get in Touch</span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Contact</span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BIMSR</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Ready to transform your future? Get in touch with our admission experts and take the first step towards your
//             successful career in technology and business.
//           </p>
//         </div>

//         {/* Quick Actions */}
//         <div className="grid md:grid-cols-4 gap-8 mb-20">
//           {quickActions.map((action, index) => (
//             <div key={index} className="group">
//               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
//                 <div
//                   className={`w-20 h-20 bg-gradient-to-r ${action.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                 >
//                   {action.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-900 mb-3">{action.title}</h3>
//                 <p className="text-gray-600 text-sm mb-6 leading-relaxed">{action.description}</p>
//                 <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm">
//                   {action.action}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Main Contact Section */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-20">
//           {/* Contact Form */}
//           <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Send us a Message</h3>
//               <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
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
//                     Program of Interest
//                   </label>
//                   <select
//                     id="program"
//                     name="program"
//                     value={formData.program}
//                     onChange={handleInputChange}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                   >
//                     <option value="">Select a program</option>
//                     {programs.map((program, index) => (
//                       <option key={index} value={program}>
//                         {program}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="visitDate" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Preferred Visit Date
//                 </label>
//                 <input
//                   type="date"
//                   id="visitDate"
//                   name="visitDate"
//                   value={formData.visitDate}
//                   onChange={handleInputChange}
//                   className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   rows={4}
//                   className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
//                   placeholder="Tell us about your interests and any questions you have..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
//               >
//                 <Send className="h-5 w-5" />
//                 Send Message
//               </button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             {contactInfo.map((info, index) => (
//               <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div
//                     className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white`}
//                   >
//                     {info.icon}
//                   </div>
//                   <h4 className="text-lg font-bold text-gray-900">{info.title}</h4>
//                 </div>
//                 <div className="space-y-3">
//                   {info.details.map((detail, idx) => (
//                     <div key={idx} className="flex justify-between items-center">
//                       <span className="text-gray-600 text-sm">{detail.label}:</span>
//                       <span className="text-gray-900 font-medium text-sm">{detail.value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}

//             {/* Social Media */}
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//               <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h4>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.url}
//                     className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-20">
//           <div className="text-center mb-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Us on Map</h3>
//             <p className="text-gray-600">Visit our campus and experience the BIMSR difference</p>
//           </div>

//           <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden relative">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-center">
//                 <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
//                 <h4 className="text-xl font-bold text-gray-900 mb-2">BIMSR Campus</h4>
//                 <p className="text-gray-600">Electronic City, Bangalore</p>
//                 <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300">
//                   Get Directions
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Emergency Contact */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//           <div className="relative z-10 text-center">
//             <h3 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h3>
//             <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
//               Our admission counselors are available to help you with any questions about programs, admissions, or
//               campus visits. Don't hesitate to reach out!
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <a
//                 href="tel:8970002004"
//                 className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
//               >
//                 <Phone className="h-5 w-5" />
//                 Call Now: 8970002004
//               </a>
//               <a
//                 href="https://wa.me/918970002004"
//                 className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
//               >
//                 <MessageCircle className="h-5 w-5" />
//                 WhatsApp Chat
//               </a>
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
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  User,
  Building,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"
import  supabase  from "../lib/supabase"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
    visitDate: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: [
        { label: "Admissions", value: "8970002004" },
        { label: "General Inquiry", value: "8970002004" },
        { label: "Placement Cell", value: "8970002004" },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      details: [
        { label: "Admissions", value: "admissions@bangaloreinstitutions.com" },
        { label: "General", value: "info@bangaloreinstitutions.com" },
        { label: "Placements", value: "placements@bangaloreinstitutions.com" },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Campus Locations",
      details: [
        { label: "Main Campus", value: "Electronic City, Bangalore" },
        { label: "City Office", value: "MG Road, Bangalore" },
        { label: "Hostel", value: "Near Main Campus" },
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      details: [
        { label: "Monday - Friday", value: "9:00 AM - 6:00 PM" },
        { label: "Saturday", value: "9:00 AM - 4:00 PM" },
        { label: "Sunday", value: "Closed" },
      ],
      color: "from-orange-500 to-red-500",
    },
  ]

  const quickActions = [
    {
      title: "Schedule Campus Visit",
      description: "Book a personalized campus tour and meet our faculty",
      icon: <Calendar className="h-8 w-8" />,
      action: "Schedule Visit",
      gradient: "from-blue-500 to-cyan-500",
      link: "contact",
    },
    {
      title: "Download Brochure",
      description: "Get detailed information about all our programs",
      icon: <Building className="h-8 w-8" />,
      action: "Download Now",
      gradient: "from-green-500 to-emerald-500",
      downloadLink: "BIMSR_Brochure.pdf",
    },
    {
      title: "Talk to Counselor",
      description: "Get personalized guidance from our admission experts",
      icon: <MessageCircle className="h-8 w-8" />,
      action: "Start Chat",
      gradient: "from-purple-500 to-pink-500",
      whatsappLink: "https://wa.me/918970002004",
    },
    {
      title: "Apply Online",
      description: "Submit your application and secure your seat today",
      icon: <User className="h-8 w-8" />,
      action: "Apply Now",
      gradient: "from-orange-500 to-red-500",
      link: "admission",
    },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: "https://facebook.com/bimsr",
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/bimsr",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: "https://instagram.com/bimsr",
      color: "hover:text-pink-600",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/company/bimsr",
      color: "hover:text-blue-700",
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      url: "https://youtube.com/@bimsr",
      color: "hover:text-red-600",
    },
  ]

  const programs = [
    "BCA + Full Stack + PGCCA",
    "BCA + Data Analytics + PGCCA",
    "BCA + Digital Marketing + PGCCA",
    "BBA + Digital Marketing + PGCBA",
    "BCOM + ACCA + PGCFM",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        program: formData.program,
        visit_date: formData.visitDate || null,
        message: formData.message,
        created_at: new Date().toISOString(),
      }

      const { data, error } = await supabase.from("contact").insert([contactData])

      if (error) throw error

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        message: "",
        visitDate: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
            <MessageCircle className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Get in Touch</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Contact</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BIMSR</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your future? Get in touch with our admission experts and take the first step towards your
            successful career in technology and business.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {quickActions.map((action, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center h-full">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${action.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                >
                  {action.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{action.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{action.description}</p>
                {action.link ? (
                  <a
                    href={action.link}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    {action.action}
                  </a>
                ) : action.downloadLink ? (
                  <a
                    href={action.downloadLink}
                    download
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    {action.action}
                  </a>
                ) : action.whatsappLink ? (
                  <a
                    href={action.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    {action.action}
                  </a>
                ) : (
                  <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm">
                    {action.action}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
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
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-2">
                    Program of Interest
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a program</option>
                    {programs.map((program, index) => (
                      <option key={index} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="visitDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Visit Date
                </label>
                <input
                  type="date"
                  id="visitDate"
                  name="visitDate"
                  value={formData.visitDate}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your interests and any questions you have..."
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
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-800">
                  <p className="font-semibold">Message sent successfully!</p>
                  <p className="text-sm">Our team will contact you within 24 hours.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800">
                  <p className="font-semibold">Failed to send message.</p>
                  <p className="text-sm">Please try again or contact us directly.</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white`}
                  >
                    {info.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{info.title}</h4>
                </div>
                <div className="space-y-3">
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">{detail.label}:</span>
                      <span className="text-gray-900 font-medium text-sm">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Us on Map</h3>
            <p className="text-gray-600">Visit our campus and experience the BIMSR difference</p>
          </div>

          <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8267!2d77.6824!3d12.9141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzUwLjgiTiA3N8KwNDAnNTcuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BIMSR Campus Location"
            />
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Our admission counselors are available to help you with any questions about programs, admissions, or
              campus visits. Don't hesitate to reach out!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:8970002004"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now: 8970002004
              </a>
              <a
                href="https://wa.me/918970002004"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
