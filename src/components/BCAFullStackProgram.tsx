// import {
//   Code,
//   Database,
//   Globe,
//   Smartphone,
//   Award,
//   Users,
//   BookOpen,
//   Briefcase,
//   TrendingUp,
//   CheckCircle,
//   Star,
// } from "lucide-react"

// export default function BCAFullStackProgram() {
//   const techStack = [
//     { name: "Frontend", technologies: ["React", "Angular", "Vue.js", "HTML5", "CSS3", "JavaScript"] },
//     { name: "Backend", technologies: ["Node.js", "Python", "Java", "PHP", "Express.js", "Django"] },
//     { name: "Database", technologies: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase"] },
//     { name: "Cloud & DevOps", technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Git", "CI/CD"] },
//   ]

//   const careerPaths = [
//     { title: "Full Stack Developer", package: "₹6-12 LPA", companies: "TCS, Infosys, Wipro" },
//     { title: "Frontend Developer", package: "₹5-10 LPA", companies: "Accenture, HCL, Cognizant" },
//     { title: "Backend Developer", package: "₹7-14 LPA", companies: "IBM, Samsung, Bosch" },
//     { title: "DevOps Engineer", package: "₹8-15 LPA", companies: "Amazon, Microsoft, Google" },
//   ]

//   const programHighlights = [
//     {
//       icon: <Award className="h-6 w-6" />,
//       title: "Industry Certifications",
//       desc: "AWS, Google Cloud, Microsoft Azure",
//     },
//     { icon: <Users className="h-6 w-6" />, title: "Expert Faculty", desc: "15+ years industry experience" },
//     { icon: <Briefcase className="h-6 w-6" />, title: "Live Projects", desc: "Real-world application development" },
//     { icon: <TrendingUp className="h-6 w-6" />, title: "100% Placement", desc: "Guaranteed job assistance" },
//   ]

