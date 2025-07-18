

// // "use client"

// // import { useState } from "react"
// // import { Calculator, Check, CreditCard, TrendingUp, DollarSign, PiggyBank, Award, Target } from "lucide-react"

// // interface ProgramFee {
// //   id: string
// //   name: string
// //   baseFee: number
// //   duration: number
// //   color: string
// // }

// // export default function FeeCalculator() {
// //   const [selectedProgram, setSelectedProgram] = useState<string>("")
// //   const [selectedHostel, setSelectedHostel] = useState<boolean>(false)
// //   const [selectedTransport, setSelectedTransport] = useState<boolean>(false)
// //   const [selectedLaptop, setSelectedLaptop] = useState<boolean>(false)
// //   const [totalFee, setTotalFee] = useState<number>(0)
// //   const [semesterFee, setSemesterFee] = useState<number>(0)
// //   const [showResult, setShowResult] = useState<boolean>(false)

// //   const programs: ProgramFee[] = [
// //     {
// //       id: "bcom-dm-pgdm",
// //       name: "BCom + Digital Marketing + PGDM",
// //       baseFee: 50000,
// //       duration: 6,
// //       color: "from-blue-600 to-blue-800",
// //     },
// //     {
// //       id: "bcom-acca",
// //       name: "BCom - ACCA Specialization",
// //       baseFee: 50000,
// //       duration: 6,
// //       color: "from-emerald-600 to-emerald-800",
// //     },
// //     {
// //       id: "bba-dm-pgdm",
// //       name: "BBA - Digital Marketing + PGDM",
// //       baseFee: 50000,
// //       duration: 6,
// //       color: "from-purple-600 to-purple-800",
// //     },
// //     {
// //       id: "bca-analytics",
// //       name: "BCA - Data Analytics",
// //       baseFee: 50000,
// //       duration: 6,
// //       color: "from-orange-600 to-orange-800",
// //     },
// //   ]

// //   const calculateFees = () => {
// //     const program = programs.find((p) => p.id === selectedProgram)

// //     if (!program) {
// //       setTotalFee(0)
// //       setSemesterFee(0)
// //       return
// //     }

// //     let semFee = program.baseFee
// //     let totalProgramFee = program.baseFee * program.duration

// //     if (selectedHostel) {
// //       semFee += 25000
// //       totalProgramFee += 25000 * program.duration
// //     }

// //     if (selectedTransport) {
// //       semFee += 10000
// //       totalProgramFee += 10000 * program.duration
// //     }

// //     if (selectedLaptop) {
// //       totalProgramFee += 35000 // One-time fee
// //     }

// //     setSemesterFee(semFee)
// //     setTotalFee(totalProgramFee)
// //     setShowResult(true)
// //   }

// //   const resetCalculator = () => {
// //     setSelectedProgram("")
// //     setSelectedHostel(false)
// //     setSelectedTransport(false)
// //     setSelectedLaptop(false)
// //     setShowResult(false)
// //   }

// //   const investmentHighlights = [
// //     {
// //       amount: "₹3.95L",
// //       label: "Total Degree Cost",
// //       description: "₹50,000 per semester with flexible payment options and zero-cost EMI available",
// //       icon: <PiggyBank className="h-8 w-8" />,
// //       color: "from-blue-600 to-blue-800",
// //     },
// //     {
// //       amount: "₹4L-8L",
// //       label: "Starting Salary",
// //       description: "Annual package range with 100% placement assistance and industry partnerships",
// //       icon: <TrendingUp className="h-8 w-8" />,
// //       color: "from-green-600 to-green-800",
// //     },
// //     {
// //       amount: "6-12",
// //       label: "Payback Months",
// //       description: "Your degree investment recovers in just 6 months to 1 year of earnings",
// //       icon: <Target className="h-8 w-8" />,
// //       color: "from-orange-600 to-orange-800",
// //     },
// //     {
// //       amount: "₹10K",
// //       label: "Seat Booking",
// //       description: "Secure your admission with minimal advance payment and student loan facility",
// //       icon: <Award className="h-8 w-8" />,
// //       color: "from-purple-600 to-purple-800",
// //     },
// //   ]

// //   return (
// //     <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
// //       <div className="container mx-auto px-6">
// //         {/* Hero Section */}
// //         <div className="text-center mb-20">
// //           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8">
// //             <Calculator className="h-5 w-5 text-blue-600" />
// //             <span className="text-blue-700 font-semibold">Smart Investment Calculator</span>
// //           </div>
// //           <h1 className="text-5xl lg:text-7xl font-bold mb-8">
// //             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
// //               Smart Investment
// //             </span>
// //             <br />
// //             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
// //               in Your Future
// //             </span>
// //           </h1>
// //           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
// //             Calculate your educational investment with our transparent fee structure. Total degree cost starting from
// //             ₹3.95L with flexible payment options and zero-cost EMI available.
// //           </p>
// //         </div>

