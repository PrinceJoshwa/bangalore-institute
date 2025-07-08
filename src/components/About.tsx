
// "use client"

// import { useState } from "react"
// import { Award, BookOpen, Users, Target, Cpu, Building, Star, ArrowRight, Play } from "lucide-react"

// export default function About() {
//   const [activeTab, setActiveTab] = useState("mission")

//   const achievements = [
//     { number: "12+", label: "Years of Excellence", icon: <Award className="h-6 w-6" /> },
//     { number: "5000+", label: "Successful Graduates", icon: <Users className="h-6 w-6" /> },
//     { number: "500+", label: "Industry Partners", icon: <Building className="h-6 w-6" /> },
//     { number: "100%", label: "Placement Rate", icon: <Target className="h-6 w-6" /> },
//   ]

//   const features = [
//     {
//       icon: <Cpu className="h-8 w-8 text-blue-600" />,
//       title: "AI-Induced Smart Screens",
//       description:
//         "Revolutionary learning experience with artificial intelligence integration for personalized education.",
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       icon: <Award className="h-8 w-8 text-purple-600" />,
//       title: "International Standard Classes",
//       description: "World-class infrastructure with smart automated classrooms - first time ever in India.",
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: <BookOpen className="h-8 w-8 text-green-600" />,
//       title: "Business Creation Lab",
//       description: "Hands-on entrepreneurship training with real business incubation opportunities.",
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       icon: <Target className="h-8 w-8 text-red-600" />,
//       title: "Credit Transfer Program",
//       description: "Seamless transition for higher studies with transferable credits to global universities.",
//       gradient: "from-red-500 to-rose-500",
//     },
//     {
//       icon: <Users className="h-8 w-8 text-indigo-600" />,
//       title: "Industry Connect",
//       description: "Strong partnerships with leading corporations providing internships and placements.",
//       gradient: "from-indigo-500 to-blue-500",
//     },
//     {
//       icon: <Building className="h-8 w-8 text-yellow-600" />,
//       title: "Modern Solutions",
//       description: "AI-level education with cutting-edge curriculum for contemporary challenges.",
//       gradient: "from-yellow-500 to-amber-500",
//     },
//   ]

//   const tabContent = {
//     mission: {
//       title: "Our Mission",
//       content:
//         "To provide world-class AI-powered education that combines theoretical knowledge with practical application, preparing students to become ethical leaders and innovative problem-solvers in the digital economy.",
//       image:
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
//     },
//     vision: {
//       title: "Our Vision",
//       content:
//         "To be recognized as India's leading AI-powered education institute that shapes future business leaders through excellence in technology-driven education and industry collaboration.",
//       image:
//         "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//     },
//     values: {
//       title: "Our Values",
//       content:
//         "We believe in Sincerity, Hard Work, and Justice as our core values. These principles guide our approach to education, ensuring every student receives equal opportunities to excel and grow.",
//       image:
//         "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//     },
//   }

//   return (
//     <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
//             <Star className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">About BIMSR</span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               AI-Powered Learning
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Revolution
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             BIMSR is India's first AI-powered education institute, revolutionizing higher education with cutting-edge
//             technology, industry partnerships, and guaranteed placement assistance.
//           </p>
//         </div>

//         {/* Achievement Stats */}
//         <div className="grid md:grid-cols-4 gap-8 mb-20">
//           {achievements.map((achievement, index) => (
//             <div key={index} className="group">
//               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                   {achievement.icon}
//                 </div>
//                 <div className="text-center">
//                   <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                     {achievement.number}
//                   </div>
//                   <div className="text-gray-600 font-medium">{achievement.label}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Mission, Vision, Values Tabs */}
//         <div className="mb-20">
//           <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
//             {/* Tab Navigation */}
//             <div className="flex border-b border-gray-200">
//               {Object.keys(tabContent).map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`flex-1 py-6 px-8 text-lg font-semibold transition-all duration-300 ${
//                     activeTab === tab
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
//                       : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   {tabContent[tab as keyof typeof tabContent].title}
//                 </button>
//               ))}
//             </div>

