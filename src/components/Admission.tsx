// import { Calendar, FileText, Users, Award, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react"

// export default function Admission() {
//   const eligibilityRequirements = [
//     "Bachelor's degree in any discipline from a recognized university",
//     "Minimum 50% aggregate marks (45% for SC/ST candidates)",
//     "Valid PGCET/KMAT/CAT/MAT/XAT/CMAT score",
//     "Work experience preferred but not mandatory",
//   ]

//   const admissionProcess = [
//     {
//       step: "1",
//       title: "Application Submission",
//       description: "Submit online application with required documents",
//       icon: <FileText className="h-6 w-6 text-blue-600" />,
//     },
//     {
//       step: "2",
//       title: "Entrance Test Score",
//       description: "PGCET/KMAT/CAT/MAT/XAT/CMAT score submission",
//       icon: <Award className="h-6 w-6 text-blue-600" />,
//     },
//     {
//       step: "3",
//       title: "Personal Interview",
//       description: "Face-to-face or online interview with admission panel",
//       icon: <Users className="h-6 w-6 text-blue-600" />,
//     },
//     {
//       step: "4",
//       title: "Final Selection",
//       description: "Merit-based selection and admission confirmation",
//       icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
//     },
//   ]

//   const importantDates = [
//     { event: "Application Start Date", date: "March 2024" },
//     { event: "Application Last Date", date: "June 2024" },
//     { event: "PGCET Exam", date: "As per KEA Schedule" },
//     { event: "Interview Rounds", date: "July 2024" },
//     { event: "Final Merit List", date: "August 2024" },
//     { event: "Classes Commence", date: "August 2024" },
//   ]

//   const requiredDocuments = [
//     "Completed application form",
//     "10th and 12th mark sheets",
//     "Bachelor's degree certificate and mark sheets",
//     "Entrance test score card (PGCET/KMAT/CAT/MAT/XAT/CMAT)",
//     "Transfer certificate from previous institution",
//     "Caste certificate (if applicable)",
//     "Passport size photographs",
//     "Aadhar card copy",
//   ]

//   return (
//     <section id="admission" className="w-full py-12 md:py-24 lg:py-8 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Admissions 2024</div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">MBA Admissions Open</h2>
//             <p className="max-w-3xl text-gray-600 md:text-xl">
//               Join BIMSR's prestigious MBA program. Limited seats available for 2024 batch. PGCET Code: B090MB - Apply
//               today!
//             </p>
//           </div>
//         </div>

//         {/* Admission Alert */}
//         <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-12">
//           <div className="flex items-start gap-3">
//             <AlertCircle className="h-6 w-6 text-orange-600 mt-1" />
//             <div>
//               <h3 className="font-semibold text-orange-800 mb-2">Hurry! Limited Seats Available</h3>
//               <p className="text-orange-700 text-sm">
//                 Admissions for MBA 2024 batch are now open. Don't miss this opportunity to join one of Bangalore's
//                 premier management institutes. Apply before seats fill up!
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Eligibility Criteria */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-12">
//           <div className="card p-6">
//             <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
//               <CheckCircle className="h-6 w-6 text-green-600" />
//               Eligibility Criteria
//             </h3>
//             <ul className="space-y-3">
//               {eligibilityRequirements.map((requirement, index) => (
//                 <li key={index} className="flex items-start gap-2">
//                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
//                   <span className="text-gray-700 text-sm">{requirement}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="card p-6">
//             <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
//               <Calendar className="h-6 w-6 text-blue-600" />
//               Important Dates
//             </h3>
//             <div className="space-y-3">
//               {importantDates.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
//                 >
//                   <span className="text-gray-700 text-sm">{item.event}</span>
//                   <span className="text-blue-600 font-semibold text-sm">{item.date}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Admission Process */}
//         <div className="mb-12">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Admission Process</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {admissionProcess.map((process, index) => (
//               <div key={index} className="card p-6 text-center relative">
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   {process.icon}
//                 </div>
//                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
//                   {process.step}
//                 </div>
//                 <h4 className="text-lg font-bold text-blue-800 mb-2">{process.title}</h4>
//                 <p className="text-gray-600 text-sm">{process.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Required Documents */}
//         <div className="card p-6 mb-12">
//           <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
//             <FileText className="h-6 w-6 text-blue-600" />
//             Required Documents
//           </h3>
//           <div className="grid md:grid-cols-2 gap-4">
//             {requiredDocuments.map((document, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <CheckCircle className="h-4 w-4 text-green-600" />
//                 <span className="text-gray-700 text-sm">{document}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Contact for Admission */}
//         <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
//           <h3 className="text-2xl font-bold mb-4">Need Help with Admissions?</h3>
//           <p className="mb-6 text-blue-100">
//             Our admission counselors are here to guide you through the process. Contact us for personalized assistance.
//           </p>
//           <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
//             <div className="flex items-center justify-center gap-2">
//               <Phone className="h-5 w-5" />
//               <span>+91-962 060 2288</span>
//             </div>
//             <div className="flex items-center justify-center gap-2">
//               <Mail className="h-5 w-5" />
//               <span>info@bimsrbengaluru.com</span>
//             </div>
//           </div>
//           <div className="mt-6">
//             <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
//               Apply Now - MBA 2024
//             </button>
//           </div>
//           <div className="mt-4 text-sm text-blue-100">
//             <strong>PGCET Code: B090MB</strong> | AICTE Approved Program
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Calendar, FileText, Users, Award, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react"