// //         {/* Investment Highlights */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
// //           {investmentHighlights.map((highlight, index) => (
// //             <div key={index} className="group">
// //               <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
// //                 <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-12 translate-x-12"></div>

// //                 <div className="relative z-10">
// //                   <div
// //                     className={`w-20 h-20 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
// //                   >
// //                     {highlight.icon}
// //                   </div>
// //                   <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
// //                     {highlight.amount}
// //                   </div>
// //                   <div className="text-lg font-semibold text-gray-900 mb-3">{highlight.label}</div>
// //                   <div className="text-sm text-gray-600 leading-relaxed">{highlight.description}</div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Calculator Section */}
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid lg:grid-cols-2 gap-12">
// //             {/* Calculator Form */}
// //             <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
// //               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-16"></div>

// //               <div className="relative z-10">
// //                 <div className="mb-8">
// //                   <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
// //                     <Calculator className="mr-3 h-8 w-8 text-blue-600" />
// //                     Calculate Your Investment
// //                   </h2>
// //                   <p className="text-gray-600 leading-relaxed">
// //                     Select your program to get detailed fee breakdown with placement guarantee and ROI analysis.
// //                   </p>
// //                 </div>

// //                 <div className="space-y-6">
// //                   <div>
// //                     <label htmlFor="program" className="block text-lg font-semibold text-gray-900 mb-3">
// //                       Select Your Program
// //                     </label>
// //                     <select
// //                       id="program"
// //                       value={selectedProgram}
// //                       onChange={(e) => setSelectedProgram(e.target.value)}
// //                       className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg"
// //                     >
// //                       <option value="">-- Choose Your Future Program --</option>
// //                       {programs.map((program) => (
// //                         <option key={program.id} value={program.id}>
// //                           {program.name}
// //                         </option>
// //                       ))}
// //                     </select>
// //                   </div>

// //                   {selectedProgram && (
// //                     <>
// //                       <div className="space-y-4">
// //                         <h3 className="text-lg font-semibold text-gray-900">Additional Services & Facilities</h3>

// //                         <div className="space-y-4">
// //                           <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
// //                             <input
// //                               type="checkbox"
// //                               id="hostel"
// //                               checked={selectedHostel}
// //                               onChange={() => setSelectedHostel(!selectedHostel)}
// //                               className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// //                             />
// //                             <label htmlFor="hostel" className="ml-4 flex-1">
// //                               <div className="font-semibold text-gray-900">Hostel Accommodation</div>
// //                               <div className="text-sm text-gray-600">
// //                                 ₹25,000 per semester - Modern facilities with Wi-Fi
// //                               </div>
// //                             </label>
// //                           </div>

// //                           <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
// //                             <input
// //                               type="checkbox"
// //                               id="transport"
// //                               checked={selectedTransport}
// //                               onChange={() => setSelectedTransport(!selectedTransport)}
// //                               className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
// //                             />
// //                             <label htmlFor="transport" className="ml-4 flex-1">
// //                               <div className="font-semibold text-gray-900">Transport Facility</div>
// //                               <div className="text-sm text-gray-600">
// //                                 ₹10,000 per semester - AC buses with GPS tracking
// //                               </div>
// //                             </label>
// //                           </div>

// //                           <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100">
// //                             <input
// //                               type="checkbox"
// //                               id="laptop"
// //                               checked={selectedLaptop}
// //                               onChange={() => setSelectedLaptop(!selectedLaptop)}
// //                               className="h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
// //                             />
// //                             <label htmlFor="laptop" className="ml-4 flex-1">
// //                               <div className="font-semibold text-gray-900">Complete Onboarding Kit</div>
// //                               <div className="text-sm text-gray-600">
// //                                 ₹35,000 one-time - Laptop, software & study materials
// //                               </div>
// //                             </label>
// //                           </div>
// //                         </div>
// //                       </div>

// //                       <div className="flex gap-4">
// //                         <button
// //                           onClick={calculateFees}
// //                           className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
// //                           disabled={!selectedProgram}
// //                         >
// //                           Calculate Investment
// //                         </button>
// //                         <button
// //                           onClick={resetCalculator}
// //                           className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300"
// //                         >
// //                           Reset
// //                         </button>
// //                       </div>
// //                     </>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Results Section */}
// //             <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
// //               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
// //               <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

// //               <div className="relative z-10">
// //                 {showResult && selectedProgram ? (
// //                   <div className="space-y-8">
// //                     <div>
// //                       <h2 className="text-3xl font-bold mb-6 flex items-center">
// //                         <Check className="mr-3 h-8 w-8 text-green-300" />
// //                         Investment Breakdown
// //                       </h2>
// //                     </div>

