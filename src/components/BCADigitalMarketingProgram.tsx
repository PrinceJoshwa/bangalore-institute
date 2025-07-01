// import { TrendingUp, Award, CheckCircle, Users, BookOpen, Smartphone } from "lucide-react"

// export default function BCADigitalMarketingProgram() {
//   const certifications = [
//     {
//       provider: "Google",
//       title: "Google Certifications",
//       description: "Become certified in Google Ads, Analytics, and Search Console",
//       courses: ["Google Ads", "Google Analytics", "Search Console", "YouTube Marketing"],
//     },
//     {
//       provider: "Meta",
//       title: "Meta Certifications",
//       description: "Master Facebook, Instagram, and WhatsApp marketing platforms",
//       courses: ["Facebook Ads", "Instagram Marketing", "WhatsApp Business", "Meta Analytics"],
//     },
//     {
//       provider: "AI Tools",
//       title: "AI Marketing Tools",
//       description: "Generative AI and Prompt Engineering for modern marketing",
//       courses: ["Generative AI", "Prompt Engineering", "AI Content Creation", "Marketing Automation"],
//     },
//     {
//       provider: "HubSpot",
//       title: "HubSpot Certification",
//       description: "Learn inbound marketing, sales, and service methodologies",
//       courses: ["Inbound Marketing", "Content Marketing", "Email Marketing", "CRM Management"],
//     },
//   ]

//   const marketingSkills = [
//     {
//       category: "Digital Strategy",
//       skills: ["SEO/SEM", "Content Strategy", "Social Media Planning", "Campaign Management"],
//     },
//     {
//       category: "Analytics & Data",
//       skills: ["Google Analytics", "Facebook Insights", "Conversion Tracking", "ROI Analysis"],
//     },
//     {
//       category: "Creative & Content",
//       skills: ["Graphic Design", "Video Marketing", "Copywriting", "Brand Storytelling"],
//     },
//     {
//       category: "AI & Automation",
//       skills: ["ChatGPT Marketing", "AI Content Tools", "Marketing Automation", "Chatbot Development"],
//     },
//   ]

//   const careerPaths = [
//     {
//       title: "Digital Marketing Specialist",
//       package: "₹4-7 LPA",
//       description: "Manage digital campaigns across multiple platforms and channels",
//       skills: ["Google Ads", "Social Media", "Content Marketing", "Analytics"],
//     },
//     {
//       title: "Social Media Manager",
//       package: "₹5-8 LPA",
//       description: "Create and execute social media strategies for brand growth",
//       skills: ["Instagram", "Facebook", "Content Creation", "Community Management"],
//     },
//     {
//       title: "Performance Marketing Manager",
//       package: "₹7-12 LPA",
//       description: "Optimize campaigns for maximum ROI and conversion rates",
//       skills: ["Paid Advertising", "Conversion Optimization", "Data Analysis", "A/B Testing"],
//     },
//   ]

//   return (
//     <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
//               Digital Marketing Specialization
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
//               BCA + Digital Marketing + PGCCA
//             </h2>
//             <p className="max-w-3xl text-gray-600 md:text-xl">
//               Digital marketing specialization with Google, Meta, and HubSpot certifications plus AI marketing tools and
//               prompt engineering for modern marketing success.
//             </p>
//           </div>
//         </div>

