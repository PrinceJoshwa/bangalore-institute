// // import { Database, BarChart3, CheckCircle, Award, Users, BookOpen } from "lucide-react"

// // export default function BCADataAnalyticsProgram() {
// //   const careerTrack = [
// //     {
// //       semester: "Sem 1",
// //       title: "Data Literacy",
// //       description: "Build foundations in data science and statistical thinking",
// //       topics: ["Statistics Fundamentals", "Excel Mastery", "Data Visualization Basics", "SQL Introduction"],
// //     },
// //     {
// //       semester: "Sem 2",
// //       title: "Data Wrangling",
// //       description: "Learn data cleaning and preparation techniques",
// //       topics: ["Python for Data Science", "Data Cleaning", "Pandas & NumPy", "Data Import/Export"],
// //     },
// //     {
// //       semester: "Sem 3-4",
// //       title: "Predictive Modeling",
// //       description: "Build statistical models and machine learning algorithms",
// //       topics: ["Machine Learning", "Statistical Modeling", "Regression Analysis", "Classification Algorithms"],
// //     },
// //     {
// //       semester: "Sem 5-6",
// //       title: "Advanced Analytics",
// //       description: "Master complex analytical techniques and business intelligence",
// //       topics: ["Deep Learning", "Time Series Analysis", "Business Intelligence", "Advanced Visualization"],
// //     },
// //   ]

// //   const tools = [
// //     {
// //       category: "Programming",
// //       tools: ["Python", "R", "SQL", "JavaScript"],
// //     },
// //     {
// //       category: "Analytics",
// //       tools: ["Tableau", "Power BI", "Excel", "SPSS"],
// //     },
// //     {
// //       category: "Databases",
// //       tools: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
// //     },
// //     {
// //       category: "Cloud & Big Data",
// //       tools: ["AWS", "Azure", "Hadoop", "Spark"],
// //     },
// //   ]

// //   const careerPaths = [
// //     {
// //       title: "Data Analyst",
// //       package: "₹4-7 LPA",
// //       description: "Analyze data to provide business insights and recommendations",
// //       skills: ["SQL", "Excel", "Tableau", "Statistics"],
// //     },
// //     {
// //       title: "Business Intelligence Analyst",
// //       package: "₹6-10 LPA",
// //       description: "Create dashboards and reports for business decision making",
// //       skills: ["Power BI", "Data Modeling", "ETL", "Business Acumen"],
// //     },
// //     {
// //       title: "Data Scientist",
// //       package: "₹8-15 LPA",
// //       description: "Build predictive models and machine learning solutions",
// //       skills: ["Python", "Machine Learning", "Statistics", "Deep Learning"],
// //     },
// //   ]