// //                     <div className="space-y-4">
// //                       <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
// //                         <span className="text-blue-100 font-medium">Tuition Fee (per semester)</span>
// //                         <span className="text-2xl font-bold">₹50,000</span>
// //                       </div>

// //                       {selectedHostel && (
// //                         <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
// //                           <span className="text-blue-100 font-medium">Hostel Fee (per semester)</span>
// //                           <span className="text-2xl font-bold">₹25,000</span>
// //                         </div>
// //                       )}

// //                       {selectedTransport && (
// //                         <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
// //                           <span className="text-blue-100 font-medium">Transport Fee (per semester)</span>
// //                           <span className="text-2xl font-bold">₹10,000</span>
// //                         </div>
// //                       )}

// //                       {selectedLaptop && (
// //                         <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
// //                           <span className="text-blue-100 font-medium">Onboarding Kit (one-time)</span>
// //                           <span className="text-2xl font-bold">₹35,000</span>
// //                         </div>
// //                       )}

// //                       <div className="flex justify-between items-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30">
// //                         <span className="text-xl font-bold">Total Fee (per semester)</span>
// //                         <span className="text-3xl font-bold text-green-300">₹{semesterFee.toLocaleString()}</span>
// //                       </div>

// //                       <div className="flex justify-between items-center p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl border-2 border-green-300/50">
// //                         <span className="text-xl font-bold">Total Program Investment</span>
// //                         <span className="text-4xl font-bold text-green-300">₹{totalFee.toLocaleString()}</span>
// //                       </div>
// //                     </div>

// //                     <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
// //                       <h3 className="font-bold text-xl mb-4 flex items-center">
// //                         <CreditCard className="h-6 w-6 mr-2" />
// //                         Payment Benefits & ROI:
// //                       </h3>
// //                       <div className="grid md:grid-cols-2 gap-4 text-sm">
// //                         <div className="space-y-2">
// //                           <div className="flex items-center">
// //                             <Check className="h-4 w-4 mr-2 text-green-300" />
// //                             <span>Zero-cost EMI available</span>
// //                           </div>
// //                           <div className="flex items-center">
// //                             <Check className="h-4 w-4 mr-2 text-green-300" />
// //                             <span>Flexible payment options</span>
// //                           </div>
// //                           <div className="flex items-center">
// //                             <Check className="h-4 w-4 mr-2 text-green-300" />
// //                             <span>₹10K seat booking amount</span>
// //                           </div>
// //                         </div>
// //                         <div className="space-y-2">
// //                           <div className="flex items-center">
// //                             <Check className="h-4 w-4 mr-2 text-green-300" />
// //                             <span>Student loan facility available</span>
// //                           </div>
// //                           <div className="flex items-center">
// //                             <Check className="h-4 w-4 mr-2 text-green-300" />
// //                             <span>6-12 months payback period</span>
// //                           </div>
// //                           <div className="flex items-center">
// //                             <Check className="h-4 w-4 mr-2 text-green-300" />
// //                             <span>₹4L-8L starting salary range</span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ) : (
// //                   <div className="h-full flex flex-col items-center justify-center text-center py-12">
// //                     <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8">
// //                       <DollarSign className="h-12 w-12" />
// //                     </div>
// //                     <h2 className="text-3xl font-bold mb-4">Smart Investment Calculator</h2>
// //                     <p className="text-blue-100 text-lg leading-relaxed max-w-md">
// //                       Select a program to see your educational investment with guaranteed placement assistance and
// //                       detailed ROI analysis.
// //                     </p>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Additional Benefits */}
// //         <div className="mt-20 text-center">
// //           <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
// //             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
// //             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
// //             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

// //             <div className="relative z-10">
// //               <h2 className="text-4xl font-bold mb-6">Why Choose BIMSR for Your Investment?</h2>
// //               <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
// //                 Your education is an investment in your future. We ensure maximum returns through quality education,
// //                 industry partnerships, and guaranteed placement assistance.
// //               </p>
// //               <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
// //                 <div className="text-center">
// //                   <TrendingUp className="h-10 w-10 mx-auto mb-3 text-green-400" />
// //                   <div className="font-bold text-lg">High ROI</div>
// //                   <div className="text-sm text-gray-400">6-12 months payback</div>
// //                 </div>
// //                 <div className="text-center">
// //                   <Award className="h-10 w-10 mx-auto mb-3 text-blue-400" />
// //                   <div className="font-bold text-lg">100% Placement</div>
// //                   <div className="text-sm text-gray-400">Guaranteed assistance</div>
// //                 </div>
// //                 <div className="text-center">
// //                   <CreditCard className="h-10 w-10 mx-auto mb-3 text-purple-400" />
// //                   <div className="font-bold text-lg">Flexible Payment</div>
// //                   <div className="text-sm text-gray-400">Zero-cost EMI options</div>
// //                 </div>
// //                 <div className="text-center">
// //                   <PiggyBank className="h-10 w-10 mx-auto mb-3 text-orange-400" />
// //                   <div className="font-bold text-lg">Scholarships</div>
// //                   <div className="text-sm text-gray-400">Merit-based rewards</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import {
//   Calculator,
//   CreditCard,
//   Download,
//   CheckCircle,
//   ArrowRight,
//   Percent,
//   Calendar,
//   DollarSign,
//   GraduationCap,
//   Award,
// } from "lucide-react"