//         {/* Program Overview */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//           <div>
//             <img
//               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
//               alt="Digital marketing analytics dashboard"
//               className="w-full h-[400px] object-cover rounded-xl shadow-lg"
//             />
//           </div>
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl font-bold text-blue-800 mb-4">Digital Marketing Specialization</h3>
//               <p className="text-gray-600 mb-6">
//                 Master modern marketing with industry-leading certifications from Google, Meta, HubSpot, and AI
//                 marketing tools. Get hands-on experience with real campaigns and live projects.
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5 text-green-600" />
//                   <span className="text-gray-700">Google Ads & Analytics certification</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5 text-green-600" />
//                   <span className="text-gray-700">Meta marketing platforms mastery</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5 text-green-600" />
//                   <span className="text-gray-700">AI marketing tools training</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5 text-green-600" />
//                   <span className="text-gray-700">HubSpot inbound marketing</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Certifications */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Industry Certifications</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             {certifications.map((cert, index) => (
//               <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     <TrendingUp className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-blue-600 font-semibold">{cert.provider}</div>
//                     <h4 className="text-lg font-bold text-blue-800">{cert.title}</h4>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {cert.courses.map((course, idx) => (
//                     <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
//                       {course}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Marketing Skills */}
//         <div className="mb-16 bg-blue-50 rounded-xl p-8">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Core Marketing Skills</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {marketingSkills.map((category, index) => (
//               <div key={index} className="bg-white rounded-lg p-6 text-center">
//                 <h4 className="text-lg font-bold text-blue-800 mb-4">{category.category}</h4>
//                 <div className="space-y-2">
//                   {category.skills.map((skill, idx) => (
//                     <div key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm">
//                       {skill}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Career Opportunities */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Career Opportunities</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {careerPaths.map((career, index) => (
//               <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Smartphone className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <h4 className="text-lg font-bold text-blue-800 mb-2">{career.title}</h4>
//                 <div className="text-2xl font-bold text-green-600 mb-3">{career.package}</div>
//                 <p className="text-gray-600 text-sm mb-4">{career.description}</p>
//                 <div className="flex flex-wrap gap-1 justify-center">
//                   {career.skills.map((skill, idx) => (
//                     <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Program Benefits */}
//         <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
//           <h3 className="text-2xl font-bold mb-4">Why Choose Digital Marketing at BIMSR?</h3>
//           <div className="grid md:grid-cols-3 gap-6 mb-6">
//             <div>
//               <Award className="h-8 w-8 mx-auto mb-2" />
//               <h4 className="font-semibold mb-2">Industry Certifications</h4>
//               <p className="text-blue-100 text-sm">Google, Meta, HubSpot, and AI marketing certifications included</p>
//             </div>
//             <div>
//               <Users className="h-8 w-8 mx-auto mb-2" />
//               <h4 className="font-semibold mb-2">Live Campaign Experience</h4>
//               <p className="text-blue-100 text-sm">Work on real marketing campaigns with industry partners</p>
//             </div>
//             <div>
//               <BookOpen className="h-8 w-8 mx-auto mb-2" />
//               <h4 className="font-semibold mb-2">AI-Powered Marketing</h4>
//               <p className="text-blue-100 text-sm">Learn cutting-edge AI tools for modern marketing success</p>
//             </div>
//           </div>
//           <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
//             Apply for Digital Marketing Program
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

import {
  TrendingUp,
  Award,
  CheckCircle,
  Users,
  BookOpen,
  Smartphone,
  Target,
  Globe,
  BarChart3,
  Zap,
} from "lucide-react"

