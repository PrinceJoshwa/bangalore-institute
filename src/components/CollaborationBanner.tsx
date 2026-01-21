// "use client"

// import { Handshake, GraduationCap, Sparkles, Cpu, BookOpen, ArrowUpRight, Star, TrendingUp } from "lucide-react"

// export default function CollaborationBanner() {
//   const partners = [
//     // ROW 1: CollegePedia (Powered By)
//     {
//       id: "collegepedia",
//       name: "CollegePedia",
//       role: "Powered By", // Updated to Powered By
//       desc: "Strategic Education Guidance & Counseling",
//       icon: Handshake,
//       logo: "./collegepedia.jpg",
//       color: "text-emerald-400",
//       bg: "bg-emerald-500/10",
//       border: "border-white/10 hover:border-emerald-500/50",
//       glow: "hover:shadow-emerald-500/20",
//       highlight: false,
//       link: "#",
//       gridClass: "md:col-span-2"
//     },
//     // ROW 2: Academic Partners (Side by Side)
//     {
//       id: "zell",
//       name: "Zell Education",
//       role: "Academic Partner",
//       desc: "Finance & Accounts Excellence",
//       icon: GraduationCap,
//       logo: "/Zell.png",
//       color: "text-yellow-400",
//       bg: "bg-yellow-500/10",
//       border: "border-white/10 hover:border-yellow-500/50",
//       glow: "hover:shadow-yellow-500/20",
//       highlight: false,
//       link: "#",
//       gridClass: "md:col-span-1"
//     },
//     {
//       id: "Enormayu",
//       name: "Enormayu",
//       role: "Academic Partner",
//       desc: "Digital & Tech Education",
//       icon: BookOpen,
//       logo: "/enormayu.png",
//       color: "text-purple-400",
//       bg: "bg-purple-500/10",
//       border: "border-white/10 hover:border-purple-500/50",
//       glow: "hover:shadow-purple-500/20",
//       highlight: false,
//       link: "#",
//       gridClass: "md:col-span-1"
//     },
//     // ROW 3: Skill Partner (Spans Full Width - Highlighted)
//     {
//       id: "ibm",
//       name: "IBM",
//       role: "Skill Partner",
//       desc: "Advanced Technical Skills & Certification",
//       icon: Cpu,
//       logo: "/IBM_logo.svg.png",
//       color: "text-blue-400",
//       bg: "bg-blue-600/20",
//       // Distinct Highlighting Styles
//       border: "border-blue-500/60 shadow-[0_0_25px_rgba(59,130,246,0.3)]", 
//       glow: "shadow-blue-500/40",
//       highlight: true,
//       link: "#",
//       gridClass: "md:col-span-2" 
//     }
//   ]

//   return (
//     <section className="relative py-16 overflow-hidden bg-[#0B0F19]">
//       {/* Background Noise & Gradients */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] animate-pulse"></div>
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-4 max-w-4xl">
//         {/* Section Header */}
//         <div className="text-center mb-10">
//           <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-3 backdrop-blur-md">
//             <Sparkles className="h-3 w-3 text-yellow-400" />
//             <span className="text-gray-300 text-xs font-medium">Powering Your Future</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
//             Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Collaborations</span>
//           </h2>

//           {/* TRAINING & PLACEMENT BANNER */}
//           <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-full px-6 py-2">
//             <TrendingUp className="h-5 w-5 text-orange-400" />
//             <span className="text-orange-200 font-semibold text-sm tracking-wide">
//               Including Specialized <span className="text-white">Training & Placement</span> Support
//             </span>
//           </div>
//         </div>

//         {/* 1-2-1 Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {partners.map((partner) => {
//             const Icon = partner.icon
//             return (
//               <a 
//                 href={partner.link}
//                 key={partner.id}
//                 className={`
//                   group relative flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-300
//                   ${partner.gridClass}
//                   ${partner.highlight 
//                     ? 'bg-[#131b2e] z-10' 
//                     : 'bg-white/5 hover:bg-white/10' 
//                   }
//                   border ${partner.border}
//                   ${!partner.highlight && 'hover:-translate-y-1 hover:shadow-xl'}
//                 `}
//               >
//                 {/* Premium Badge for IBM */}
//                 {partner.highlight && (
//                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
//                     <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-4 py-1 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1 border border-blue-400/50">
//                       <Star className="w-3 h-3 fill-white" />
//                       Premium Partner
//                     </div>
//                   </div>
//                 )}

//                 {/* LOGO AREA */}
//                 <div className={`
//                   w-full flex items-center justify-center mb-3 rounded-xl p-3
//                   ${partner.highlight ? 'h-20 bg-blue-900/10' : 'h-20 bg-white/5'}
//                 `}>
//                   {partner.logo ? (
//                     <img 
//                       src={partner.logo} 
//                       alt={partner.name} 
//                       className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
//                     />
//                   ) : (
//                     <Icon className={`h-10 w-10 ${partner.color}`} />
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="max-w-md mx-auto">
//                   <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${partner.color} opacity-90`}>
//                     {partner.role}
//                   </div>
//                   <h3 className={`text-lg font-bold mb-1 ${partner.highlight ? 'text-white' : 'text-gray-100'}`}>
//                     {partner.name}
//                   </h3>
//                   <p className={`text-xs leading-relaxed ${partner.highlight ? 'text-gray-300' : 'text-gray-400'}`}>
//                     {partner.desc}
//                   </p>
//                 </div>