// //   return (
// //     <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
// //           <div className="space-y-2">
// //             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
// //               Data Analytics Specialization
// //             </div>
// //             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
// //               BCA + Data Analytics + PGCCA
// //             </h2>
// //             <p className="max-w-3xl text-gray-600 md:text-xl">
// //               Advanced analytics program with predictive modeling, data wrangling, and comprehensive analytical
// //               techniques for data-driven careers.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Program Overview */}
// //         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
// //           <div>
// //             <img
// //               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
// //               alt="Data analytics workspace with charts and graphs"
// //               className="w-full h-[400px] object-cover rounded-xl shadow-lg"
// //             />
// //           </div>
// //           <div className="space-y-6">
// //             <div>
// //               <h3 className="text-2xl font-bold text-blue-800 mb-4">Data Analyst Career Track</h3>
// //               <p className="text-gray-600 mb-6">
// //                 Each certification program includes 120-150 hours of specialized training designed to make you
// //                 industry-ready with hands-on experience in real-world data projects.
// //               </p>
// //               <div className="space-y-4">
// //                 <div className="flex items-center gap-3">
// //                   <CheckCircle className="h-5 w-5 text-green-600" />
// //                   <span className="text-gray-700">Advanced Analytics in Sem 5-6</span>
// //                 </div>
// //                 <div className="flex items-center gap-3">
// //                   <CheckCircle className="h-5 w-5 text-green-600" />
// //                   <span className="text-gray-700">Predictive Modeling in Sem 3-4</span>
// //                 </div>
// //                 <div className="flex items-center gap-3">
// //                   <CheckCircle className="h-5 w-5 text-green-600" />
// //                   <span className="text-gray-700">Data Wrangling in Sem 2</span>
// //                 </div>
// //                 <div className="flex items-center gap-3">
// //                   <CheckCircle className="h-5 w-5 text-green-600" />
// //                   <span className="text-gray-700">Data Literacy Foundations in Sem 1</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Learning Path */}
// //         <div className="mb-16">
// //           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Data Analytics Learning Path</h3>
// //           <div className="grid md:grid-cols-2 gap-6">
// //             {careerTrack.map((track, index) => (
// //               <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
// //                 <div className="flex items-center gap-3 mb-4">
// //                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
// //                     <Database className="h-6 w-6 text-blue-600" />
// //                   </div>
// //                   <div>
// //                     <div className="text-sm text-blue-600 font-semibold">{track.semester}</div>
// //                     <h4 className="text-lg font-bold text-blue-800">{track.title}</h4>
// //                   </div>
// //                 </div>
// //                 <p className="text-gray-600 text-sm mb-4">{track.description}</p>
// //                 <div className="flex flex-wrap gap-2">
// //                   {track.topics.map((topic, idx) => (
// //                     <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
// //                       {topic}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Tools & Technologies */}
// //         <div className="mb-16 bg-gray-50 rounded-xl p-8">
// //           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Essential Tools & Technologies</h3>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {tools.map((category, index) => (
// //               <div key={index} className="bg-white rounded-lg p-6 text-center">
// //                 <h4 className="text-lg font-bold text-blue-800 mb-4">{category.category}</h4>
// //                 <div className="space-y-2">
// //                   {category.tools.map((tool, idx) => (
// //                     <div key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm">
// //                       {tool}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Career Opportunities */}
// //         <div className="mb-16">
// //           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Career Opportunities</h3>
// //           <div className="grid md:grid-cols-3 gap-6">
// //             {careerPaths.map((career, index) => (
// //               <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
// //                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
// //                   <BarChart3 className="h-8 w-8 text-blue-600" />
// //                 </div>
// //                 <h4 className="text-lg font-bold text-blue-800 mb-2">{career.title}</h4>
// //                 <div className="text-2xl font-bold text-green-600 mb-3">{career.package}</div>
// //                 <p className="text-gray-600 text-sm mb-4">{career.description}</p>
// //                 <div className="flex flex-wrap gap-1 justify-center">
// //                   {career.skills.map((skill, idx) => (
// //                     <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
// //                       {skill}
// //                     </span>
// //                   ))}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Program Benefits */}
// //         <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
// //           <h3 className="text-2xl font-bold mb-4">Why Choose Data Analytics at BIMSR?</h3>
// //           <div className="grid md:grid-cols-3 gap-6 mb-6">
// //             <div>
// //               <Award className="h-8 w-8 mx-auto mb-2" />
// //               <h4 className="font-semibold mb-2">Industry-Ready Curriculum</h4>
// //               <p className="text-blue-100 text-sm">120-150 hours of specialized training with real-world projects</p>
// //             </div>
// //             <div>
// //               <Users className="h-8 w-8 mx-auto mb-2" />
// //               <h4 className="font-semibold mb-2">Expert Mentorship</h4>
// //               <p className="text-blue-100 text-sm">Learn from industry professionals and data science experts</p>
// //             </div>
// //             <div>
// //               <BookOpen className="h-8 w-8 mx-auto mb-2" />
// //               <h4 className="font-semibold mb-2">Hands-On Learning</h4>
// //               <p className="text-blue-100 text-sm">Work on real datasets and build a professional portfolio</p>
// //             </div>
// //           </div>
// //           <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
// //             Apply for Data Analytics Program
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import {
//   Database,
//   BarChart3,
//   CheckCircle,
//   Award,
//   Users,
//   BookOpen,
//   Star,
//   ArrowRight,
//   Play,
//   TrendingUp,
// } from "lucide-react"

// export default function BCADataAnalyticsProgram() {
//   const [activeTab, setActiveTab] = useState("overview")

//   const careerTrack = [
//     {
//       semester: "Sem 1",
//       title: "Data Literacy",
//       description: "Build foundations in data science and statistical thinking",
//       topics: ["Statistics Fundamentals", "Excel Mastery", "Data Visualization Basics", "SQL Introduction"],
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       semester: "Sem 2",
//       title: "Data Wrangling",
//       description: "Learn data cleaning and preparation techniques",
//       topics: ["Python for Data Science", "Data Cleaning", "Pandas & NumPy", "Data Import/Export"],
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       semester: "Sem 3-4",
//       title: "Predictive Modeling",
//       description: "Build statistical models and machine learning algorithms",
//       topics: ["Machine Learning", "Statistical Modeling", "Regression Analysis", "Classification Algorithms"],
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       semester: "Sem 5-6",
//       title: "Advanced Analytics",
//       description: "Master complex analytical techniques and business intelligence",
//       topics: ["Deep Learning", "Time Series Analysis", "Business Intelligence", "Advanced Visualization"],
//       gradient: "from-red-500 to-rose-500",
//     },
//   ]

//   const tools = [
//     {
//       category: "Programming",
//       tools: ["Python", "R", "SQL", "JavaScript"],
//       icon: <Database className="h-8 w-8" />,
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       category: "Analytics",
//       tools: ["Tableau", "Power BI", "Excel", "SPSS"],
//       icon: <BarChart3 className="h-8 w-8" />,
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       category: "Databases",
//       tools: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
//       icon: <Database className="h-8 w-8" />,
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       category: "Cloud & Big Data",
//       tools: ["AWS", "Azure", "Hadoop", "Spark"],
//       icon: <TrendingUp className="h-8 w-8" />,
//       gradient: "from-red-500 to-rose-500",
//     },
//   ]

//   const careerPaths = [
//     {
//       title: "Data Analyst",
//       package: "₹4-7 LPA",
//       description: "Analyze data to provide business insights and recommendations",
//       skills: ["SQL", "Excel", "Tableau", "Statistics"],
//       companies: ["TCS", "Infosys", "Wipro", "Accenture"],
//     },
//     {
//       title: "Business Intelligence Analyst",
//       package: "₹6-10 LPA",
//       description: "Create dashboards and reports for business decision making",
//       skills: ["Power BI", "Data Modeling", "ETL", "Business Acumen"],
//       companies: ["IBM", "Cognizant", "HCL", "Capgemini"],
//     },
//     {
//       title: "Data Scientist",
//       package: "₹8-15 LPA",
//       description: "Build predictive models and machine learning solutions",
//       skills: ["Python", "Machine Learning", "Statistics", "Deep Learning"],
//       companies: ["Amazon", "Microsoft", "Google", "Flipkart"],
//     },
//     {
//       title: "Machine Learning Engineer",
//       package: "₹10-18 LPA",
//       description: "Deploy and maintain ML models in production environments",
//       skills: ["Python", "MLOps", "Cloud Platforms", "Docker"],
//       companies: ["Netflix", "Uber", "Swiggy", "Paytm"],
//     },
//   ]

//   const industryApplications = [
//     {
//       industry: "Healthcare",
//       applications: ["Patient Analytics", "Drug Discovery", "Medical Imaging", "Epidemic Modeling"],
//       icon: "🏥",
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       industry: "Finance",
//       applications: ["Risk Assessment", "Fraud Detection", "Algorithmic Trading", "Credit Scoring"],
//       icon: "💰",
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       industry: "E-commerce",
//       applications: ["Recommendation Systems", "Price Optimization", "Customer Segmentation", "Inventory Management"],
//       icon: "🛒",
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       industry: "Technology",
//       applications: ["User Behavior Analysis", "A/B Testing", "Performance Optimization", "Predictive Maintenance"],
//       icon: "💻",
//       color: "from-red-500 to-rose-500",
//     },
//   ]

//   return (
//     <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
//             <Star className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">Data Analytics Specialization</span>
//           </div>
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               BCA + Data Analytics
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">+ PGCCA</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Advanced analytics program with predictive modeling, data wrangling, and comprehensive analytical techniques
//             for data-driven careers in the digital economy.
//           </p>
//         </div>

//         {/* Hero Section */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
//           <div className="relative">
//             <div className="relative overflow-hidden rounded-3xl shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//                 alt="Data analytics workspace with charts and graphs"
//                 className="w-full h-[500px] object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

//               {/* Floating Stats */}
//               <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   <div>
//                     <div className="text-2xl font-bold text-blue-600">120-150</div>
//                     <div className="text-sm text-gray-600">Training Hours</div>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-purple-600">₹8-15L</div>
//                     <div className="text-sm text-gray-600">Avg Package</div>
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-green-600">95%</div>
//                     <div className="text-sm text-gray-600">Placement Rate</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-8">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Analyst Career Track</h2>
//               <p className="text-lg text-gray-600 leading-relaxed mb-6">
//                 Each certification program includes 120-150 hours of specialized training designed to make you
//                 industry-ready with hands-on experience in real-world data projects and cutting-edge analytics tools.
//               </p>

//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5 text-green-600" />
//                   <span className="text-gray-700">Advanced Analytics in Sem 5-6</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5 text-green-600" />
//                   <span className="text-gray-700">Predictive Modeling in Sem 3-4</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5 text-green-600" />
//                   <span className="text-gray-700">Data Wrangling in Sem 2</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5 text-green-600" />
//                   <span className="text-gray-700">Data Literacy Foundations in Sem 1</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex space-x-4">
//               <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center">
//                 Apply Now
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </button>
//               <button className="border-2 border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center">
//                 <Play className="mr-2 h-5 w-5" />
//                 Watch Demo
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
//             <div className="flex space-x-2">
//               {[
//                 { id: "overview", name: "Learning Path" },
//                 { id: "tools", name: "Tools & Tech" },
//                 { id: "careers", name: "Career Paths" },
//                 { id: "applications", name: "Industry Applications" },
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                     activeTab === tab.id
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                       : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   {tab.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Tab Content */}
//         {activeTab === "overview" && (
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Data Analytics Learning Path</h3>
//             <div className="grid md:grid-cols-2 gap-8">
//               {careerTrack.map((track, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                     <div className="flex items-center gap-4 mb-6">
//                       <div
//                         className={`w-16 h-16 bg-gradient-to-r ${track.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                       >
//                         <Database className="h-8 w-8" />
//                       </div>
//                       <div>
//                         <div className="text-sm text-blue-600 font-semibold">{track.semester}</div>
//                         <h4 className="text-xl font-bold text-gray-900">{track.title}</h4>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 mb-6">{track.description}</p>
//                     <div className="space-y-2">
//                       <h5 className="font-semibold text-gray-800">Key Topics</h5>
//                       <div className="flex flex-wrap gap-2">
//                         {track.topics.map((topic, idx) => (
//                           <span
//                             key={idx}
//                             className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
//                           >
//                             {topic}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "tools" && (
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Essential Tools & Technologies</h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {tools.map((category, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
//                     <div
//                       className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                     >
//                       {category.icon}
//                     </div>
//                     <h4 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h4>
//                     <div className="space-y-3">
//                       {category.tools.map((tool, idx) => (
//                         <div key={idx} className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium">
//                           {tool}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "careers" && (
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Career Opportunities</h3>
//             <div className="grid md:grid-cols-2 gap-8">
//               {careerPaths.map((career, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                     <div className="flex items-start gap-4 mb-6">
//                       <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                         <BarChart3 className="h-8 w-8" />
//                       </div>
//                       <div className="flex-1">
//                         <h4 className="text-xl font-bold text-gray-900 mb-2">{career.title}</h4>
//                         <div className="text-2xl font-bold text-green-600 mb-2">{career.package}</div>
//                       </div>
//                     </div>

//                     <p className="text-gray-600 mb-4">{career.description}</p>

//                     <div className="space-y-4">
//                       <div>
//                         <h5 className="font-semibold text-gray-800 mb-2">Key Skills</h5>
//                         <div className="flex flex-wrap gap-2">
//                           {career.skills.map((skill, idx) => (
//                             <span
//                               key={idx}
//                               className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       <div>
//                         <h5 className="font-semibold text-gray-800 mb-2">Top Hiring Companies</h5>
//                         <div className="flex flex-wrap gap-2">
//                           {career.companies.map((company, idx) => (
//                             <span
//                               key={idx}
//                               className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
//                             >
//                               {company}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "applications" && (
//           <div>
//             <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Industry Applications</h3>
//             <div className="grid md:grid-cols-2 gap-8">
//               {industryApplications.map((industry, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                     <div className="flex items-center gap-4 mb-6">
//                       <div
//                         className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                       >
//                         {industry.icon}
//                       </div>
//                       <h4 className="text-2xl font-bold text-gray-900">{industry.industry}</h4>
//                     </div>

//                     <div className="space-y-3">
//                       {industry.applications.map((app, idx) => (
//                         <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
//                           <CheckCircle className="h-5 w-5 text-green-600" />
//                           <span className="text-gray-700 font-medium">{app}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* CTA Section */}
//         <div className="text-center mt-20">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//             <div className="relative z-10">
//               <h3 className="text-3xl font-bold mb-4">Why Choose Data Analytics at BIMSR?</h3>
//               <div className="grid md:grid-cols-3 gap-8 mb-8">
//                 <div className="text-center">
//                   <Award className="h-12 w-12 mx-auto mb-4" />
//                   <h4 className="font-semibold mb-2">Industry-Ready Curriculum</h4>
//                   <p className="text-blue-100 text-sm">
//                     120-150 hours of specialized training with real-world projects
//                   </p>
//                 </div>
//                 <div className="text-center">
//                   <Users className="h-12 w-12 mx-auto mb-4" />
//                   <h4 className="font-semibold mb-2">Expert Mentorship</h4>
//                   <p className="text-blue-100 text-sm">Learn from industry professionals and data science experts</p>
//                 </div>
//                 <div className="text-center">
//                   <BookOpen className="h-12 w-12 mx-auto mb-4" />
//                   <h4 className="font-semibold mb-2">Hands-On Learning</h4>
//                   <p className="text-blue-100 text-sm">Work on real datasets and build a professional portfolio</p>
//                 </div>
//               </div>
//               <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto">
//                 Apply for Data Analytics Program
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import {
  Database,
  BarChart3,
  CheckCircle,
  Award,
  Users,
  BookOpen,
  Star,
  ArrowRight,
  Play,
  TrendingUp,
} from "lucide-react"

export default function BCADataAnalyticsProgram() {
  const [activeTab, setActiveTab] = useState("overview")

  const careerTrack = [
    {
      semester: "Sem 1",
      title: "Data Literacy",
      description: "Build foundations in data science and statistical thinking",
      topics: ["Statistics Fundamentals", "Excel Mastery", "Data Visualization Basics", "SQL Introduction"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      semester: "Sem 2",
      title: "Data Wrangling",
      description: "Learn data cleaning and preparation techniques",
      topics: ["Python for Data Science", "Data Cleaning", "Pandas & NumPy", "Data Import/Export"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      semester: "Sem 3-4",
      title: "Predictive Modeling",
      description: "Build statistical models and machine learning algorithms",
      topics: ["Machine Learning", "Statistical Modeling", "Regression Analysis", "Classification Algorithms"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      semester: "Sem 5-6",
      title: "Advanced Analytics",
      description: "Master complex analytical techniques and business intelligence",
      topics: ["Deep Learning", "Time Series Analysis", "Business Intelligence", "Advanced Visualization"],
      gradient: "from-red-500 to-rose-500",
    },
  ]

  const tools = [
    {
      category: "Programming",
      tools: ["Python", "R", "SQL", "JavaScript"],
      icon: <Database className="h-8 w-8" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      category: "Analytics",
      tools: ["Tableau", "Power BI", "Excel", "SPSS"],
      icon: <BarChart3 className="h-8 w-8" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      category: "Databases",
      tools: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      icon: <Database className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      category: "Cloud & Big Data",
      tools: ["AWS", "Azure", "Hadoop", "Spark"],
      icon: <TrendingUp className="h-8 w-8" />,
      gradient: "from-red-500 to-rose-500",
    },
  ]

  const careerPaths = [
    {
      title: "Data Analyst",
      package: "₹4-7 LPA",
      description: "Analyze data to provide business insights and recommendations",
      skills: ["SQL", "Excel", "Tableau", "Statistics"],
      companies: ["TCS", "Infosys", "Wipro", "Accenture"],
    },
    {
      title: "Business Intelligence Analyst",
      package: "₹6-10 LPA",
      description: "Create dashboards and reports for business decision making",
      skills: ["Power BI", "Data Modeling", "ETL", "Business Acumen"],
      companies: ["IBM", "Cognizant", "HCL", "Capgemini"],
    },
    {
      title: "Data Scientist",
      package: "₹8-15 LPA",
      description: "Build predictive models and machine learning solutions",
      skills: ["Python", "Machine Learning", "Statistics", "Deep Learning"],
      companies: ["Amazon", "Microsoft", "Google", "Flipkart"],
    },
    {
      title: "Machine Learning Engineer",
      package: "₹10-18 LPA",
      description: "Deploy and maintain ML models in production environments",
      skills: ["Python", "MLOps", "Cloud Platforms", "Docker"],
      companies: ["Netflix", "Uber", "Swiggy", "Paytm"],
    },
  ]

  const industryApplications = [
    {
      industry: "Healthcare",
      applications: ["Patient Analytics", "Drug Discovery", "Medical Imaging", "Epidemic Modeling"],
      icon: "🏥",
      color: "from-green-500 to-emerald-500",
    },
    {
      industry: "Finance",
      applications: ["Risk Assessment", "Fraud Detection", "Algorithmic Trading", "Credit Scoring"],
      icon: "💰",
      color: "from-blue-500 to-cyan-500",
    },
    {
      industry: "E-commerce",
      applications: ["Recommendation Systems", "Price Optimization", "Customer Segmentation", "Inventory Management"],
      icon: "🛒",
      color: "from-purple-500 to-pink-500",
    },
    {
      industry: "Technology",
      applications: ["User Behavior Analysis", "A/B Testing", "Performance Optimization", "Predictive Maintenance"],
      icon: "💻",
      color: "from-red-500 to-rose-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
            <Star className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Data Analytics Specialization</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              BCA + Data Analytics
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">+ PGCCA</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Advanced analytics program with predictive modeling, data wrangling, and comprehensive analytical techniques
            for data-driven careers in the digital economy.
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Data analytics workspace with charts and graphs"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">120-150</div>
                    <div className="text-sm text-gray-600">Training Hours</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">₹8-15L</div>
                    <div className="text-sm text-gray-600">Avg Package</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-sm text-gray-600">Placement Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Analyst Career Track</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Each certification program includes 120-150 hours of specialized training designed to make you
                industry-ready with hands-on experience in real-world data projects and cutting-edge analytics tools.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Advanced Analytics in Sem 5-6</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Predictive Modeling in Sem 3-4</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Data Wrangling in Sem 2</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Data Literacy Foundations in Sem 1</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            <div className="flex space-x-2">
              {[
                { id: "overview", name: "Learning Path" },
                { id: "tools", name: "Tools & Tech" },
                { id: "careers", name: "Career Paths" },
                { id: "applications", name: "Industry Applications" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Data Analytics Learning Path</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {careerTrack.map((track, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${track.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                      >
                        <Database className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="text-sm text-blue-600 font-semibold">{track.semester}</div>
                        <h4 className="text-xl font-bold text-gray-900">{track.title}</h4>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{track.description}</p>
                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-800">Key Topics</h5>
                      <div className="flex flex-wrap gap-2">
                        {track.topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tools" && (
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Essential Tools & Technologies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((category, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                    >
                      {category.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h4>
                    <div className="space-y-3">
                      {category.tools.map((tool, idx) => (
                        <div key={idx} className="bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "careers" && (
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Career Opportunities</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {careerPaths.map((career, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <BarChart3 className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{career.title}</h4>
                        <div className="text-2xl font-bold text-green-600 mb-2">{career.package}</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{career.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Key Skills</h5>
                        <div className="flex flex-wrap gap-2">
                          {career.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Top Hiring Companies</h5>
                        <div className="flex flex-wrap gap-2">
                          {career.companies.map((company, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "applications" && (
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Industry Applications</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {industryApplications.map((industry, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                      >
                        {industry.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">{industry.industry}</h4>
                    </div>

                    <div className="space-y-3">
                      {industry.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-gray-700 font-medium">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Why Choose Data Analytics at BIMSR?</h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Award className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Industry-Ready Curriculum</h4>
                  <p className="text-blue-100 text-sm">
                    120-150 hours of specialized training with real-world projects
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Expert Mentorship</h4>
                  <p className="text-blue-100 text-sm">Learn from industry professionals and data science experts</p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Hands-On Learning</h4>
                  <p className="text-blue-100 text-sm">Work on real datasets and build a professional portfolio</p>
                </div>
              </div>
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto">
                Apply for Data Analytics Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
