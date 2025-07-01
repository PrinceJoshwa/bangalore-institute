// "use client"

// import { useState } from "react"
// import { Calculator, Check, CreditCard, TrendingUp } from "lucide-react"

// interface ProgramFee {
//   id: string
//   name: string
//   baseFee: number
//   duration: number
// }

// export default function FeeCalculator() {
//   const [selectedProgram, setSelectedProgram] = useState<string>("")
//   const [selectedHostel, setSelectedHostel] = useState<boolean>(false)
//   const [selectedTransport, setSelectedTransport] = useState<boolean>(false)
//   const [selectedLaptop, setSelectedLaptop] = useState<boolean>(false)
//   const [totalFee, setTotalFee] = useState<number>(0)
//   const [semesterFee, setSemesterFee] = useState<number>(0)
//   const [showResult, setShowResult] = useState<boolean>(false)

//   const programs: ProgramFee[] = [
//     { id: "bcom-dm-pgdm", name: "BCom + Digital Marketing + PGDM", baseFee: 50000, duration: 6 },
//     { id: "bcom-acca", name: "BCom - ACCA Specialization", baseFee: 50000, duration: 6 },
//     { id: "bba-dm-pgdm", name: "BBA - Digital Marketing + PGDM", baseFee: 50000, duration: 6 },
//     { id: "bca-analytics", name: "BCA - Data Analytics", baseFee: 50000, duration: 6 },
//   ]

//   const calculateFees = () => {
//     const program = programs.find((p) => p.id === selectedProgram)

//     if (!program) {
//       setTotalFee(0)
//       setSemesterFee(0)
//       return
//     }

//     let semFee = program.baseFee
//     let totalProgramFee = program.baseFee * program.duration

//     if (selectedHostel) {
//       semFee += 25000
//       totalProgramFee += 25000 * program.duration
//     }

//     if (selectedTransport) {
//       semFee += 10000
//       totalProgramFee += 10000 * program.duration
//     }

//     if (selectedLaptop) {
//       totalProgramFee += 35000 // One-time fee
//     }

//     setSemesterFee(semFee)
//     setTotalFee(totalProgramFee)
//     setShowResult(true)
//   }

//   const resetCalculator = () => {
//     setSelectedProgram("")
//     setSelectedHostel(false)
//     setSelectedTransport(false)
//     setSelectedLaptop(false)
//     setShowResult(false)
//   }

//   return (
//     <section id="fee-calculator" className="w-full py-12 md:py-24 lg:py-32 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Smart Investment</div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
//               Smart Investment in Your Future
//             </h2>
//             <p className="max-w-[900px] text-gray-600 md:text-xl">
//               Calculate your educational investment with our transparent fee structure. Total degree cost starting from
//               ₹3.95L with flexible payment options and zero-cost EMI available.
//             </p>
//           </div>
//         </div>

