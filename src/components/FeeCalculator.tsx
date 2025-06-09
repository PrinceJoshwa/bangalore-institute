// "use client"

// import { useState, useEffect } from "react"
// import { Calculator, Check } from "lucide-react"

// interface ProgramFee {
//   id: string
//   name: string
//   baseFee: number
//   duration: number
// }

// interface AdditionalFee {
//   id: string
//   name: string
//   fee: number
//   isOptional: boolean
// }

// export default function FeeCalculator() {
//   const [selectedProgram, setSelectedProgram] = useState<string>("")
//   const [selectedSemester, setSelectedSemester] = useState<number>(1)
//   const [selectedHostel, setSelectedHostel] = useState<boolean>(false)
//   const [selectedTransport, setSelectedTransport] = useState<boolean>(false)
//   const [selectedLaptop, setSelectedLaptop] = useState<boolean>(false)
//   const [totalFee, setTotalFee] = useState<number>(0)
//   const [semesterFee, setSemesterFee] = useState<number>(0)
//   const [showResult, setShowResult] = useState<boolean>(false)

//   const programs: ProgramFee[] = [
//     { id: "btech", name: "B.Tech (Engineering)", baseFee: 85000, duration: 8 },
//     { id: "bba", name: "BBA (Business Administration)", baseFee: 65000, duration: 6 },
//     { id: "bca", name: "BCA (Computer Applications)", baseFee: 60000, duration: 6 },
//     { id: "bdes", name: "B.Des (Design)", baseFee: 75000, duration: 8 },
//     { id: "mtech", name: "M.Tech (Engineering)", baseFee: 95000, duration: 4 },
//     { id: "mba", name: "MBA (Business Administration)", baseFee: 110000, duration: 4 },
//   ]

//   const additionalFees: AdditionalFee[] = [
//     { id: "hostel", name: "Hostel Accommodation", fee: 45000, isOptional: true },
//     { id: "transport", name: "Transport Facility", fee: 15000, isOptional: true },
//     { id: "laptop", name: "Laptop Package", fee: 35000, isOptional: true },
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
//       const hostelFee = additionalFees.find((f) => f.id === "hostel")?.fee || 0
//       semFee += hostelFee
//       totalProgramFee += hostelFee * program.duration
//     }

//     if (selectedTransport) {
//       const transportFee = additionalFees.find((f) => f.id === "transport")?.fee || 0
//       semFee += transportFee
//       totalProgramFee += transportFee * program.duration
//     }

//     if (selectedLaptop) {
//       const laptopFee = additionalFees.find((f) => f.id === "laptop")?.fee || 0
//       // Laptop is one-time fee
//       totalProgramFee += laptopFee
//     }

//     setSemesterFee(semFee)
//     setTotalFee(totalProgramFee)
//     setShowResult(true)
//   }

//   const resetCalculator = () => {
//     setSelectedProgram("")
//     setSelectedSemester(1)
//     setSelectedHostel(false)
//     setSelectedTransport(false)
//     setSelectedLaptop(false)
//     setShowResult(false)
//   }

//   useEffect(() => {
//     if (selectedProgram) {
//       const program = programs.find((p) => p.id === selectedProgram)
//       if (program) {
//         setSelectedSemester(1)
//       }
//     }
//   }, [selectedProgram])

//   return (
//     <section id="fee-calculator" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
//               Financial Planning
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Fee Calculator</h2>
//             <p className="max-w-[900px] text-gray-600 md:text-xl">
//               Plan your education investment with our interactive fee calculator. Get an estimate of your tuition and
//               additional costs based on your program selection.
//             </p>
//           </div>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="card p-6">
//               <div className="mb-6">
//                 <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
//                   <Calculator className="mr-2 h-5 w-5 text-blue-600" />
//                   Calculate Your Fees
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   Select your program and additional services to get an estimate of your educational investment.
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
//                     <div>
//                       <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">
//                         Semester
//                       </label>
//                       <select
//                         id="semester"
//                         value={selectedSemester}
//                         onChange={(e) => setSelectedSemester(Number.parseInt(e.target.value))}
//                         className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                       >
//                         {Array.from(
//                           { length: programs.find((p) => p.id === selectedProgram)?.duration || 0 },
//                           (_, i) => (
//                             <option key={i + 1} value={i + 1}>
//                               Semester {i + 1}
//                             </option>
//                           ),
//                         )}
//                       </select>
//                     </div>

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
//                           Hostel Accommodation (₹45,000 per semester)
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
//                           Transport Facility (₹15,000 per semester)
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
//                           Laptop Package (₹35,000 one-time)
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
//                       Fee Estimate
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-6">
//                       Here's a breakdown of your estimated fees for{" "}
//                       {programs.find((p) => p.id === selectedProgram)?.name}
//                     </p>
//                   </div>