//                 {/* Hover Action */}
//                 {!partner.highlight && (
//                   <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
//                     <ArrowUpRight className="h-4 w-4 text-gray-300" />
//                   </div>
//                 )}
//               </a>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { Handshake, GraduationCap, Sparkles, Cpu, BookOpen, ArrowUpRight, Star, TrendingUp, CheckCircle2, ShieldCheck, Globe } from "lucide-react"

export default function CollaborationBanner() {
  
  // 1. Standard Partners (Grid)
  const gridPartners = [
    {
      id: "collegepedia",
      name: "CollegePedia",
      role: "Powered By",
      desc: "Strategic Education Guidance & Counseling",
      icon: Handshake,
      logo: "./collegepedia.jpg",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-white/10 hover:border-emerald-500/50",
      glow: "hover:shadow-emerald-500/20",
      link: "https://collegepedia.in",
      gridClass: "md:col-span-2"
    },
    {
      id: "zell",
      name: "Zell Education",
      role: "Academic Partner",
      desc: "Finance & Accounts Excellence",
      icon: GraduationCap,
      logo: "/Zell.png",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-white/10 hover:border-yellow-500/50",
      glow: "hover:shadow-yellow-500/20",
      link: "#",
      gridClass: "md:col-span-1"
    },
    {
      id: "Enormayu",
      name: "Enormayu",
      role: "Academic Partner",
      desc: "Digital & Tech Education",
      icon: BookOpen,
      logo: "/enormayu.png",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-white/10 hover:border-purple-500/50",
      glow: "hover:shadow-purple-500/20",
      link: "#",
      gridClass: "md:col-span-1"
    }
  ]

  // 2. IBM Content Data
  const ibmFeatures = [
    { icon: Globe, text: "Global Industry Recognition" },
    { icon: ShieldCheck, text: "Professional Certification" },
    { icon: Cpu, text: "Advanced Tech Training" },
  ]

  return (
    <>
      {/* =========================================
          SECTION 1: STRATEGIC COLLABORATIONS
      ========================================= */}
      <section className="relative py-20 overflow-hidden bg-[#0B0F19]">
        {/* Background Noise & Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[600px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-4 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-yellow-400" />
              <span className="text-gray-300 text-xs font-medium">Powering Your Future</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Collaborations</span>
            </h2>

            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-full px-6 py-2">
              <TrendingUp className="h-5 w-5 text-orange-400" />
              <span className="text-orange-200 font-semibold text-sm tracking-wide">
                Including Specialized <span className="text-white">Training & Placement</span> Support
              </span>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {gridPartners.map((partner) => {
              const Icon = partner.icon
              return (
                <a 
                  href={partner.link}
                  key={partner.id}
                  className={`
                    group relative flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300
                    ${partner.gridClass}
                    bg-white/5 hover:bg-white/10 border ${partner.border}
                    hover:-translate-y-1 hover:shadow-xl
                  `}
                >
                  {/* Logo/Icon Container */}
                  <div className="w-full h-20 bg-white/5 rounded-xl flex items-center justify-center mb-4 p-3">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Icon className={`h-10 w-10 ${partner.color}`} />
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="max-w-md mx-auto">
                    <div className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${partner.color} opacity-90`}>
                      {partner.role}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-100">
                      {partner.name}
                    </h3>
                    <p className="text-xs leading-relaxed text-gray-400">
                      {partner.desc}
                    </p>
                  </div>

                  {/* Hover Action */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="h-4 w-4 text-gray-300" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: DEDICATED IBM PARTNER SECTION
      ========================================= */}
      <section className="relative py-20 bg-[#001d3d] border-t border-blue-900/50 overflow-hidden">
        {/* IBM Specific Background Effect */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                
                {/* LEFT: IBM Content */}
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 mb-4 bg-blue-900/50 border border-blue-500/30 px-3 py-1 rounded-full">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-blue-200 text-xs font-bold uppercase tracking-wider">Premium Skill Partner</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Master the Future with <span className="text-blue-400">IBM</span>
                    </h2>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        We have joined forces with IBM to provide students with world-class technical training, direct access to industry-standard tools, and globally recognized certifications that set you apart in the job market.
                    </p>

                    {/* Feature List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {ibmFeatures.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <feat.icon className="w-4 h-4 text-blue-400" />
                                </div>
                                <span className="text-gray-200 text-sm font-medium">{feat.text}</span>
                            </div>
                        ))}
                    </div>
{/* 
                    <a href="#" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-blue-900/50">
                        Explore IBM Programs
                        <ArrowUpRight className="w-4 h-4" />
                    </a> */}
                </div>

                {/* RIGHT: Visual / Logo */}
                <div className="flex-1 w-full max-w-md">
                    <div className="relative">
                        {/* Decorative rings */}
                        <div className="absolute inset-0 border-2 border-dashed border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        
                        {/* White Logo Container */}
                        <div className="relative bg-white rounded-3xl p-10 shadow-2xl shadow-blue-900/50 flex items-center justify-center aspect-square md:aspect-[4/3]">
                            <img 
                                src="/IBM_logo.svg.png" 
                                alt="IBM Partner Logo" 
                                className="w-full h-full object-contain p-4"
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 right-6 bg-[#0B0F19] border border-gray-700 text-white px-4 py-2 rounded-lg shadow-xl flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                                <span className="text-xs font-bold">Official Partner</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>
    </>
  )
}