//         {/* Investment Highlights */}
//         <div className="grid md:grid-cols-4 gap-6 mb-12">
//           <div className="card p-6 text-center">
//             <div className="text-3xl font-bold text-blue-600 mb-2">₹3.95L</div>
//             <div className="text-sm text-gray-600 mb-1">Total Degree Cost</div>
//             <div className="text-xs text-gray-500">
//               ₹50,000 per semester with flexible payment options and zero-cost EMI available
//             </div>
//           </div>
//           <div className="card p-6 text-center">
//             <div className="text-3xl font-bold text-green-600 mb-2">₹4L-8L</div>
//             <div className="text-sm text-gray-600 mb-1">Starting Salary</div>
//             <div className="text-xs text-gray-500">
//               Annual package range with 100% placement assistance and industry partnerships
//             </div>
//           </div>
//           <div className="card p-6 text-center">
//             <div className="text-3xl font-bold text-orange-600 mb-2">6-12</div>
//             <div className="text-sm text-gray-600 mb-1">Payback Months</div>
//             <div className="text-xs text-gray-500">
//               Your degree investment recovers in just 6 months to 1 year of earnings
//             </div>
//           </div>
//           <div className="card p-6 text-center">
//             <div className="text-3xl font-bold text-purple-600 mb-2">₹10K</div>
//             <div className="text-sm text-gray-600 mb-1">Seat Booking</div>
//             <div className="text-xs text-gray-500">
//               Secure your admission with minimal advance payment and student loan facility
//             </div>
//           </div>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="card p-6">
//               <div className="mb-6">
//                 <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
//                   <Calculator className="mr-2 h-5 w-5 text-blue-600" />
//                   Calculate Your Investment
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   Select your program to get detailed fee breakdown with placement guarantee.
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
//                     Select Program
//                   </label>
//                   <select
//                     id="program"
//                     value={selectedProgram}
//                     onChange={(e) => setSelectedProgram(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="">-- Select a Program --</option>
//                     {programs.map((program) => (
//                       <option key={program.id} value={program.id}>
//                         {program.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {selectedProgram && (
//                   <>
//                     <div className="space-y-3">
//                       <p className="text-sm font-medium text-gray-700">Additional Services</p>

//                       <div className="flex items-center">
//                         <input
//                           type="checkbox"
//                           id="hostel"
//                           checked={selectedHostel}
//                           onChange={() => setSelectedHostel(!selectedHostel)}
//                           className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                         />
//                         <label htmlFor="hostel" className="ml-2 block text-sm text-gray-700">
//                           Hostel Accommodation (₹25,000 per semester)
//                         </label>
//                       </div>

//                       <div className="flex items-center">
//                         <input
//                           type="checkbox"
//                           id="transport"
//                           checked={selectedTransport}
//                           onChange={() => setSelectedTransport(!selectedTransport)}
//                           className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                         />
//                         <label htmlFor="transport" className="ml-2 block text-sm text-gray-700">
//                           Transport Facility (₹10,000 per semester)
//                         </label>
//                       </div>

//                       <div className="flex items-center">
//                         <input
//                           type="checkbox"
//                           id="laptop"
//                           checked={selectedLaptop}
//                           onChange={() => setSelectedLaptop(!selectedLaptop)}
//                           className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                         />
//                         <label htmlFor="laptop" className="ml-2 block text-sm text-gray-700">
//                           Complete Onboarding Kit (₹35,000 one-time)
//                         </label>
//                       </div>
//                     </div>

//                     <div className="pt-4 flex gap-3">
//                       <button onClick={calculateFees} className="btn btn-primary px-6 py-2" disabled={!selectedProgram}>
//                         Calculate Fees
//                       </button>
//                       <button onClick={resetCalculator} className="btn btn-secondary px-6 py-2">
//                         Reset
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>

//             <div className="card p-6 bg-gradient-to-br from-blue-50 to-white">
//               {showResult && selectedProgram ? (
//                 <div className="space-y-6">
//                   <div>
//                     <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
//                       <Check className="mr-2 h-5 w-5 text-green-600" />
//                       Investment Breakdown
//                     </h3>
//                   </div>

//                   <div className="space-y-3">
//                     <div className="flex justify-between items-center pb-2 border-b border-gray-200">
//                       <span className="text-gray-600">Tuition Fee (per semester)</span>
//                       <span className="font-semibold">₹50,000</span>
//                     </div>

//                     {selectedHostel && (
//                       <div className="flex justify-between items-center pb-2 border-b border-gray-200">
//                         <span className="text-gray-600">Hostel Fee (per semester)</span>
//                         <span className="font-semibold">₹25,000</span>
//                       </div>
//                     )}

//                     {selectedTransport && (
//                       <div className="flex justify-between items-center pb-2 border-b border-gray-200">
//                         <span className="text-gray-600">Transport Fee (per semester)</span>
//                         <span className="font-semibold">₹10,000</span>
//                       </div>
//                     )}