// export default function FeeCalculator() {
//   const [selectedProgram, setSelectedProgram] = useState("")
//   const [paymentMode, setPaymentMode] = useState("full")
//   const [emiTenure, setEmiTenure] = useState(12)
//   const [scholarshipType, setScholarshipType] = useState("")
//   const [calculatedFee, setCalculatedFee] = useState({
//     totalFee: 0,
//     scholarshipDiscount: 0,
//     finalAmount: 0,
//     emiAmount: 0,
//     processingFee: 0,
//   })

//   const programs = [
//     {
//       id: "bca-fullstack",
//       name: "BCA + Full Stack + PGCCA",
//       totalFee: 395000,
//       breakdown: {
//         admission: 25000,
//         firstYear: 200000,
//         secondYear: 85000,
//         thirdYear: 85000,
//         fourthYear: 0, // 100% scholarship
//       },
//       duration: "4 Years",
//       category: "Technology",
//     },
//     {
//       id: "bca-analytics",
//       name: "BCA + Data Analytics + PGCCA",
//       totalFee: 395000,
//       breakdown: {
//         admission: 25000,
//         firstYear: 200000,
//         secondYear: 85000,
//         thirdYear: 85000,
//         fourthYear: 0,
//       },
//       duration: "4 Years",
//       category: "Analytics",
//     },
//     {
//       id: "bca-digital",
//       name: "BCA + Digital Marketing + PGCCA",
//       totalFee: 395000,
//       breakdown: {
//         admission: 25000,
//         firstYear: 200000,
//         secondYear: 85000,
//         thirdYear: 85000,
//         fourthYear: 0,
//       },
//       duration: "4 Years",
//       category: "Marketing",
//     },
//     {
//       id: "bba-digital",
//       name: "BBA + Digital Marketing + PGCBA",
//       totalFee: 365000,
//       breakdown: {
//         admission: 25000,
//         firstYear: 190000,
//         secondYear: 75000,
//         thirdYear: 75000,
//         fourthYear: 0,
//       },
//       duration: "4 Years",
//       category: "Business",
//     },
//     {
//       id: "bcom-acca",
//       name: "BCOM + ACCA + PGCFM",
//       totalFee: 425000,
//       breakdown: {
//         admission: 25000,
//         firstYear: 180000,
//         secondYear: 110000,
//         thirdYear: 110000,
//         fourthYear: 0,
//       },
//       duration: "4 Years",
//       category: "Finance",
//     },
//   ]

//   const scholarships = [
//     { id: "merit", name: "Merit Scholarship (90%+ in 12th)", discount: 25 },
//     { id: "sports", name: "Sports Scholarship (State/National)", discount: 50 },
//     { id: "need", name: "Need-Based Scholarship", discount: 30 },
//     { id: "early", name: "Early Bird Discount", discount: 10 },
//     { id: "none", name: "No Scholarship", discount: 0 },
//   ]

//   const emiTenures = [
//     { months: 6, label: "6 Months" },
//     { months: 12, label: "12 Months" },
//     { months: 18, label: "18 Months" },
//     { months: 24, label: "24 Months" },
//     { months: 36, label: "36 Months" },
//   ]

//   useEffect(() => {
//     calculateFee()
//   }, [selectedProgram, paymentMode, emiTenure, scholarshipType])

//   const calculateFee = () => {
//     if (!selectedProgram) return

//     const program = programs.find((p) => p.id === selectedProgram)
//     if (!program) return

//     const scholarship = scholarships.find((s) => s.id === scholarshipType)
//     const scholarshipDiscount = scholarship ? (program.totalFee * scholarship.discount) / 100 : 0
//     const finalAmount = program.totalFee - scholarshipDiscount

//     let emiAmount = 0
//     let processingFee = 0

//     if (paymentMode === "emi") {
//       processingFee = finalAmount * 0.02 // 2% processing fee for EMI
//       emiAmount = (finalAmount + processingFee) / emiTenure
//     }

