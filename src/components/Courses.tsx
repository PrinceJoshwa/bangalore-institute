// // // "use client"

// // // import { useState } from "react"
// // // import {
// // //   Code,
// // //   Briefcase,
// // //   Wrench,
// // //   Zap,
// // //   Building,
// // //   DollarSign,
// // //   TrendingUp,
// // //   PenTool,
// // //   Film,
// // //   Video,
// // //   Cpu,
// // //   Database,
// // //   ChevronRight,
// // // } from "lucide-react"

// // // interface CourseCardProps {
// // //   title: string
// // //   description: string
// // //   duration: string
// // //   icon: string
// // // }

// // // function CourseCard({ title, description, duration, icon }: CourseCardProps) {
// // //   const getIcon = () => {
// // //     const iconProps = { className: "h-5 w-5 text-blue-600" }
// // //     switch (icon) {
// // //       case "code":
// // //         return <Code {...iconProps} />
// // //       case "briefcase":
// // //         return <Briefcase {...iconProps} />
// // //       case "wrench":
// // //         return <Wrench {...iconProps} />
// // //       case "zap":
// // //         return <Zap {...iconProps} />
// // //       case "building":
// // //         return <Building {...iconProps} />
// // //       case "dollar-sign":
// // //         return <DollarSign {...iconProps} />
// // //       case "trending-up":
// // //         return <TrendingUp {...iconProps} />
// // //       case "pen-tool":
// // //         return <PenTool {...iconProps} />
// // //       case "film":
// // //         return <Film {...iconProps} />
// // //       case "video":
// // //         return <Video {...iconProps} />
// // //       case "cpu":
// // //         return <Cpu {...iconProps} />
// // //       case "database":
// // //         return <Database {...iconProps} />
// // //       default:
// // //         return <Code {...iconProps} />
// // //     }
// // //   }

// // //   return (
// // //     <div className="card p-6 hover:shadow-lg transition-shadow">
// // //       <div className="flex items-center justify-between mb-4">
// // //         <div className="flex items-center gap-2">
// // //           <div className="rounded-full bg-blue-100 p-2">{getIcon()}</div>
// // //           <h3 className="text-xl font-bold text-blue-800">{title}</h3>
// // //         </div>
// // //         <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">{duration}</span>
// // //       </div>
// // //       <p className="text-gray-600 mb-4">{description}</p>
// // //       <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium">
// // //         Learn more <ChevronRight className="h-4 w-4" />
// // //       </button>
// // //     </div>
// // //   )
// // // }

// // // export default function Courses() {
// // //   const [activeTab, setActiveTab] = useState("engineering")

// // //   const tabs = [
// // //     { id: "engineering", label: "Engineering" },
// // //     { id: "management", label: "Management" },
// // //     { id: "computer-science", label: "Computer Science" },
// // //     { id: "arts", label: "Arts & Design" },
// // //   ]

// // //   const courseData = {
// // //     engineering: [
// // //       {
// // //         title: "Mechanical Engineering",
// // //         description: "Design and analyze mechanical systems with industry-standard tools and methodologies.",
// // //         duration: "4 Years",
// // //         icon: "wrench",
// // //       },
// // //       {
// // //         title: "Electrical Engineering",
// // //         description: "Study power systems, electronics, and control systems with hands-on laboratory experience.",
// // //         duration: "4 Years",
// // //         icon: "zap",
// // //       },
// // //       {
// // //         title: "Civil Engineering",
// // //         description: "Learn to design, construct and maintain physical and natural built environments.",
// // //         duration: "4 Years",
// // //         icon: "building",
// // //       },
// // //     ],
// // //     management: [
// // //       {
// // //         title: "Business Administration",
// // //         description: "Develop leadership skills and business acumen for today's competitive marketplace.",
// // //         duration: "3 Years",
// // //         icon: "briefcase",
// // //       },
// // //       {
// // //         title: "Finance Management",
// // //         description: "Master financial analysis, investment strategies, and corporate finance principles.",
// // //         duration: "3 Years",
// // //         icon: "dollar-sign",
// // //       },
// // //       {
// // //         title: "Marketing Management",
// // //         description: "Learn modern marketing strategies including digital marketing and brand management.",
// // //         duration: "3 Years",
// // //         icon: "trending-up",
// // //       },
// // //     ],
// // //     "computer-science": [
// // //       {
// // //         title: "Computer Science",
// // //         description: "Study algorithms, programming languages, and software development methodologies.",
// // //         duration: "4 Years",
// // //         icon: "code",
// // //       },
// // //       {
// // //         title: "Data Science",
// // //         description: "Learn to analyze and interpret complex data with machine learning and statistical methods.",
// // //         duration: "4 Years",
// // //         icon: "database",
// // //       },
// // //       {
// // //         title: "Artificial Intelligence",
// // //         description: "Explore neural networks, natural language processing, and computer vision applications.",
// // //         duration: "4 Years",
// // //         icon: "cpu",
// // //       },
// // //     ],
// // //     arts: [
// // //       {
// // //         title: "Graphic Design",
// // //         description: "Master visual communication and digital design tools for print and digital media.",
// // //         duration: "3 Years",
// // //         icon: "pen-tool",
// // //       },
// // //       {
// // //         title: "Digital Media Arts",
// // //         description: "Create compelling digital content across multiple platforms and mediums.",
// // //         duration: "3 Years",
// // //         icon: "film",
// // //       },
// // //       {
// // //         title: "Animation & VFX",
// // //         description: "Learn 2D and 3D animation techniques for entertainment and commercial applications.",
// // //         duration: "3 Years",
// // //         icon: "video",
// // //       },
// // //     ],
// // //   }