//                     {selectedLaptop && (
//                       <div className="flex justify-between items-center pb-2 border-b border-gray-200">
//                         <span className="text-gray-600">Onboarding Kit (one-time)</span>
//                         <span className="font-semibold">₹35,000</span>
//                       </div>
//                     )}

//                     <div className="flex justify-between items-center pt-2 text-lg">
//                       <span className="font-medium text-blue-800">Total Fee (per semester)</span>
//                       <span className="font-bold text-blue-800">₹{semesterFee.toLocaleString()}</span>
//                     </div>

//                     <div className="flex justify-between items-center pt-2 text-lg bg-blue-100 p-3 rounded-lg mt-4">
//                       <span className="font-medium text-blue-800">Total Program Fee</span>
//                       <span className="font-bold text-blue-800">₹{totalFee.toLocaleString()}</span>
//                     </div>
//                   </div>

//                   <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-100">
//                     <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
//                       <CreditCard className="h-4 w-4" />
//                       Payment Benefits:
//                     </h4>
//                     <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
//                       <li>Zero-cost EMI available</li>
//                       <li>Flexible payment options</li>
//                       <li>₹10K seat booking amount</li>
//                       <li>Student loan facility available</li>
//                       <li>6-12 months payback period with ₹4L-8L starting salary</li>
//                     </ul>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="h-full flex flex-col items-center justify-center text-center p-6">
//                   <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                     <TrendingUp className="h-8 w-8 text-blue-600" />
//                   </div>
//                   <h3 className="text-xl font-medium text-blue-800 mb-2">Smart Investment Calculator</h3>
//                   <p className="text-gray-500">
//                     Select a program to see your educational investment with guaranteed placement assistance.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState } from "react"
import { Calculator, Check, CreditCard, TrendingUp, DollarSign, PiggyBank, Award, Target } from "lucide-react"

interface ProgramFee {
  id: string
  name: string
  baseFee: number
  duration: number
  color: string
}