//   const curriculum = [
//     {
//       semester: "Semester 1-2",
//       subjects: ["Programming Fundamentals", "Data Structures", "Web Technologies", "Database Management"],
//       focus: "Foundation Building",
//     },
//     {
//       semester: "Semester 3-4",
//       subjects: ["Advanced JavaScript", "React.js", "Node.js", "API Development"],
//       focus: "Core Development",
//     },
//     {
//       semester: "Semester 5-6",
//       subjects: ["Cloud Computing", "DevOps", "Mobile Development", "Capstone Project"],
//       focus: "Specialization",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative container mx-auto px-4 py-20">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 text-sm font-medium">
//                   <Star className="h-4 w-4 text-yellow-400" />
//                   Most Popular Program
//                 </div>
//                 <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
//                   BCA + Full Stack Development
//                   <span className="block text-2xl lg:text-3xl text-blue-300 font-normal mt-2">+ PGCCA</span>
//                 </h1>
//                 <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
//                   Master modern web development with our comprehensive 3-year program combining Bachelor of Computer
//                   Applications with advanced Full Stack Development and Post Graduate Certificate in Computer
//                   Applications.
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-4">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
//                   <div className="text-2xl font-bold">3 Years</div>
//                   <div className="text-sm text-blue-200">Duration</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
//                   <div className="text-2xl font-bold">₹2.5L</div>
//                   <div className="text-sm text-blue-200">Total Fees</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
//                   <div className="text-2xl font-bold">100%</div>
//                   <div className="text-sm text-blue-200">Placement</div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap gap-4">
//                 <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
//                   Apply Now
//                 </button>
//                 <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300">
//                   Download Brochure
//                 </button>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
//                 <img
//                   src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//                   alt="Full Stack Development Workspace"
//                   className="w-full h-[400px] object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
//                         <Code className="h-6 w-6 text-white" />
//                       </div>
//                       <div>
//                         <div className="font-semibold text-gray-900">Modern Development Environment</div>
//                         <div className="text-sm text-gray-600">Industry-standard tools and technologies</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Program Highlights */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose This Program?</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our comprehensive curriculum is designed to make you industry-ready with cutting-edge skills and
//               real-world experience.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {programHighlights.map((highlight, index) => (
//               <div key={index} className="group">
//                 <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//                   <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
//                     {highlight.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
//                   <p className="text-gray-600">{highlight.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Technology Stack */}
//       <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Master Modern Technologies</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Learn the most in-demand technologies used by top companies worldwide.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {techStack.map((stack, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="text-center mb-6">
//                   <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
//                     {index === 0 && <Globe className="h-8 w-8" />}
//                     {index === 1 && <Database className="h-8 w-8" />}
//                     {index === 2 && <Database className="h-8 w-8" />}
//                     {index === 3 && <Smartphone className="h-8 w-8" />}
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">{stack.name}</h3>
//                 </div>
//                 <div className="space-y-2">
//                   {stack.technologies.map((tech, techIndex) => (
//                     <div key={techIndex} className="flex items-center gap-2">
//                       <CheckCircle className="h-4 w-4 text-green-500" />
//                       <span className="text-gray-700">{tech}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Curriculum */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Structured learning path from fundamentals to advanced full-stack development.
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             {curriculum.map((sem, index) => (
//               <div key={index} className="relative mb-12 last:mb-0">
//                 <div className="flex items-start gap-8">
//                   <div className="flex-shrink-0">
//                     <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
//                       {index + 1}
//                     </div>
//                   </div>
//                   <div className="flex-1 bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg border border-slate-200">
//                     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
//                       <h3 className="text-2xl font-bold text-gray-900">{sem.semester}</h3>
//                       <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
//                         {sem.focus}
//                       </span>
//                     </div>
//                     <div className="grid md:grid-cols-2 gap-4">
//                       {sem.subjects.map((subject, subIndex) => (
//                         <div
//                           key={subIndex}
//                           className="flex items-center gap-3 bg-white rounded-lg p-4 border border-slate-200"
//                         >
//                           <BookOpen className="h-5 w-5 text-blue-600" />
//                           <span className="text-gray-700 font-medium">{subject}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 {index < curriculum.length - 1 && (
//                   <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-blue-600 to-indigo-600"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Career Opportunities */}
//       <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Career Opportunities</h2>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//               Launch your career with top companies offering competitive packages.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {careerPaths.map((career, index) => (
//               <div
//                 key={index}
//                 className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
//               >
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center mx-auto mb-6">
//                     <Briefcase className="h-8 w-8 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3">{career.title}</h3>
//                   <div className="text-2xl font-bold text-green-400 mb-2">{career.package}</div>
//                   <p className="text-blue-200 text-sm">{career.companies}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
//         <div className="container mx-auto px-4 text-center">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
//             <p className="text-xl text-blue-100 mb-8">
//               Join thousands of successful graduates who have launched their careers with our comprehensive program.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
//                 Apply Now - Limited Seats
//               </button>
//               <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
//                 Schedule Campus Visit
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Award,
  Users,
  BookOpen,
  Briefcase,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
} from "lucide-react"

export default function BCAFullStackProgram() {
  const [activeTab, setActiveTab] = useState("overview")

  const techStack = [
    {
      name: "Frontend",
      technologies: ["React", "Angular", "Vue.js", "HTML5", "CSS3", "JavaScript"],
      icon: <Globe className="h-8 w-8" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Backend",
      technologies: ["Node.js", "Python", "Java", "PHP", "Express.js", "Django"],
      icon: <Database className="h-8 w-8" />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Database",
      technologies: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase"],
      icon: <Database className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Cloud & DevOps",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Git", "CI/CD"],
      icon: <Smartphone className="h-8 w-8" />,
      gradient: "from-red-500 to-rose-500",
    },
  ]

  const careerPaths = [
    {
      title: "Full Stack Developer",
      package: "₹6-12 LPA",
      companies: "TCS, Infosys, Wipro",
      description: "Build end-to-end web applications with modern frameworks",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      title: "Frontend Developer",
      package: "₹5-10 LPA",
      companies: "Accenture, HCL, Cognizant",
      description: "Create stunning user interfaces and experiences",
      skills: ["React", "Vue.js", "CSS3", "JavaScript"],
    },
    {
      title: "Backend Developer",
      package: "₹7-14 LPA",
      companies: "IBM, Samsung, Bosch",
      description: "Develop robust server-side applications and APIs",
      skills: ["Python", "Java", "MySQL", "Docker"],
    },
    {
      title: "DevOps Engineer",
      package: "₹8-15 LPA",
      companies: "Amazon, Microsoft, Google",
      description: "Manage deployment pipelines and cloud infrastructure",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
  ]

  const programHighlights = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Certifications",
      desc: "AWS, Google Cloud, Microsoft Azure",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Faculty",
      desc: "15+ years industry experience",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Live Projects",
      desc: "Real-world application development",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "100% Placement",
      desc: "Guaranteed job assistance",
      gradient: "from-red-500 to-rose-500",
    },
  ]

  const curriculum = [
    {
      semester: "Semester 1-2",
      subjects: ["Programming Fundamentals", "Data Structures", "Web Technologies", "Database Management"],
      focus: "Foundation Building",
      projects: ["Personal Portfolio", "Basic Calculator", "Simple Database"],
    },
    {
      semester: "Semester 3-4",
      subjects: ["Advanced JavaScript", "React.js", "Node.js", "API Development"],
      focus: "Core Development",
      projects: ["E-commerce Website", "Social Media App", "REST API"],
    },
    {
      semester: "Semester 5-6",
      subjects: ["Cloud Computing", "DevOps", "Mobile Development", "Capstone Project"],
      focus: "Specialization",
      projects: ["Full Stack Application", "Mobile App", "Cloud Deployment"],
    },
  ]

  const learningPath = [
    {
      phase: "Foundation",
      duration: "Months 1-8",
      description: "Master programming fundamentals and web basics",
      skills: ["HTML/CSS", "JavaScript", "Python", "Git"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      phase: "Development",
      duration: "Months 9-20",
      description: "Build full-stack applications with modern frameworks",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      color: "from-green-500 to-emerald-500",
    },
    {
      phase: "Specialization",
      duration: "Months 21-36",
      description: "Advanced topics and industry-ready projects",
      skills: ["AWS", "Docker", "Microservices", "Testing"],
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
            <Star className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Full Stack Development</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              BCA + Full Stack
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Development + PGCCA
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Master modern web development with our comprehensive 3-year program combining Bachelor of Computer
            Applications with advanced Full Stack Development and Post Graduate Certificate in Computer Applications.
          </p>
        </div>

        {/* Hero Image & Stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Full Stack Development Workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">3 Years</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">₹2.5L</div>
                    <div className="text-sm text-gray-600">Total Fees</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600">Placement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Full Stack Development?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Full Stack Development is one of the most in-demand skills in the tech industry. Our comprehensive
                program ensures you master both frontend and backend technologies, making you a versatile developer
                ready for any challenge.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Industry-standard curriculum with latest technologies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Hands-on projects with real-world applications</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Expert mentorship from industry professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Guaranteed placement assistance with top companies</span>
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

        {/* Program Highlights */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Program Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programHighlights.map((highlight, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${highlight.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    {highlight.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h4>
                  <p className="text-gray-600">{highlight.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            <div className="flex space-x-2">
              {[
                { id: "overview", name: "Overview" },
                { id: "curriculum", name: "Curriculum" },
                { id: "technologies", name: "Technologies" },
                { id: "careers", name: "Career Paths" },
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
          <div className="space-y-16">
            {/* Learning Path */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Your Learning Journey</h3>
              <div className="space-y-8">
                {learningPath.map((phase, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start gap-8">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                        >
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                          <div>
                            <h4 className="text-2xl font-bold text-gray-900">{phase.phase}</h4>
                            <p className="text-blue-600 font-semibold">{phase.duration}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-6">{phase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {index < learningPath.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "curriculum" && (
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Comprehensive Curriculum</h3>
            <div className="space-y-8">
              {curriculum.map((sem, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <h4 className="text-2xl font-bold text-gray-900">{sem.semester}</h4>
                    <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {sem.focus}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-4">Core Subjects</h5>
                      <div className="space-y-2">
                        {sem.subjects.map((subject, subIndex) => (
                          <div key={subIndex} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                            <BookOpen className="h-5 w-5 text-blue-600" />
                            <span className="text-gray-700 font-medium">{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-4">Practical Projects</h5>
                      <div className="space-y-2">
                        {sem.projects.map((project, projIndex) => (
                          <div key={projIndex} className="flex items-center gap-3 bg-green-50 rounded-lg p-3">
                            <Code className="h-5 w-5 text-green-600" />
                            <span className="text-gray-700 font-medium">{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "technologies" && (
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Master Modern Technologies</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techStack.map((stack, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="text-center mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${stack.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                      >
                        {stack.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">{stack.name}</h4>
                    </div>
                    <div className="space-y-2">
                      {stack.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-gray-700">{tech}</span>
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
                        <Briefcase className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{career.title}</h4>
                        <div className="text-2xl font-bold text-green-600 mb-2">{career.package}</div>
                        <p className="text-sm text-gray-500">{career.companies}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{career.description}</p>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-800">Key Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
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

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Full Stack Journey?</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of successful graduates who have launched their careers with our comprehensive Full Stack
                Development program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Apply Now - Limited Seats
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                  Schedule Campus Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
