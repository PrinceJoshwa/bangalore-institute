// "use client"
// import { Link } from "react-router-dom"
// import { ChevronRight, Award, Laptop, BookOpen, GraduationCap, CheckCircle } from "lucide-react"

// interface ProgramCardProps {
//   title: string
//   description: string
//   duration: string
//   totalFee: string
//   highlights: string[]
//   href: string
// }

// function ProgramCard({ title, description, duration, totalFee, highlights, href }: ProgramCardProps) {
//   return (
//     <div className="card p-6 hover:shadow-lg transition-shadow h-full">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-xl font-bold text-blue-800">{title}</h3>
//         <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">{duration}</span>
//       </div>
//       <p className="text-gray-600 mb-4">{description}</p>

//       <div className="mb-4">
//         <div className="text-2xl font-bold text-green-600 mb-2">{totalFee}</div>
//         <div className="text-sm text-gray-500">Total Program Fee</div>
//       </div>

//       <div className="mb-6">
//         <h4 className="font-semibold text-gray-800 mb-2">Key Highlights</h4>
//         <ul className="text-sm text-gray-600 space-y-1">
//           {highlights.slice(0, 3).map((highlight, index) => (
//             <li key={index} className="flex items-start gap-1">
//               <CheckCircle className="h-3 w-3 text-green-600 mt-1 shrink-0" />
//               {highlight}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <Link to={href} className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium mt-auto">
//         Learn more <ChevronRight className="h-4 w-4" />
//       </Link>
//     </div>
//   )
// }

// export default function ProgramsOverview() {
//   const programs = [
//     {
//       title: "BCA + Full Stack + PGCCA",
//       description: "Complete web development program with AI integration and industry projects.",
//       duration: "4 Years",
//       totalFee: "₹3,95,000",
//       highlights: [
//         "Brand-new i3 laptops included",
//         "100% scholarship for 4th year",
//         "Full Stack certification",
//         "AI integration training",
//       ],
//       href: "/programs/bca-full-stack",
//     },
//     {
//       title: "BCA + Data Analytics + PGCCA",
//       description: "Advanced analytics with predictive modeling and data science expertise.",
//       duration: "4 Years",
//       totalFee: "₹3,95,000",
//       highlights: [
//         "120-150 hours specialized training",
//         "Python & SQL certification",
//         "Predictive modeling",
//         "Data visualization tools",
//       ],
//       href: "/programs/bca-data-analytics",
//     },
//     {
//       title: "BCA + Digital Marketing + PGCCA",
//       description: "Digital marketing with Google, Meta, and AI marketing certifications.",
//       duration: "4 Years",
//       totalFee: "₹3,95,000",
//       highlights: ["Google & Meta certifications", "AI marketing tools", "Social media mastery", "Content strategy"],
//       href: "/programs/bca-digital-marketing",
//     },
//     {
//       title: "BBA + Digital Marketing + PGCBA",
//       description: "Business management with digital marketing specialization.",
//       duration: "4 Years",
//       totalFee: "₹3,65,000",
//       highlights: [
//         "Business leadership skills",
//         "Digital transformation",
//         "Marketing analytics",
//         "Entrepreneurship training",
//       ],
//       href: "/programs/bba-digital-marketing",
//     },
//     {
//       title: "BCOM + ACCA + PGCFM",
//       description: "Professional accounting with global ACCA certification.",
//       duration: "4 Years",
//       totalFee: "₹4,25,000",
//       highlights: [
//         "ACCA partnership with Zell Education",
//         "Global accounting recognition",
//         "Financial management expertise",
//         "Merit scholarships up to 25%",
//       ],
//       href: "/programs/bcom-acca",
//     },
//   ]

//   const inclusiveFeatures = [
//     {
//       icon: <Laptop className="h-8 w-8 text-blue-600" />,
//       title: "Technology Package",
//       description: "Brand-new i3 laptops with dedicated student dashboard",
//     },
//     {
//       icon: <Award className="h-8 w-8 text-blue-600" />,
//       title: "Industry Certifications",
//       description: "Professional certifications included in program fee",
//     },
//     {
//       icon: <BookOpen className="h-8 w-8 text-blue-600" />,
//       title: "Learning Materials",
//       description: "Books, study materials, and uniforms included",
//     },
//     {
//       icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
//       title: "100% 4th Year Scholarship",
//       description: "Complete funding for final year with good grades",
//     },
//   ]

//   return (
//     <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
//               Integrated Programs 2025-26
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
//               Bachelor's + Professional Certification Programs
//             </h2>
//             <p className="max-w-[900px] text-gray-600 md:text-xl">
//               Unique integrated programs combining bachelor's degrees with professional certifications for guaranteed
//               career success.
//             </p>
//           </div>
//         </div>

//         {/* What's Included Section */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">What's Included in Your Fees</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {inclusiveFeatures.map((feature, index) => (
//               <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   {feature.icon}
//                 </div>
//                 <h4 className="text-lg font-bold text-blue-800 mb-2">{feature.title}</h4>
//                 <p className="text-gray-600 text-sm">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Programs Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
//           {programs.map((program, index) => (
//             <ProgramCard key={index} {...program} />
//           ))}
//         </div>