//                   <div className="space-y-3">
//                     <div className="flex justify-between items-center pb-2 border-b border-gray-200">
//                       <span className="text-gray-600">Tuition Fee (per semester)</span>
//                       <span className="font-semibold">
//                         ₹{programs.find((p) => p.id === selectedProgram)?.baseFee.toLocaleString()}
//                       </span>
//                     </div>

//                     {selectedHostel && (
//                       <div className="flex justify-between items-center pb-2 border-b border-gray-200">
//                         <span className="text-gray-600">Hostel Fee (per semester)</span>
//                         <span className="font-semibold">
//                           ₹{additionalFees.find((f) => f.id === "hostel")?.fee.toLocaleString()}
//                         </span>
//                       </div>
//                     )}

//                     {selectedTransport && (
//                       <div className="flex justify-between items-center pb-2 border-b border-gray-200">
//                         <span className="text-gray-600">Transport Fee (per semester)</span>
//                         <span className="font-semibold">
//                           ₹{additionalFees.find((f) => f.id === "transport")?.fee.toLocaleString()}
//                         </span>
//                       </div>
//                     )}

//                     {selectedLaptop && (
//                       <div className="flex justify-between items-center pb-2 border-b border-gray-200">
//                         <span className="text-gray-600">Laptop Package (one-time)</span>
//                         <span className="font-semibold">
//                           ₹{additionalFees.find((f) => f.id === "laptop")?.fee.toLocaleString()}
//                         </span>
//                       </div>
//                     )}

//                     <div className="flex justify-between items-center pt-2 text-lg">
//                       <span className="font-medium text-blue-800">Total Fee (per semester)</span>
//                       <span className="font-bold text-blue-800">₹{semesterFee.toLocaleString()}</span>
//                     </div>

//                     <div className="flex justify-between items-center pt-2 text-lg bg-blue-100 p-3 rounded-lg mt-4">
//                       <span className="font-medium text-blue-800">
//                         Total Program Fee ({programs.find((p) => p.id === selectedProgram)?.duration} semesters)
//                       </span>
//                       <span className="font-bold text-blue-800">₹{totalFee.toLocaleString()}</span>
//                     </div>
//                   </div>

//                   <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
//                     <h4 className="font-semibold text-blue-800 mb-2">Note:</h4>
//                     <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
//                       <li>All fees are in Indian Rupees (₹)</li>
//                       <li>One-time admission fee of ₹10,000 is applicable (not included above)</li>
//                       <li>Examination fees are charged separately each semester</li>
//                       <li>Fees are subject to revision as per institute policy</li>
//                     </ul>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="h-full flex flex-col items-center justify-center text-center p-6">
//                   <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                     <Calculator className="h-8 w-8 text-blue-600" />
//                   </div>
//                   <h3 className="text-xl font-medium text-blue-800 mb-2">Fee Estimate</h3>
//                   <p className="text-gray-500">
//                     Select a program and click "Calculate Fees" to see your estimated educational investment.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="mt-8 text-center">
//             <p className="text-sm text-gray-500">
//               For detailed fee structure and scholarship opportunities, please contact our admissions office.
//             </p>
//             <button className="mt-4 btn btn-secondary">Download Complete Fee Structure</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { Calculator, Check, CreditCard } from "lucide-react"

interface ProgramFee {
  id: string
  name: string
  baseFee: number
  duration: number
}