//     setCalculatedFee({
//       totalFee: program.totalFee,
//       scholarshipDiscount,
//       finalAmount,
//       emiAmount,
//       processingFee,
//     })
//   }

//   const selectedProgramData = programs.find((p) => p.id === selectedProgram)

//   const formatCurrency = (amount: number) => {
//     return new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//       maximumFractionDigits: 0,
//     }).format(amount)
//   }

//   const handleDownloadEstimate = () => {
//     // Generate and download fee estimate PDF
//     console.log("Downloading fee estimate...")
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600/10 to-blue-600/10 backdrop-blur-sm border border-green-200/50 rounded-full px-6 py-3 mb-6">
//             <Calculator className="h-5 w-5 text-green-600" />
//             <span className="text-green-700 font-semibold">Fee Calculator</span>
//           </div>
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               Calculate Your
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
//               Investment
//             </span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Get a detailed breakdown of your program fees with scholarship options and flexible EMI plans. Make an
//             informed decision about your educational investment.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Calculator Form */}
//           <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
//             <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
//               <Calculator className="h-6 w-6 mr-3 text-blue-600" />
//               Fee Calculator
//             </h2>

//             <div className="space-y-6">
//               {/* Program Selection */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-3">Select Program</label>
//                 <select
//                   value={selectedProgram}
//                   onChange={(e) => setSelectedProgram(e.target.value)}
//                   className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                 >
//                   <option value="">Choose a program</option>
//                   {programs.map((program) => (
//                     <option key={program.id} value={program.id}>
//                       {program.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Payment Mode */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-3">Payment Mode</label>
//                 <div className="grid grid-cols-2 gap-4">
//                   <button
//                     onClick={() => setPaymentMode("full")}
//                     className={`p-4 rounded-xl border-2 transition-all duration-300 ${
//                       paymentMode === "full"
//                         ? "border-blue-500 bg-blue-50 text-blue-700"
//                         : "border-gray-300 hover:border-gray-400"
//                     }`}
//                   >
//                     <DollarSign className="h-6 w-6 mx-auto mb-2" />
//                     <div className="font-semibold">Full Payment</div>
//                     <div className="text-sm text-gray-600">One-time payment</div>
//                   </button>
//                   <button
//                     onClick={() => setPaymentMode("emi")}
//                     className={`p-4 rounded-xl border-2 transition-all duration-300 ${
//                       paymentMode === "emi"
//                         ? "border-blue-500 bg-blue-50 text-blue-700"
//                         : "border-gray-300 hover:border-gray-400"
//                     }`}
//                   >
//                     <CreditCard className="h-6 w-6 mx-auto mb-2" />
//                     <div className="font-semibold">EMI Option</div>
//                     <div className="text-sm text-gray-600">0% Interest</div>
//                   </button>
//                 </div>
//               </div>

//               {/* EMI Tenure (only if EMI is selected) */}
//               {paymentMode === "emi" && (
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-3">EMI Tenure</label>
//                   <select
//                     value={emiTenure}
//                     onChange={(e) => setEmiTenure(Number(e.target.value))}
//                     className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                   >
//                     {emiTenures.map((tenure) => (
//                       <option key={tenure.months} value={tenure.months}>
//                         {tenure.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               )}

//               {/* Scholarship Options */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-3">Scholarship Eligibility</label>
//                 <select
//                   value={scholarshipType}
//                   onChange={(e) => setScholarshipType(e.target.value)}
//                   className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//                 >
//                   <option value="">Select scholarship type</option>
//                   {scholarships.map((scholarship) => (
//                     <option key={scholarship.id} value={scholarship.id}>
//                       {scholarship.name} ({scholarship.discount}% off)
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Calculate Button */}
//               <button
//                 onClick={calculateFee}
//                 disabled={!selectedProgram}
//                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//               >
//                 <Calculator className="h-5 w-5 mr-2" />
//                 Calculate Fee
//               </button>
//             </div>
//           </div>