export default function Admission() {
  const eligibilityRequirements = [
    "10+2 or equivalent from a recognized board",
    "Minimum 50% aggregate marks (45% for SC/ST candidates)",
    "Valid entrance test score (if applicable)",
    "English proficiency for communication",
  ]

  const admissionProcess = [
    {
      step: "1",
      title: "Online Application",
      description: "Submit online application with required documents and ₹10K seat booking",
      icon: <FileText className="h-6 w-6 text-blue-600" />,
    },
    {
      step: "2",
      title: "Document Verification",
      description: "Upload and verify all academic documents and certificates",
      icon: <Award className="h-6 w-6 text-blue-600" />,
    },
    {
      step: "3",
      title: "Personal Interview",
      description: "Face-to-face or online interview with admission panel",
      icon: <Users className="h-6 w-6 text-blue-600" />,
    },
    {
      step: "4",
      title: "Final Selection",
      description: "Merit-based selection and admission confirmation with onboarding kit",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
    },
  ]

  const importantDates = [
    { event: "Application Start Date", date: "January 2024" },
    { event: "Application Last Date", date: "July 2024" },
    { event: "Interview Rounds", date: "June-July 2024" },
    { event: "Final Merit List", date: "August 2024" },
    { event: "Classes Commence", date: "August 2024" },
    { event: "Onboarding Kit Distribution", date: "First Week" },
  ]

  const requiredDocuments = [
    "Completed application form",
    "10th and 12th mark sheets and certificates",
    "Transfer certificate from previous institution",
    "Character certificate",
    "Caste certificate (if applicable)",
    "Passport size photographs",
    "Aadhar card copy",
    "Income certificate (for scholarships)",
  ]

  return (
    <section id="admission" className="w-full py-12 md:py-24 lg:py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Admissions 2024</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
              Join India's First AI-Powered Institute
            </h2>
            <p className="max-w-3xl text-gray-600 md:text-xl">
              Transform your future with BIMSR's revolutionary programs. Limited seats available for 2024 batch with
              100% placement guarantee and industry certifications.
            </p>
          </div>
        </div>

        {/* Admission Alert */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-orange-600 mt-1" />
            <div>
              <h3 className="font-semibold text-orange-800 mb-2">Hurry! Limited Seats Available</h3>
              <p className="text-orange-700 text-sm">
                Admissions for 2024 batch are now open. Secure your seat with just ₹10K booking amount. Don't miss this
                opportunity to join India's first AI-powered education institute!
              </p>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="card p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              Eligibility Criteria
            </h3>
            <ul className="space-y-3">
              {eligibilityRequirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-sm">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              Important Dates
            </h3>
            <div className="space-y-3">
              {importantDates.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-gray-700 text-sm">{item.event}</span>
                  <span className="text-blue-600 font-semibold text-sm">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Admission Process */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Simple Admission Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionProcess.map((process, index) => (
              <div key={index} className="card p-6 text-center relative">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {process.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {process.step}
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="card p-6 mb-12">
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <FileText className="h-6 w-6 text-blue-600" />
            Required Documents
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {requiredDocuments.map((document, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-gray-700 text-sm">{document}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Admission */}
        <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Future?</h3>
          <p className="mb-6 text-blue-100">
            Our admission counselors are here to guide you through the process. Contact us for personalized assistance
            and secure your seat today!
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
            <div className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              <span>8970002004</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-5 w-5" />
              <span>admissions@Bangaloreinstitutions.com</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Apply Now - Secure Your Seat
            </button>
            <button className="bg-white/10 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
              Schedule Campus Visit
            </button>
          </div>
          <div className="mt-4 text-sm text-blue-100">
            <strong>Seat Booking:</strong> Just ₹10K | <strong>Zero-Cost EMI Available</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