export default function FeeCalculator() {
  const [selectedProgram, setSelectedProgram] = useState<string>("")
  const [selectedHostel, setSelectedHostel] = useState<boolean>(false)
  const [selectedTransport, setSelectedTransport] = useState<boolean>(false)
  const [selectedLaptop, setSelectedLaptop] = useState<boolean>(false)
  const [totalFee, setTotalFee] = useState<number>(0)
  const [semesterFee, setSemesterFee] = useState<number>(0)
  const [showResult, setShowResult] = useState<boolean>(false)

  const programs: ProgramFee[] = [
    {
      id: "bcom-dm-pgdm",
      name: "BCom + Digital Marketing + PGDM",
      baseFee: 50000,
      duration: 6,
      color: "from-blue-600 to-blue-800",
    },
    {
      id: "bcom-acca",
      name: "BCom - ACCA Specialization",
      baseFee: 50000,
      duration: 6,
      color: "from-emerald-600 to-emerald-800",
    },
    {
      id: "bba-dm-pgdm",
      name: "BBA - Digital Marketing + PGDM",
      baseFee: 50000,
      duration: 6,
      color: "from-purple-600 to-purple-800",
    },
    {
      id: "bca-analytics",
      name: "BCA - Data Analytics",
      baseFee: 50000,
      duration: 6,
      color: "from-orange-600 to-orange-800",
    },
  ]

  const calculateFees = () => {
    const program = programs.find((p) => p.id === selectedProgram)

    if (!program) {
      setTotalFee(0)
      setSemesterFee(0)
      return
    }

    let semFee = program.baseFee
    let totalProgramFee = program.baseFee * program.duration

    if (selectedHostel) {
      semFee += 25000
      totalProgramFee += 25000 * program.duration
    }

    if (selectedTransport) {
      semFee += 10000
      totalProgramFee += 10000 * program.duration
    }

    if (selectedLaptop) {
      totalProgramFee += 35000 // One-time fee
    }

    setSemesterFee(semFee)
    setTotalFee(totalProgramFee)
    setShowResult(true)
  }

  const resetCalculator = () => {
    setSelectedProgram("")
    setSelectedHostel(false)
    setSelectedTransport(false)
    setSelectedLaptop(false)
    setShowResult(false)
  }

  const investmentHighlights = [
    {
      amount: "₹3.95L",
      label: "Total Degree Cost",
      description: "₹50,000 per semester with flexible payment options and zero-cost EMI available",
      icon: <PiggyBank className="h-8 w-8" />,
      color: "from-blue-600 to-blue-800",
    },
    {
      amount: "₹4L-8L",
      label: "Starting Salary",
      description: "Annual package range with 100% placement assistance and industry partnerships",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-green-600 to-green-800",
    },
    {
      amount: "6-12",
      label: "Payback Months",
      description: "Your degree investment recovers in just 6 months to 1 year of earnings",
      icon: <Target className="h-8 w-8" />,
      color: "from-orange-600 to-orange-800",
    },
    {
      amount: "₹10K",
      label: "Seat Booking",
      description: "Secure your admission with minimal advance payment and student loan facility",
      icon: <Award className="h-8 w-8" />,
      color: "from-purple-600 to-purple-800",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8">
            <Calculator className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Smart Investment Calculator</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Smart Investment
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              in Your Future
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Calculate your educational investment with our transparent fee structure. Total degree cost starting from
            ₹3.95L with flexible payment options and zero-cost EMI available.
          </p>
        </div>

        {/* Investment Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {investmentHighlights.map((highlight, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-12 translate-x-12"></div>

                <div className="relative z-10">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    {highlight.icon}
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                    {highlight.amount}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-3">{highlight.label}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{highlight.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calculator Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-16"></div>

              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                    <Calculator className="mr-3 h-8 w-8 text-blue-600" />
                    Calculate Your Investment
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Select your program to get detailed fee breakdown with placement guarantee and ROI analysis.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="program" className="block text-lg font-semibold text-gray-900 mb-3">
                      Select Your Program
                    </label>
                    <select
                      id="program"
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg"
                    >
                      <option value="">-- Choose Your Future Program --</option>
                      {programs.map((program) => (
                        <option key={program.id} value={program.id}>
                          {program.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedProgram && (
                    <>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Additional Services & Facilities</h3>

                        <div className="space-y-4">
                          <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                            <input
                              type="checkbox"
                              id="hostel"
                              checked={selectedHostel}
                              onChange={() => setSelectedHostel(!selectedHostel)}
                              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="hostel" className="ml-4 flex-1">
                              <div className="font-semibold text-gray-900">Hostel Accommodation</div>
                              <div className="text-sm text-gray-600">
                                ₹25,000 per semester - Modern facilities with Wi-Fi
                              </div>
                            </label>
                          </div>

                          <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                            <input
                              type="checkbox"
                              id="transport"
                              checked={selectedTransport}
                              onChange={() => setSelectedTransport(!selectedTransport)}
                              className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label htmlFor="transport" className="ml-4 flex-1">
                              <div className="font-semibold text-gray-900">Transport Facility</div>
                              <div className="text-sm text-gray-600">
                                ₹10,000 per semester - AC buses with GPS tracking
                              </div>
                            </label>
                          </div>

                          <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                            <input
                              type="checkbox"
                              id="laptop"
                              checked={selectedLaptop}
                              onChange={() => setSelectedLaptop(!selectedLaptop)}
                              className="h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                            />
                            <label htmlFor="laptop" className="ml-4 flex-1">
                              <div className="font-semibold text-gray-900">Complete Onboarding Kit</div>
                              <div className="text-sm text-gray-600">
                                ₹35,000 one-time - Laptop, software & study materials
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={calculateFees}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                          disabled={!selectedProgram}
                        >
                          Calculate Investment
                        </button>
                        <button
                          onClick={resetCalculator}
                          className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300"
                        >
                          Reset
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

              <div className="relative z-10">
                {showResult && selectedProgram ? (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-6 flex items-center">
                        <Check className="mr-3 h-8 w-8 text-green-300" />
                        Investment Breakdown
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <span className="text-blue-100 font-medium">Tuition Fee (per semester)</span>
                        <span className="text-2xl font-bold">₹50,000</span>
                      </div>

                      {selectedHostel && (
                        <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                          <span className="text-blue-100 font-medium">Hostel Fee (per semester)</span>
                          <span className="text-2xl font-bold">₹25,000</span>
                        </div>
                      )}

                      {selectedTransport && (
                        <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                          <span className="text-blue-100 font-medium">Transport Fee (per semester)</span>
                          <span className="text-2xl font-bold">₹10,000</span>
                        </div>
                      )}

                      {selectedLaptop && (
                        <div className="flex justify-between items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                          <span className="text-blue-100 font-medium">Onboarding Kit (one-time)</span>
                          <span className="text-2xl font-bold">₹35,000</span>
                        </div>
                      )}

                      <div className="flex justify-between items-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl border-2 border-white/30">
                        <span className="text-xl font-bold">Total Fee (per semester)</span>
                        <span className="text-3xl font-bold text-green-300">₹{semesterFee.toLocaleString()}</span>
                      </div>

                      <div className="flex justify-between items-center p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl border-2 border-green-300/50">
                        <span className="text-xl font-bold">Total Program Investment</span>
                        <span className="text-4xl font-bold text-green-300">₹{totalFee.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                      <h3 className="font-bold text-xl mb-4 flex items-center">
                        <CreditCard className="h-6 w-6 mr-2" />
                        Payment Benefits & ROI:
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-300" />
                            <span>Zero-cost EMI available</span>
                          </div>
                          <div className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-300" />
                            <span>Flexible payment options</span>
                          </div>
                          <div className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-300" />
                            <span>₹10K seat booking amount</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-300" />
                            <span>Student loan facility available</span>
                          </div>
                          <div className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-300" />
                            <span>6-12 months payback period</span>
                          </div>
                          <div className="flex items-center">
                            <Check className="h-4 w-4 mr-2 text-green-300" />
                            <span>₹4L-8L starting salary range</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8">
                      <DollarSign className="h-12 w-12" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Smart Investment Calculator</h2>
                    <p className="text-blue-100 text-lg leading-relaxed max-w-md">
                      Select a program to see your educational investment with guaranteed placement assistance and
                      detailed ROI analysis.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Why Choose BIMSR for Your Investment?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your education is an investment in your future. We ensure maximum returns through quality education,
                industry partnerships, and guaranteed placement assistance.
              </p>
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <TrendingUp className="h-10 w-10 mx-auto mb-3 text-green-400" />
                  <div className="font-bold text-lg">High ROI</div>
                  <div className="text-sm text-gray-400">6-12 months payback</div>
                </div>
                <div className="text-center">
                  <Award className="h-10 w-10 mx-auto mb-3 text-blue-400" />
                  <div className="font-bold text-lg">100% Placement</div>
                  <div className="text-sm text-gray-400">Guaranteed assistance</div>
                </div>
                <div className="text-center">
                  <CreditCard className="h-10 w-10 mx-auto mb-3 text-purple-400" />
                  <div className="font-bold text-lg">Flexible Payment</div>
                  <div className="text-sm text-gray-400">Zero-cost EMI options</div>
                </div>
                <div className="text-center">
                  <PiggyBank className="h-10 w-10 mx-auto mb-3 text-orange-400" />
                  <div className="font-bold text-lg">Scholarships</div>
                  <div className="text-sm text-gray-400">Merit-based rewards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