export default function FeeCalculator() {
  const [selectedProgram, setSelectedProgram] = useState<string>("")
  const [selectedSemester, setSelectedSemester] = useState<number>(1)
  const [selectedHostel, setSelectedHostel] = useState<boolean>(false)
  const [selectedTransport, setSelectedTransport] = useState<boolean>(false)
  const [selectedLaptop, setSelectedLaptop] = useState<boolean>(false)
  const [totalFee, setTotalFee] = useState<number>(0)
  const [semesterFee, setSemesterFee] = useState<number>(0)
  const [showResult, setShowResult] = useState<boolean>(false)

  const programs: ProgramFee[] = [
    { id: "bcom-dm-pgdm", name: "BCom + Digital Marketing + PGDM", baseFee: 50000, duration: 6 },
    { id: "bcom-acca", name: "BCom - ACCA Specialization", baseFee: 50000, duration: 6 },
    { id: "bba-dm-pgdm", name: "BBA - Digital Marketing + PGDM", baseFee: 50000, duration: 6 },
    { id: "bca-analytics", name: "BCA - Data Analytics", baseFee: 50000, duration: 6 },
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
    setSelectedSemester(1)
    setSelectedHostel(false)
    setSelectedTransport(false)
    setSelectedLaptop(false)
    setShowResult(false)
  }

  return (
    <section id="fee-calculator" className="w-full py-12 md:py-24 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Smart Investment</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Fee Calculator</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Calculate your educational investment with our transparent fee structure. Total degree cost starting from
              ₹3.95L with flexible payment options and zero-cost EMI available.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  <Calculator className="mr-2 h-5 w-5 text-blue-600" />
                  Calculate Your Investment
                </h3>
                <p className="text-gray-600 text-sm">
                  Select your program to get detailed fee breakdown with placement guarantee.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                    Select Program
                  </label>
                  <select
                    id="program"
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">-- Select a Program --</option>
                    {programs.map((program) => (
                      <option key={program.id} value={program.id}>
                        {program.name}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedProgram && (
                  <>
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-gray-700">Additional Services</p>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="hostel"
                          checked={selectedHostel}
                          onChange={() => setSelectedHostel(!selectedHostel)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="hostel" className="ml-2 block text-sm text-gray-700">
                          Hostel Accommodation (₹25,000 per semester)
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="transport"
                          checked={selectedTransport}
                          onChange={() => setSelectedTransport(!selectedTransport)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="transport" className="ml-2 block text-sm text-gray-700">
                          Transport Facility (₹10,000 per semester)
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="laptop"
                          checked={selectedLaptop}
                          onChange={() => setSelectedLaptop(!selectedLaptop)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="laptop" className="ml-2 block text-sm text-gray-700">
                          Complete Onboarding Kit (₹35,000 one-time)
                        </label>
                      </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                      <button onClick={calculateFees} className="btn btn-primary px-6 py-2" disabled={!selectedProgram}>
                        Calculate Fees
                      </button>
                      <button onClick={resetCalculator} className="btn btn-secondary px-6 py-2">
                        Reset
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="card p-6 bg-gradient-to-br from-blue-50 to-white">
              {showResult && selectedProgram ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-600" />
                      Investment Breakdown
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-600">Tuition Fee (per semester)</span>
                      <span className="font-semibold">₹50,000</span>
                    </div>

                    {selectedHostel && (
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span className="text-gray-600">Hostel Fee (per semester)</span>
                        <span className="font-semibold">₹25,000</span>
                      </div>
                    )}

                    {selectedTransport && (
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span className="text-gray-600">Transport Fee (per semester)</span>
                        <span className="font-semibold">₹10,000</span>
                      </div>
                    )}

                    {selectedLaptop && (
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span className="text-gray-600">Onboarding Kit (one-time)</span>
                        <span className="font-semibold">₹35,000</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-2 text-lg">
                      <span className="font-medium text-blue-800">Total Fee (per semester)</span>
                      <span className="font-bold text-blue-800">₹{semesterFee.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center pt-2 text-lg bg-blue-100 p-3 rounded-lg mt-4">
                      <span className="font-medium text-blue-800">Total Program Fee</span>
                      <span className="font-bold text-blue-800">₹{totalFee.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-100">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Payment Benefits:
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                      <li>Zero-cost EMI available</li>
                      <li>Flexible payment options</li>
                      <li>₹10K seat booking amount</li>
                      <li>Student loan facility available</li>
                      <li>6-12 months payback period with ₹4L-8L starting salary</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Calculator className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium text-blue-800 mb-2">Smart Investment Calculator</h3>
                  <p className="text-gray-500">
                    Select a program to see your educational investment with guaranteed placement assistance.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