// // //   return (
// // //     <section id="courses" className="w-full py-12 md:py-24 lg:py-8 bg-blue-50">
// // //       <div className="container mx-auto px-4">
// // //         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
// // //           <div className="space-y-2">
// // //             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Academic Programs</div>
// // //             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Courses Offered</h2>
// // //             <p className="max-w-[900px] text-gray-600 md:text-xl">
// // //               Discover our comprehensive range of undergraduate and postgraduate programs designed to prepare you for
// // //               the careers of tomorrow.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="w-full max-w-4xl mx-auto">
// // //           <div className="flex flex-wrap justify-center gap-2 mb-8">
// // //             {tabs.map((tab) => (
// // //               <button
// // //                 key={tab.id}
// // //                 onClick={() => setActiveTab(tab.id)}
// // //                 className={`px-4 py-2 rounded-lg font-medium transition-colors ${
// // //                   activeTab === tab.id ? "bg-blue-600 text-white" : "bg-white text-blue-600 hover:bg-blue-100"
// // //                 }`}
// // //               >
// // //                 {tab.label}
// // //               </button>
// // //             ))}
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {courseData[activeTab as keyof typeof courseData].map((course, index) => (
// // //               <CourseCard key={index} {...course} />
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="flex justify-center mt-12">
// // //           <button className="btn btn-primary px-8 py-3">
// // //             View All Programs 
// // //             {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // "use client"
// // import { TrendingUp, Calculator, BarChart3, Database, ChevronRight, Award, Briefcase } from "lucide-react"

// // interface CourseCardProps {
// //   title: string
// //   description: string
// //   duration: string
// //   icon: string
// //   certifications: string[]
// //   highlights: string[]
// // }

// // function CourseCard({ title, description, duration, icon, certifications, highlights }: CourseCardProps) {
// //   const getIcon = () => {
// //     const iconProps = { className: "h-5 w-5 text-blue-600" }
// //     switch (icon) {
// //       case "trending-up":
// //         return <TrendingUp {...iconProps} />
// //       case "calculator":
// //         return <Calculator {...iconProps} />
// //       case "bar-chart":
// //         return <BarChart3 {...iconProps} />
// //       case "database":
// //         return <Database {...iconProps} />
// //       default:
// //         return <TrendingUp {...iconProps} />
// //     }
// //   }

// //   return (
// //     <div className="card p-6 hover:shadow-lg transition-shadow h-full">
// //       <div className="flex items-center justify-between mb-4">
// //         <div className="flex items-center gap-2">
// //           <div className="rounded-full bg-blue-100 p-2">{getIcon()}</div>
// //           <h3 className="text-xl font-bold text-blue-800">{title}</h3>
// //         </div>
// //         <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">{duration}</span>
// //       </div>
// //       <p className="text-gray-600 mb-4">{description}</p>

// //       <div className="mb-4">
// //         <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
// //           <Award className="h-4 w-4 text-blue-600" />
// //           Certifications
// //         </h4>
// //         <div className="flex flex-wrap gap-1">
// //           {certifications.map((cert, index) => (
// //             <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
// //               {cert}
// //             </span>
// //           ))}
// //         </div>
// //       </div>

// //       <div className="mb-4">
// //         <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
// //           <Briefcase className="h-4 w-4 text-blue-600" />
// //           Key Features
// //         </h4>
// //         <ul className="text-sm text-gray-600 space-y-1">
// //           {highlights.map((highlight, index) => (
// //             <li key={index} className="flex items-start gap-1">
// //               <span className="text-blue-600 mt-1">•</span>
// //               {highlight}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium mt-auto">
// //         Learn more <ChevronRight className="h-4 w-4" />
// //       </button>
// //     </div>
// //   )
// // }

// // export default function Courses() {
// //   const courses = [
// //     {
// //       title: "BCom + Digital Marketing + PGDM",
// //       description:
// //         "Complete industry-ready package with live projects, internships, and guaranteed placement assistance. Triple qualification advantage.",
// //       duration: "3 Years",
// //       icon: "trending-up",
// //       certifications: ["Google Ads", "Meta Marketing", "SEMRush"],
// //       highlights: [
// //         "Live projects with industry partners",
// //         "Guaranteed placement assistance",
// //         "Triple qualification advantage",
// //         "Digital marketing specialization",
// //       ],
// //     },
// //     {
// //       title: "BCom - ACCA Specialization",
// //       description:
// //         "Professional accounting pathway with FREE ACCA training up to L3 level, including complimentary books and certification.",
// //       duration: "3 Years",
// //       icon: "calculator",
// //       certifications: ["ACCA L1", "ACCA L2", "ACCA L3"],
// //       highlights: [
// //         "FREE ACCA training up to L3",
// //         "Complimentary books included",
// //         "Professional accounting pathway",
// //         "Global recognition",
// //       ],
// //     },
// //     {
// //       title: "BBA - Digital Marketing + PGDM",
// //       description:
// //         "Master modern marketing with Google, Meta, and SEMRush certifications. Direct industry connections and live project experience.",
// //       duration: "3 Years",
// //       icon: "bar-chart",
// //       certifications: ["Google", "Meta", "SEMRush"],
// //       highlights: [
// //         "Modern marketing strategies",
// //         "Direct industry connections",
// //         "Live project experience",
// //         "Digital transformation focus",
// //       ],
// //     },
// //     {
// //       title: "BCA - Data Analytics",
// //       description:
// //         "Business analytics specialization with Microsoft certifications. High-demand skills for the digital economy future.",
// //       duration: "3 Years",
// //       icon: "database",
// //       certifications: ["Microsoft Azure", "Power BI", "SQL Server"],
// //       highlights: [
// //         "Business analytics specialization",
// //         "Microsoft certifications",
// //         "High-demand digital skills",
// //         "Future-ready curriculum",
// //       ],
// //     },
// //   ]

// //   return (
// //     <section id="courses" className="w-full py-12 md:py-24 lg:py-20 bg-blue-50">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
// //           <div className="space-y-2">
// //             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
// //               Revolutionary Programs
// //             </div>
// //             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
// //               Programs That Build Careers
// //             </h2>
// //             <p className="max-w-[900px] text-gray-600 md:text-xl">
// //               Industry-ready programs designed with AI integration, live projects, and guaranteed placement assistance.
// //               Each program comes with globally recognized certifications and hands-on experience.
// //             </p>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
// //           {courses.map((course, index) => (
// //             <CourseCard key={index} {...course} />
// //           ))}
// //         </div>

// //         <div className="flex justify-center mt-12">
// //           <button className="btn btn-primary px-8 py-3">
// //             View All Programs 
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"
// import { TrendingUp, Calculator, BarChart3, Database, ChevronRight, Award, Briefcase } from "lucide-react"

// interface CourseCardProps {
//   title: string
//   description: string
//   duration: string
//   icon: string
//   certifications: string[]
//   highlights: string[]
// }

// function CourseCard({ title, description, duration, icon, certifications, highlights }: CourseCardProps) {
//   const getIcon = () => {
//     const iconProps = { className: "h-5 w-5 text-blue-600" }
//     switch (icon) {
//       case "trending-up":
//         return <TrendingUp {...iconProps} />
//       case "calculator":
//         return <Calculator {...iconProps} />
//       case "bar-chart":
//         return <BarChart3 {...iconProps} />
//       case "database":
//         return <Database {...iconProps} />
//       default:
//         return <TrendingUp {...iconProps} />
//     }
//   }

//   return (
//     <div className="card p-6 hover:shadow-lg transition-shadow h-full">
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center gap-2">
//           <div className="rounded-full bg-blue-100 p-2">{getIcon()}</div>
//           <h3 className="text-xl font-bold text-blue-800">{title}</h3>
//         </div>
//         <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">{duration}</span>
//       </div>
//       <p className="text-gray-600 mb-4">{description}</p>

//       <div className="mb-4">
//         <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
//           <Award className="h-4 w-4 text-blue-600" />
//           Certifications
//         </h4>
//         <div className="flex flex-wrap gap-1">
//           {certifications.map((cert, index) => (
//             <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
//               {cert}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="mb-4">
//         <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
//           <Briefcase className="h-4 w-4 text-blue-600" />
//           Key Features
//         </h4>
//         <ul className="text-sm text-gray-600 space-y-1">
//           {highlights.map((highlight, index) => (
//             <li key={index} className="flex items-start gap-1">
//               <span className="text-blue-600 mt-1">•</span>
//               {highlight}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium mt-auto">
//         Learn more <ChevronRight className="h-4 w-4" />
//       </button>
//     </div>
//   )
// }

// export default function Courses() {
//   const courses = [
//     {
//       title: "MBA - Marketing Management",
//       description: "Focuses on developing expertise in marketing strategies, consumer behavior, and brand management.",
//       duration: "2 Years",
//       icon: "trending-up",
//       certifications: ["Digital Marketing", "Brand Management", "Market Research"],
//       highlights: [
//         "Strategic marketing planning",
//         "Consumer insights and analytics",
//         "Brand building and communication",
//         "Digital marketing expertise",
//       ],
//     },
//     {
//       title: "MBA - Finance Management",
//       description: "Provides in-depth knowledge of financial analysis, investment management, and corporate finance.",
//       duration: "2 Years",
//       icon: "calculator",
//       certifications: ["Financial Modeling", "Investment Analysis", "Risk Management"],
//       highlights: [
//         "Financial statement analysis",
//         "Investment portfolio management",
//         "Corporate financial strategy",
//         "Risk assessment and mitigation",
//       ],
//     },
//     {
//       title: "MBA - Human Resource Management",
//       description: "Covers talent acquisition, employee relations, organizational development, and HR analytics.",
//       duration: "2 Years",
//       icon: "bar-chart",
//       certifications: ["HR Analytics", "Talent Management", "Employee Engagement"],
//       highlights: [
//         "Recruitment and selection strategies",
//         "Employee training and development",
//         "Performance management systems",
//         "HR data analysis and reporting",
//       ],
//     },
//     {
//       title: "MBA - Operations Management",
//       description:
//         "Deals with supply chain management, process optimization, and quality control in manufacturing and service industries.",
//       duration: "2 Years",
//       icon: "database",
//       certifications: ["Supply Chain Management", "Lean Manufacturing", "Six Sigma"],
//       highlights: [
//         "Inventory management techniques",
//         "Process improvement methodologies",
//         "Quality assurance and control",
//         "Logistics and distribution strategies",
//       ],
//     },
//     {
//       title: "MBA - Information Technology Management",
//       description:
//         "Focuses on aligning IT strategies with business goals, managing IT infrastructure, and leveraging technology for competitive advantage.",
//       duration: "2 Years",
//       icon: "database",
//       certifications: ["IT Governance", "Cybersecurity", "Data Analytics"],
//       highlights: [
//         "IT strategic planning",
//         "Cybersecurity risk management",
//         "Data-driven decision making",
//         "IT project management",
//       ],
//     },
//     {
//       title: "MBA - International Business",
//       description:
//         "Prepares students for global business operations, cross-cultural management, and international trade.",
//       duration: "2 Years",
//       icon: "database",
//       certifications: ["Global Marketing", "International Finance", "Cross-Cultural Communication"],
//       highlights: [
//         "International market entry strategies",
//         "Global financial management",
//         "Cross-cultural negotiation skills",
//         "International trade regulations",
//       ],
//     },
//   ]

//   return (
//     <section id="courses" className="w-full py-12 md:py-24 lg:py-8 bg-blue-50">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
//               MBA Specializations
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
//               Master of Business Administration Programs
//             </h2>
//             <p className="max-w-[900px] text-gray-600 md:text-xl">
//               Explore our MBA specializations designed to provide comprehensive management education and prepare you for
//               leadership roles. Each program is 2 years (4 semesters) and focuses on developing expertise in specific
//               areas of business administration. PGCET Code B090MB.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//           {courses.map((course, index) => (
//             <CourseCard key={index} {...course} />
//           ))}
//         </div>

//         <div className="flex justify-center mt-12">
//           <button className="btn btn-primary px-8 py-3">
//             View All Programs <ChevronRight className="ml-2 h-4 w-4" />
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"
import { TrendingUp, Calculator, BarChart3, Database, ChevronRight, Award, Briefcase, CheckCircle } from "lucide-react"

interface CourseCardProps {
  title: string
  description: string
  duration: string
  icon: string
  certifications: string[]
  highlights: string[]
}

function CourseCard({ title, description, duration, icon, certifications, highlights }: CourseCardProps) {
  const getIcon = () => {
    const iconProps = { className: "h-5 w-5 text-blue-600" }
    switch (icon) {
      case "trending-up":
        return <TrendingUp {...iconProps} />
      case "calculator":
        return <Calculator {...iconProps} />
      case "bar-chart":
        return <BarChart3 {...iconProps} />
      case "database":
        return <Database {...iconProps} />
      default:
        return <TrendingUp {...iconProps} />
    }
  }

  return (
    <div className="card p-6 hover:shadow-lg transition-shadow h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-blue-100 p-2">{getIcon()}</div>
          <h3 className="text-xl font-bold text-blue-800">{title}</h3>
        </div>
        <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">{duration}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
          <Award className="h-4 w-4 text-blue-600" />
          Industry Certifications
        </h4>
        <div className="flex flex-wrap gap-1">
          {certifications.map((cert, index) => (
            <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
          <Briefcase className="h-4 w-4 text-blue-600" />
          Key Features
        </h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-1">
              <CheckCircle className="h-3 w-3 text-green-600 mt-1 shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium mt-auto">
        Learn more <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}

export default function Courses() {
  const courses = [
    {
      title: "BCom + Digital Marketing + PGDM",
      description:
        "Complete industry-ready package with live projects, internships, and guaranteed placement assistance. Triple qualification advantage.",
      duration: "3 Years",
      icon: "trending-up",
      certifications: ["Google Ads", "Meta Marketing", "SEMRush"],
      highlights: [
        "Live projects with industry partners",
        "Guaranteed placement assistance",
        "Triple qualification advantage",
        "Digital marketing specialization",
      ],
    },
    {
      title: "BCom - ACCA Specialization",
      description:
        "Professional accounting pathway with FREE ACCA training up to L3 level, including complimentary books and certification.",
      duration: "3 Years",
      icon: "calculator",
      certifications: ["ACCA L1", "ACCA L2", "ACCA L3"],
      highlights: [
        "FREE ACCA training up to L3",
        "Complimentary books included",
        "Professional accounting pathway",
        "Global recognition",
      ],
    },
    {
      title: "BBA - Digital Marketing + PGDM",
      description:
        "Master modern marketing with Google, Meta, and SEMRush certifications. Direct industry connections and live project experience.",
      duration: "3 Years",
      icon: "bar-chart",
      certifications: ["Google", "Meta", "SEMRush"],
      highlights: [
        "Modern marketing strategies",
        "Direct industry connections",
        "Live project experience",
        "Digital transformation focus",
      ],
    },
    {
      title: "BCA - Data Analytics",
      description:
        "Business analytics specialization with Microsoft certifications. High-demand skills for the digital economy future.",
      duration: "3 Years",
      icon: "database",
      certifications: ["Microsoft Azure", "Power BI", "SQL Server"],
      highlights: [
        "Business analytics specialization",
        "Microsoft certifications",
        "High-demand digital skills",
        "Future-ready curriculum",
      ],
    },
  ]

  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-8 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
              Revolutionary Programs
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
              Programs That Build Careers
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Industry-ready programs designed with AI integration, live projects, and guaranteed placement assistance.
              Each program comes with globally recognized certifications and hands-on experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* Student Benefits Package */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Unmatched Student Benefits Package</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Complete onboarding kit"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold text-blue-800 mb-2">Complete Onboarding Kit</h4>
              <p className="text-gray-600 text-sm">
                Receive branded bag, water bottle, and laptop upon enrollment. Everything you need to start your journey
                professionally equipped.
              </p>
            </div>
            <div className="card p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Industry certifications"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold text-blue-800 mb-2">Industry Certifications</h4>
              <p className="text-gray-600 text-sm">
                Licensed certificates from Google, Meta, SEMRush, Microsoft, and ACCA. Boost your resume with globally
                recognized credentials.
              </p>
            </div>
            <div className="card p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80"
                alt="Placement guarantee"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-bold text-blue-800 mb-2">Placement Guarantee</h4>
              <p className="text-gray-600 text-sm">
                100% placement assistance with dedicated placement semester. Annual packages starting from ₹4L to ₹8L
                plus paid internships.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="btn btn-primary px-8 py-3">
            View All Programs <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