//           {/* Results */}
//           <div className="space-y-8">
//             {selectedProgram && (
//               <>
//                 {/* Program Details */}
//                 <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//                   <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
//                     <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
//                     Program Details
//                   </h3>
//                   {selectedProgramData && (
//                     <div className="space-y-3">
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Program:</span>
//                         <span className="font-semibold text-gray-900">{selectedProgramData.name}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Duration:</span>
//                         <span className="font-semibold text-gray-900">{selectedProgramData.duration}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Category:</span>
//                         <span className="font-semibold text-gray-900">{selectedProgramData.category}</span>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Fee Breakdown */}
//                 <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//                   <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
//                     <Percent className="h-5 w-5 mr-2 text-green-600" />
//                     Fee Breakdown
//                   </h3>
//                   <div className="space-y-4">
//                     <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                       <span className="text-gray-600">Total Program Fee:</span>
//                       <span className="font-semibold text-gray-900">{formatCurrency(calculatedFee.totalFee)}</span>
//                     </div>
//                     {calculatedFee.scholarshipDiscount > 0 && (
//                       <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                         <span className="text-gray-600">Scholarship Discount:</span>
//                         <span className="font-semibold text-green-600">
//                           -{formatCurrency(calculatedFee.scholarshipDiscount)}
//                         </span>
//                       </div>
//                     )}
//                     {paymentMode === "emi" && calculatedFee.processingFee > 0 && (
//                       <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                         <span className="text-gray-600">Processing Fee (2%):</span>
//                         <span className="font-semibold text-orange-600">
//                           +{formatCurrency(calculatedFee.processingFee)}
//                         </span>
//                       </div>
//                     )}
//                     <div className="flex justify-between items-center py-3 bg-blue-50 rounded-lg px-4">
//                       <span className="font-semibold text-gray-900">Final Amount:</span>
//                       <span className="font-bold text-blue-600 text-xl">
//                         {formatCurrency(
//                           paymentMode === "emi"
//                             ? calculatedFee.finalAmount + calculatedFee.processingFee
//                             : calculatedFee.finalAmount,
//                         )}
//                       </span>
//                     </div>
//                     {paymentMode === "emi" && calculatedFee.emiAmount > 0 && (
//                       <div className="flex justify-between items-center py-3 bg-green-50 rounded-lg px-4">
//                         <span className="font-semibold text-gray-900">Monthly EMI:</span>
//                         <span className="font-bold text-green-600 text-xl">
//                           {formatCurrency(calculatedFee.emiAmount)}
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* Year-wise Breakdown */}
//                 {selectedProgramData && (
//                   <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//                     <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
//                       <Calendar className="h-5 w-5 mr-2 text-purple-600" />
//                       Year-wise Payment
//                     </h3>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="text-center p-3 bg-gray-50 rounded-lg">
//                         <div className="font-semibold text-gray-900">Admission Fee</div>
//                         <div className="text-blue-600 font-bold">
//                           {formatCurrency(selectedProgramData.breakdown.admission)}
//                         </div>
//                       </div>
//                       <div className="text-center p-3 bg-gray-50 rounded-lg">
//                         <div className="font-semibold text-gray-900">1st Year</div>
//                         <div className="text-blue-600 font-bold">
//                           {formatCurrency(selectedProgramData.breakdown.firstYear)}
//                         </div>
//                       </div>
//                       <div className="text-center p-3 bg-gray-50 rounded-lg">
//                         <div className="font-semibold text-gray-900">2nd Year</div>
//                         <div className="text-blue-600 font-bold">
//                           {formatCurrency(selectedProgramData.breakdown.secondYear)}
//                         </div>
//                       </div>
//                       <div className="text-center p-3 bg-gray-50 rounded-lg">
//                         <div className="font-semibold text-gray-900">3rd Year</div>
//                         <div className="text-blue-600 font-bold">
//                           {formatCurrency(selectedProgramData.breakdown.thirdYear)}
//                         </div>
//                       </div>
//                       <div className="col-span-2 text-center p-3 bg-green-50 rounded-lg">
//                         <div className="font-semibold text-gray-900">4th Year (PGCCA)</div>
//                         <div className="text-green-600 font-bold">100% Scholarship - FREE</div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Action Buttons */}
//                 <div className="space-y-4">
//                   <button
//                     onClick={handleDownloadEstimate}
//                     className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
//                   >
//                     <Download className="h-5 w-5 mr-2" />
//                     Download Fee Estimate
//                   </button>
//                   <Link
//                     to="/admission"
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
//                   >
//                     <span className="mr-2">Apply Now</span>
//                     <ArrowRight className="h-5 w-5" />
//                   </Link>
//                 </div>
//               </>
//             )}