export default function BCADigitalMarketingProgram() {
  const certifications = [
    {
      provider: "Google",
      title: "Google Certifications",
      description: "Master Google Ads, Analytics, and Search Console with industry-recognized certifications",
      courses: ["Google Ads", "Google Analytics", "Search Console", "YouTube Marketing"],
      color: "from-blue-600 to-blue-800",
      icon: <Globe className="h-8 w-8" />,
    },
    {
      provider: "Meta",
      title: "Meta Certifications",
      description: "Become an expert in Facebook, Instagram, and WhatsApp marketing platforms",
      courses: ["Facebook Ads", "Instagram Marketing", "WhatsApp Business", "Meta Analytics"],
      color: "from-purple-600 to-purple-800",
      icon: <Users className="h-8 w-8" />,
    },
    {
      provider: "AI Tools",
      title: "AI Marketing Tools",
      description: "Leverage cutting-edge AI and prompt engineering for modern marketing success",
      courses: ["Generative AI", "Prompt Engineering", "AI Content Creation", "Marketing Automation"],
      color: "from-emerald-600 to-emerald-800",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      provider: "HubSpot",
      title: "HubSpot Certification",
      description: "Master inbound marketing, sales, and customer service methodologies",
      courses: ["Inbound Marketing", "Content Marketing", "Email Marketing", "CRM Management"],
      color: "from-orange-600 to-orange-800",
      icon: <Target className="h-8 w-8" />,
    },
  ]

  const marketingSkills = [
    {
      category: "Digital Strategy",
      skills: ["SEO/SEM", "Content Strategy", "Social Media Planning", "Campaign Management"],
      icon: <BarChart3 className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Analytics & Data",
      skills: ["Google Analytics", "Facebook Insights", "Conversion Tracking", "ROI Analysis"],
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Creative & Content",
      skills: ["Graphic Design", "Video Marketing", "Copywriting", "Brand Storytelling"],
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "AI & Automation",
      skills: ["ChatGPT Marketing", "AI Content Tools", "Marketing Automation", "Chatbot Development"],
      icon: <Zap className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
    },
  ]

  const careerPaths = [
    {
      title: "Digital Marketing Specialist",
      package: "₹4-7 LPA",
      description: "Manage comprehensive digital campaigns across multiple platforms and channels",
      skills: ["Google Ads", "Social Media", "Content Marketing", "Analytics"],
      growth: "Senior Specialist in 2-3 years",
    },
    {
      title: "Social Media Manager",
      package: "₹5-8 LPA",
      description: "Create and execute innovative social media strategies for brand growth",
      skills: ["Instagram", "Facebook", "Content Creation", "Community Management"],
      growth: "Social Media Director in 3-4 years",
    },
    {
      title: "Performance Marketing Manager",
      package: "₹7-12 LPA",
      description: "Optimize campaigns for maximum ROI and conversion rates using data-driven insights",
      skills: ["Paid Advertising", "Conversion Optimization", "Data Analysis", "A/B Testing"],
      growth: "Marketing Head in 4-5 years",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8">
            <Smartphone className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Digital Marketing Specialization</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              BCA + Digital Marketing
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">+ PGCCA</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Master the art of digital marketing with industry-leading certifications from Google, Meta, HubSpot, and AI
            marketing tools. Build a successful career in the fastest-growing field of technology.
          </p>
        </div>

        {/* Program Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
              alt="Digital marketing analytics dashboard"
              className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Transform Your Digital Marketing Career</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive program combines computer applications with cutting-edge digital marketing strategies.
                Gain hands-on experience with real campaigns, industry certifications, and AI-powered marketing tools.
              </p>
              <div className="space-y-4">
                {[
                  "Google Ads & Analytics certification included",
                  "Meta marketing platforms mastery",
                  "AI marketing tools and automation",
                  "HubSpot inbound marketing expertise",
                  "Live project experience with real clients",
                  "100% placement assistance guarantee",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Industry Certifications */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry-Leading Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get certified by the world's top technology companies and marketing platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-16"></div>

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                      >
                        {cert.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                          {cert.provider}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{cert.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.courses.map((course, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Marketing Skills */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Master Essential Marketing Skills</h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Develop expertise across all aspects of modern digital marketing
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {marketingSkills.map((category, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                    <div className="space-y-2">
                      {category.skills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Lucrative Career Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch your career in high-demand digital marketing roles with excellent growth potential
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {careerPaths.map((career, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-12 translate-x-12"></div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <Smartphone className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{career.title}</h3>
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                      {career.package}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{career.description}</p>
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {career.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                      <div className="text-sm font-semibold text-gray-700 mb-1">Career Growth</div>
                      <div className="text-sm text-gray-600">{career.growth}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Ready to Become a Digital Marketing Expert?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our comprehensive program and master the skills that top companies are looking for. Get industry
                certifications, hands-on experience, and guaranteed placement assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Apply for Digital Marketing Program
                </button>
                <button className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Download Curriculum
                </button>
              </div>
              <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <Award className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                  <div className="font-semibold">Industry Certifications</div>
                  <div className="text-sm text-gray-400">Google, Meta, HubSpot & AI</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                  <div className="font-semibold">Live Projects</div>
                  <div className="text-sm text-gray-400">Real campaigns & clients</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-400" />
                  <div className="font-semibold">Career Growth</div>
                  <div className="text-sm text-gray-400">100% placement assistance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