//             {/* Tab Content */}
//             <div className="p-12">
//               <div className="grid lg:grid-cols-2 gap-12 items-center">
//                 <div className="space-y-6">
//                   <h3 className="text-3xl font-bold text-gray-900">
//                     {tabContent[activeTab as keyof typeof tabContent].title}
//                   </h3>
//                   <p className="text-lg text-gray-600 leading-relaxed">
//                     {tabContent[activeTab as keyof typeof tabContent].content}
//                   </p>
//                   <div className="flex space-x-4">
//                     <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
//                       Learn More
//                       <ArrowRight className="ml-2 h-5 w-5" />
//                     </button>
//                     <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center">
//                       <Play className="mr-2 h-5 w-5" />
//                       Watch Video
//                     </button>
//                   </div>
//                 </div>
//                 <div className="relative">
//                   <div className="relative overflow-hidden rounded-2xl shadow-2xl">
//                     <img
//                       src={tabContent[activeTab as keyof typeof tabContent].image || "/placeholder.svg"}
//                       alt={tabContent[activeTab as keyof typeof tabContent].title}
//                       className="w-full h-[400px] object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Key Features Grid */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h3>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Discover the innovative features that set BIMSR apart as India's premier AI-powered education institute.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
//                   <div
//                     className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                   >
//                     {feature.icon}
//                   </div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
//                   <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//                   <div className="mt-6">
//                     <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
//                       Learn More
//                       <ArrowRight className="ml-2 h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Accreditations & Recognition */}
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold mb-4">Prestigious Affiliations and Recognitions</h3>
//             <p className="text-blue-100 text-lg max-w-3xl mx-auto">
//               Our commitment to excellence is recognized by leading educational and industry bodies.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <Award className="h-10 w-10 text-white" />
//               </div>
//               <h4 className="text-xl font-bold mb-3">AICTE Approved</h4>
//               <p className="text-blue-100">
//                 AICTE New Delhi approved, affiliated, Karnataka Government recognized, and ISO 9001:2015 certified
//                 institution.
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <BookOpen className="h-10 w-10 text-white" />
//               </div>
//               <h4 className="text-xl font-bold mb-3">Academic Excellence</h4>
//               <p className="text-blue-100">
//                 Affiliated to BNU Bangalore, ISTE Lifetime Member, and Innovation Cell under MHRD for cutting-edge
//                 education.
//               </p>
//             </div>
//             <div className="text-center">
//               <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <Target className="h-10 w-10 text-white" />
//               </div>
//               <h4 className="text-xl font-bold mb-3">Industry Recognition</h4>
//               <p className="text-blue-100">
//                 Nominated for INDIA 5000 Best MSME Award 2018, currently pursuing NAAC, NBA, and NIRF accreditations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { Award, BookOpen, Users, Target, Cpu, Building, Star, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function About() {
  const [activeTab, setActiveTab] = useState("mission")

  const achievements = [
    { number: "12+", label: "Years of Excellence", icon: <Award className="h-6 w-6" /> },
    { number: "5000+", label: "Successful Graduates", icon: <Users className="h-6 w-6" /> },
    { number: "500+", label: "Industry Partners", icon: <Building className="h-6 w-6" /> },
    { number: "100%", label: "Placement Rate", icon: <Target className="h-6 w-6" /> },
  ]

  const features = [
    {
      icon: <Cpu className="h-8 w-8 text-blue-600" />,
      title: "AI-Induced Smart Screens",
      description:
        "Revolutionary learning experience with artificial intelligence integration for personalized education.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "International Standard Classes",
      description: "World-class infrastructure with smart automated classrooms - first time ever in India.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      title: "Business Creation Lab",
      description: "Hands-on entrepreneurship training with real business incubation opportunities.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Credit Transfer Program",
      description: "Seamless transition for higher studies with transferable credits to global universities.",
      gradient: "from-red-500 to-rose-500",
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Industry Connect",
      description: "Strong partnerships with leading corporations providing internships and placements.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Building className="h-8 w-8 text-yellow-600" />,
      title: "Modern Solutions",
      description: "AI-level education with cutting-edge curriculum for contemporary challenges.",
      gradient: "from-yellow-500 to-amber-500",
    },
  ]

  const tabContent = {
    mission: {
      title: "Our Mission",
      content:
        "To provide world-class AI-powered education that combines theoretical knowledge with practical application, preparing students to become ethical leaders and innovative problem-solvers in the digital economy. We are committed to fostering excellence through Sincerity, Hard Work, and Justice - our core values that guide every aspect of our educational approach.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    },
    vision: {
      title: "Our Vision",
      content:
        "To be recognized as India's leading AI-powered education institute that shapes future business leaders through excellence in technology-driven education and industry collaboration. We envision creating a global network of successful professionals who embody our values of integrity, innovation, and social responsibility.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    values: {
      title: "Our Values",
      content:
        "We believe in Sincerity, Hard Work, and Justice as our core values. These principles guide our approach to education, ensuring every student receives equal opportunities to excel and grow. Our commitment to these values creates an environment where academic excellence meets ethical leadership, preparing students for meaningful careers and responsible citizenship.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
            <Star className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">About BIMSR</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              AI-Powered Learning
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Revolution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            BIMSR is India's first AI-powered education institute, revolutionizing higher education with cutting-edge
            technology, industry partnerships, and guaranteed placement assistance.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  {achievement.icon}
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission, Vision, Values Tabs */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-6 px-8 text-lg font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {tabContent[tab as keyof typeof tabContent].title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {tabContent[activeTab as keyof typeof tabContent].title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {tabContent[activeTab as keyof typeof tabContent].content}
                  </p>
                </div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={tabContent[activeTab as keyof typeof tabContent].image || "/placeholder.svg"}
                      alt={tabContent[activeTab as keyof typeof tabContent].title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the innovative features that set BIMSR apart as India's premier AI-powered education institute.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group h-full">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
                  <div className="mt-6">
                    <Link to="/programs" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations & Recognition */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Prestigious Affiliations and Recognitions</h3>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Our commitment to excellence is recognized by leading educational and industry bodies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">AICTE Approved</h4>
              <p className="text-blue-100">
                AICTE New Delhi approved, affiliated, Karnataka Government recognized, and ISO 9001:2015 certified
                institution.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Academic Excellence</h4>
              <p className="text-blue-100">
                Affiliated to BNU Bangalore, ISTE Lifetime Member, and Innovation Cell under MHRD for cutting-edge
                education.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Industry Recognition</h4>
              <p className="text-blue-100">
                Nominated for INDIA 5000 Best MSME Award 2018, currently pursuing NAAC, NBA, and NIRF accreditations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