//             {/* Benefits */}
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
//               <h3 className="text-xl font-bold mb-4 flex items-center">
//                 <Award className="h-5 w-5 mr-2" />
//                 What's Included
//               </h3>
//               <div className="space-y-3">
//                 <div className="flex items-center space-x-3">
//                   <CheckCircle className="h-5 w-5 text-green-300" />
//                   <span>Brand new i3 laptop included</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <CheckCircle className="h-5 w-5 text-green-300" />
//                   <span>100% placement assistance</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <CheckCircle className="h-5 w-5 text-green-300" />
//                   <span>Industry certifications</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <CheckCircle className="h-5 w-5 text-green-300" />
//                   <span>4th year completely free</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <CheckCircle className="h-5 w-5 text-green-300" />
//                   <span>0% interest EMI options</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="mt-20">
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//               <h4 className="font-bold text-gray-900 mb-3">Is the EMI really 0% interest?</h4>
//               <p className="text-gray-600">
//                 Yes, we offer 0% interest EMI options. However, a 2% processing fee is applicable for EMI payments to
//                 cover administrative costs.
//               </p>
//             </div>
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//               <h4 className="font-bold text-gray-900 mb-3">How do I qualify for scholarships?</h4>
//               <p className="text-gray-600">
//                 Scholarships are based on academic merit, sports achievements, financial need, or early application.
//                 Contact our admission team for detailed eligibility criteria.
//               </p>
//             </div>
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//               <h4 className="font-bold text-gray-900 mb-3">What happens if I can't complete the program?</h4>
//               <p className="text-gray-600">
//                 We have a comprehensive support system to ensure student success. In rare cases of withdrawal, fees are
//                 calculated on a pro-rata basis as per our refund policy.
//               </p>
//             </div>
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//               <h4 className="font-bold text-gray-900 mb-3">Are there any hidden charges?</h4>
//               <p className="text-gray-600">
//                 No hidden charges. The fee structure is completely transparent. All inclusions like laptop, books, and
//                 certifications are covered in the program fee.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  Calculator,
  Download,
  CheckCircle,
  ArrowRight,
  Percent,
  Calendar,
  GraduationCap,
  Award,
  IndianRupee,
} from "lucide-react"