//         <div className="flex justify-center">
//           <Link to="/fee-calculator" className="btn btn-primary px-8 py-3">
//             Calculate Your Investment <ChevronRight className="ml-2 h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { ChevronRight, Award, Laptop, BookOpen, GraduationCap, CheckCircle, Star, Filter } from "lucide-react"

export default function ProgramsOverview() {
  const [activeFilter, setActiveFilter] = useState("all")

  const programs = [
    {
      id: "bca-fullstack",
      title: "BCA + Full Stack + PGCCA",
      category: "technology",
      description: "Complete web development program with AI integration and industry projects.",
      duration: "3 Years",
      totalFee: "₹2.5L",
      highlights: [
        "Brand-new i3 laptops included",
        "100% scholarship for 4th year",
        "Full Stack certification",
        "AI integration training",
        "Live project experience",
        "Industry mentorship",
      ],
      gradient: "from-blue-600 to-indigo-600",
      popular: true,
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "bca-analytics",
      title: "BCA + Data Analytics + PGCCA",
      category: "analytics",
      description: "Advanced analytics with predictive modeling and data science expertise.",
      duration: "3 Years",
      totalFee: "₹2.5L",
      highlights: [
        "120-150 hours specialized training",
        "Python & SQL certification",
        "Predictive modeling",
        "Data visualization tools",
        "Machine learning projects",
        "Industry datasets",
      ],
      gradient: "from-purple-600 to-pink-600",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "bca-digital",
      title: "BCA + Digital Marketing + PGCCA",
      category: "marketing",
      description: "Digital marketing with Google, Meta, and AI marketing certifications.",
      duration: "3 Years",
      totalFee: "₹2.5L",
      highlights: [
        "Google & Meta certifications",
        "AI marketing tools",
        "Social media mastery",
        "Content strategy",
        "Campaign management",
        "Analytics expertise",
      ],
      gradient: "from-green-600 to-teal-600",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "bba-digital",
      title: "BBA + Digital Marketing + PGCBA",
      category: "business",
      description: "Business management with digital marketing specialization.",
      duration: "3 Years",
      totalFee: "₹2.3L",
      highlights: [
        "Business leadership skills",
        "Digital transformation",
        "Marketing analytics",
        "Entrepreneurship training",
        "Strategic planning",
        "Team management",
      ],
      gradient: "from-red-600 to-rose-600",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "bcom-acca",
      title: "BCOM + ACCA + PGCFM",
      category: "finance",
      description: "Professional accounting with global ACCA certification.",
      duration: "3 Years",
      totalFee: "₹2.8L",
      highlights: [
        "ACCA partnership with Zell Education",
        "Global accounting recognition",
        "Financial management expertise",
        "Merit scholarships up to 25%",
        "Professional certification",
        "International opportunities",
      ],
      gradient: "from-indigo-600 to-blue-600",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ]

  const filters = [
    { id: "all", name: "All Programs", count: programs.length },
    { id: "technology", name: "Technology", count: programs.filter((p) => p.category === "technology").length },
    { id: "analytics", name: "Analytics", count: programs.filter((p) => p.category === "analytics").length },
    { id: "marketing", name: "Marketing", count: programs.filter((p) => p.category === "marketing").length },
    { id: "business", name: "Business", count: programs.filter((p) => p.category === "business").length },
    { id: "finance", name: "Finance", count: programs.filter((p) => p.category === "finance").length },
  ]

  const inclusiveFeatures = [
    {
      icon: <Laptop className="h-8 w-8 text-blue-600" />,
      title: "Technology Package",
      description: "Brand-new i3 laptops with dedicated student dashboard",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Industry Certifications",
      description: "Professional certifications included in program fee",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: "Learning Materials",
      description: "Books, study materials, and uniforms included",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-red-600" />,
      title: "100% 4th Year Scholarship",
      description: "Complete funding for final year with good grades",
      gradient: "from-red-500 to-rose-500",
    },
  ]

  const filteredPrograms = activeFilter === "all" ? programs : programs.filter((p) => p.category === activeFilter)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
            <Star className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Integrated Programs 2024-25</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Bachelor's + Professional
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certification Programs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Unique integrated programs combining bachelor's degrees with professional certifications for guaranteed
            career success and industry readiness.
          </p>
        </div>

        {/* What's Included Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What's Included in Your Investment</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inclusiveFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <Filter className="h-4 w-4" />
                  <span>{filter.name}</span>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{filter.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredPrograms.map((program, index) => (
            <div key={program.id} className="group relative">
              {program.popular && (
                <div className="absolute -top-3 left-6 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full">
                {/* Program Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div
                      className={`px-3 py-1 bg-gradient-to-r ${program.gradient} text-white rounded-full text-sm font-semibold`}
                    >
                      {program.duration}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-2 capitalize">{program.category}</div>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight mb-3">{program.title}</h3>
                      <p className="text-gray-600">{program.description}</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        {program.totalFee}
                      </div>
                      <div className="text-sm text-gray-500">Total Program Fee</div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800">Key Highlights</h4>
                      <div className="space-y-1">
                        {program.highlights.slice(0, 3).map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      className={`w-full bg-gradient-to-r ${program.gradient} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}
                    >
                      Learn More
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Calculate your educational investment with our transparent fee structure and flexible payment options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Calculate Your Investment
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