export default function FeeCalculator() {
  const [selectedProgram, setSelectedProgram] = useState("")
  const [scholarshipType, setScholarshipType] = useState("")
  const [calculatedFee, setCalculatedFee] = useState({
    totalFee: 0,
    scholarshipDiscount: 0,
    finalAmount: 0,
  })

  const programs = [
    {
      id: "bca-fullstack",
      name: "BCA + Full Stack + PGCCA",
      totalFee: 395000,
      breakdown: {
        admission: 25000,
        firstYear: 200000,
        secondYear: 85000,
        thirdYear: 85000,
        fourthYear: 0, // 100% scholarship
      },
      duration: "4 Years",
      category: "Technology",
    },
    {
      id: "bca-analytics",
      name: "BCA + Data Analytics + PGCCA",
      totalFee: 395000,
      breakdown: {
        admission: 25000,
        firstYear: 200000,
        secondYear: 85000,
        thirdYear: 85000,
        fourthYear: 0,
      },
      duration: "4 Years",
      category: "Analytics",
    },
    // {
    //   id: "bca-digital",
    //   name: "BCA + Digital Marketing + PGCCA",
    //   totalFee: 395000,
    //   breakdown: {
    //     admission: 25000,
    //     firstYear: 200000,
    //     secondYear: 85000,
    //     thirdYear: 85000,
    //     fourthYear: 0,
    //   },
    //   duration: "4 Years",
    //   category: "Marketing",
    // },
    {
      id: "bba-digital",
      name: "BBA + Digital Marketing + PGCBA",
      totalFee: 365000,
      breakdown: {
        admission: 25000,
        firstYear: 190000,
        secondYear: 75000,
        thirdYear: 75000,
        fourthYear: 0,
      },
      duration: "4 Years",
      category: "Business",
    },
    {
      id: "bcom-acca",
      name: "BCOM + ACCA + PGCFM",
      totalFee: 425000,
      breakdown: {
        admission: 25000,
        firstYear: 180000,
        secondYear: 110000,
        thirdYear: 110000,
        fourthYear: 0,
      },
      duration: "4 Years",
      category: "Finance",
    },
  ]

  const scholarships = [
    { id: "merit", name: "Merit Scholarship (90%+ in 12th)", discount: 25 },
    { id: "sports", name: "Sports Scholarship (State/National)", discount: 50 },
    { id: "need", name: "Need-Based Scholarship", discount: 30 },
    { id: "early", name: "Early Bird Discount", discount: 10 },
    { id: "none", name: "No Scholarship", discount: 0 },
  ]

  useEffect(() => {
    calculateFee()
  }, [selectedProgram, scholarshipType])

  const calculateFee = () => {
    if (!selectedProgram) return

    const program = programs.find((p) => p.id === selectedProgram)
    if (!program) return

    const scholarship = scholarships.find((s) => s.id === scholarshipType)
    const scholarshipDiscount = scholarship ? (program.totalFee * scholarship.discount) / 100 : 0
    const finalAmount = program.totalFee - scholarshipDiscount

    setCalculatedFee({
      totalFee: program.totalFee,
      scholarshipDiscount,
      finalAmount,
    })
  }

  const selectedProgramData = programs.find((p) => p.id === selectedProgram)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleDownloadEstimate = () => {
    // Generate and download fee estimate PDF
    console.log("Downloading fee estimate...")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600/10 to-blue-600/10 backdrop-blur-sm border border-green-200/50 rounded-full px-6 py-3 mb-6">
            <Calculator className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-semibold">Fee Calculator</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Calculate Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Investment
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get a detailed breakdown of your program fees with scholarship options and flexible EMI plans. Make an
            informed decision about your educational investment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Calculator className="h-6 w-6 mr-3 text-blue-600" />
              Fee Calculator
            </h2>

            <div className="space-y-6">
              {/* Program Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Select Program</label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Choose a program</option>
                  {programs.map((program) => (
                    <option key={program.id} value={program.id}>
                      {program.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Payment Mode */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Payment Mode</label>
                <div className="grid grid-cols-1 gap-4">
                  <button
                    className={`p-4 rounded-xl border-2 transition-all duration-300 border-blue-500 bg-blue-50 text-blue-700`}
                  >
                    <IndianRupee className="h-6 w-6 mx-auto mb-2" />
                    <div className="font-semibold">Full Payment</div>
                    <div className="text-sm text-gray-600">One-time payment</div>
                  </button>
                </div>
              </div>

              {/* Scholarship Options */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Scholarship Eligibility</label>
                <select
                  value={scholarshipType}
                  onChange={(e) => setScholarshipType(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select scholarship type</option>
                  {scholarships.map((scholarship) => (
                    <option key={scholarship.id} value={scholarship.id}>
                      {scholarship.name} ({scholarship.discount}% off)
                    </option>
                  ))}
                </select>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateFee}
                disabled={!selectedProgram}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Calculate Fee
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-8">
            {selectedProgram && (
              <>
                {/* Program Details */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                    Program Details
                  </h3>
                  {selectedProgramData && (
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Program:</span>
                        <span className="font-semibold text-gray-900">{selectedProgramData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold text-gray-900">{selectedProgramData.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-semibold text-gray-900">{selectedProgramData.category}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Fee Breakdown */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Percent className="h-5 w-5 mr-2 text-green-600" />
                    Fee Breakdown
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Total Program Fee:</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(calculatedFee.totalFee)}</span>
                    </div>
                    {calculatedFee.scholarshipDiscount > 0 && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-600">Scholarship Discount:</span>
                        <span className="font-semibold text-green-600">
                          -{formatCurrency(calculatedFee.scholarshipDiscount)}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center py-3 bg-blue-50 rounded-lg px-4">
                      <span className="font-semibold text-gray-900">Final Amount:</span>
                      <span className="font-bold text-blue-600 text-xl">
                        {formatCurrency(calculatedFee.finalAmount)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Year-wise Breakdown */}
                {selectedProgramData && (
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                      Year-wise Payment
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-semibold text-gray-900">Admission Fee</div>
                        <div className="text-blue-600 font-bold">
                          {formatCurrency(selectedProgramData.breakdown.admission)}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-semibold text-gray-900">1st Year</div>
                        <div className="text-blue-600 font-bold">
                          {formatCurrency(selectedProgramData.breakdown.firstYear)}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-semibold text-gray-900">2nd Year</div>
                        <div className="text-blue-600 font-bold">
                          {formatCurrency(selectedProgramData.breakdown.secondYear)}
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="font-semibold text-gray-900">3rd Year</div>
                        <div className="text-blue-600 font-bold">
                          {formatCurrency(selectedProgramData.breakdown.thirdYear)}
                        </div>
                      </div>
                      <div className="col-span-2 text-center p-3 bg-green-50 rounded-lg">
                        <div className="font-semibold text-gray-900">4th Year (PGCCA)</div>
                        <div className="text-green-600 font-bold">100% Scholarship - FREE</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-4">
                  <button
                    onClick={handleDownloadEstimate}
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Fee Estimate
                  </button>
                  <Link
                    to="/admission"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <span className="mr-2">Apply Now</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </>
            )}

            {/* Benefits */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                What's Included
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>Brand new i3 laptop included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>100% placement assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>Industry certifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>4th year completely free</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span>0% interest EMI options</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-3">Is the EMI really 0% interest?</h4>
              <p className="text-gray-600">
                Yes, we offer 0% interest EMI options. However, a 2% processing fee is applicable for EMI payments to
                cover administrative costs.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-3">How do I qualify for scholarships?</h4>
              <p className="text-gray-600">
                Scholarships are based on academic merit, sports achievements, financial need, or early application.
                Contact our admission team for detailed eligibility criteria.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-3">What happens if I can't complete the program?</h4>
              <p className="text-gray-600">
                We have a comprehensive support system to ensure student success. In rare cases of withdrawal, fees are
                calculated on a pro-rata basis as per our refund policy.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-3">Are there any hidden charges?</h4>
              <p className="text-gray-600">
                No hidden charges. The fee structure is completely transparent. All inclusions like laptop, books, and
                certifications are covered in the program fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
