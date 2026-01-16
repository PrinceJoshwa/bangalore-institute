// // // // // "use client"

// // // // // import { Handshake, ExternalLink } from "lucide-react"

// // // // // export default function CollaborationBanner() {
// // // // //   return (
// // // // //     <section className="relative py-8 sm:py-12 overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
// // // // //       {/* Animated Background Elements */}
// // // // //       <div className="absolute inset-0">
// // // // //         <div className="absolute top-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
// // // // //         <div className="absolute bottom-0 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
// // // // //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-32 sm:h-48 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-2xl"></div>
// // // // //       </div>

// // // // //       {/* Decorative pattern */}
// // // // //       <div className="absolute inset-0 opacity-10">
// // // // //         <div className="absolute inset-0" style={{
// // // // //           backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
// // // // //           backgroundSize: '32px 32px'
// // // // //         }}></div>
// // // // //       </div>

// // // // //       <div className="relative z-10 container mx-auto px-4">
// // // // //         <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8">
// // // // //           {/* Left Badge */}
// // // // //           <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3">
// // // // //             <Handshake className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
// // // // //             <span className="text-white font-semibold text-sm sm:text-base">Official Partner</span>
// // // // //           </div>

// // // // //           {/* Main Text */}
// // // // //           <div className="text-center md:text-left">
// // // // //             <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
// // // // //               In Collaboration with{' '}
// // // // //               <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
// // // // //                 CollegePedia
// // // // //               </span>
// // // // //             </h3>
// // // // //             <p className="text-blue-200 text-xs sm:text-sm lg:text-base">
// // // // //               Empowering Students with Comprehensive Education Guidance
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* Right CTA (Optional) */}
// // // // //           <a 
// // // // //             href="https://collegepedia.in" 
// // // // //             target="_blank" 
// // // // //             rel="noopener noreferrer"
// // // // //             className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
// // // // //           >
// // // // //             <span>Visit CollegePedia</span>
// // // // //             <ExternalLink className="h-4 w-4" />
// // // // //           </a>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Decorative Border Lines */}
// // // // //       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
// // // // //       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
// // // // //     </section>
// // // // //   )
// // // // // }

// // // // "use client"

// // // // import { Handshake, ExternalLink, GraduationCap, Sparkles, Cpu, BookOpen, ArrowUpRight } from "lucide-react"

// // // // export default function CollaborationBanner() {
// // // //   const partners = [
// // // //     {
// // // //       id: "collegepedia",
// // // //       name: "CollegePedia",
// // // //       role: "Education Partner",
// // // //       desc: "Strategic Education Guidance",
// // // //       icon: Handshake, // Keeping icon for CollegePedia as fallback
// // // //       logo: null, 
// // // //       color: "text-emerald-400",
// // // //       bg: "bg-emerald-500/10",
// // // //       border: "group-hover:border-emerald-500/50",
// // // //       glow: "group-hover:shadow-emerald-500/20",
// // // //       highlight: false,
// // // //       link: "https://collegepedia.in"
// // // //     },
// // // //     {
// // // //       id: "zell",
// // // //       name: "Zell Education",
// // // //       role: "Academic Partner",
// // // //       desc: "Finance & Accounts Excellence",
// // // //       icon: GraduationCap,
// // // //       logo: "/Zell.png", // Using Logo
// // // //       color: "text-yellow-400",
// // // //       bg: "bg-yellow-500/10",
// // // //       border: "group-hover:border-yellow-500/50",
// // // //       glow: "group-hover:shadow-yellow-500/20",
// // // //       highlight: false,
// // // //       link: "#"
// // // //     },
// // // //     {
// // // //       id: "marketly",
// // // //       name: "Marketly",
// // // //       role: "Academic Partner",
// // // //       desc: "Digital & Tech Education",
// // // //       icon: BookOpen,
// // // //       logo: "/Marketly.png", // NEW Marketly Logo
// // // //       color: "text-purple-400",
// // // //       bg: "bg-purple-500/10",
// // // //       border: "group-hover:border-purple-500/50",
// // // //       glow: "group-hover:shadow-purple-500/20",
// // // //       highlight: false,
// // // //       link: "#"
// // // //     },
// // // //     {
// // // //       id: "ibm",
// // // //       name: "IBM",
// // // //       role: "Skill Partner",
// // // //       desc: "Advanced Tech Development",
// // // //       icon: Cpu,
// // // //       logo: "/IBM.webp", // Using Logo
// // // //       color: "text-blue-400",
// // // //       bg: "bg-blue-600/20",
// // // //       border: "border-blue-500/50",
// // // //       glow: "shadow-[0_0_30px_rgba(37,99,235,0.15)]",
// // // //       highlight: true,
// // // //       link: "#"
// // // //     }
// // // //   ]

// // // //   return (
// // // //     <section className="relative py-20 overflow-hidden bg-[#0B0F19]">
// // // //       {/* Dynamic Background Elements */}
// // // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // // //         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
// // // //         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
// // // //         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
// // // //       </div>

// // // //       <div className="relative z-10 container mx-auto px-4">
// // // //         {/* Section Header */}
// // // //         <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
// // // //           <div className="max-w-2xl">
// // // //             <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-4 backdrop-blur-md">
// // // //               <Sparkles className="h-4 w-4 text-yellow-400" />
// // // //               <span className="text-gray-300 text-sm font-medium">Powering Your Future</span>
// // // //             </div>
// // // //             <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
// // // //               Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Collaborations</span>
// // // //             </h2>
// // // //             <p className="text-gray-400 mt-4 text-lg">
// // // //               We partner with industry giants to provide you with world-class curriculum, skills, and placement opportunities.
// // // //             </p>
// // // //           </div>
// // // //         </div>

// // // //         {/* Partners Grid */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // // //           {partners.map((partner) => {
// // // //             const Icon = partner.icon
// // // //             return (
// // // //               <a 
// // // //                 href={partner.link}
// // // //                 key={partner.id}
// // // //                 className={`group relative flex flex-col p-6 h-full rounded-2xl transition-all duration-500 overflow-hidden
// // // //                   ${partner.highlight 
// // // //                     ? 'bg-gradient-to-b from-blue-900/20 to-slate-900/40 hover:bg-blue-900/30' 
// // // //                     : 'bg-white/5 hover:bg-white/10'
// // // //                   }
// // // //                   border ${partner.highlight ? partner.border : 'border-white/10'} 
// // // //                   ${partner.border} 
// // // //                   hover:shadow-2xl ${partner.glow} hover:-translate-y-2
// // // //                 `}
// // // //               >
// // // //                 {/* Highlight Badge for IBM */}
// // // //                 {partner.highlight && (
// // // //                   <div className="absolute top-0 right-0">
// // // //                     <div className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
// // // //                       Premium Partner
// // // //                     </div>
// // // //                   </div>
// // // //                 )}

// // // //                 {/* Logo or Icon Container */}
// // // //                 <div className={`w-16 h-16 rounded-xl ${partner.bg} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 overflow-hidden p-2`}>
// // // //                   {partner.logo ? (
// // // //                     <img 
// // // //                       src={partner.logo} 
// // // //                       alt={partner.name} 
// // // //                       className="w-full h-full object-contain filter drop-shadow-lg"
// // // //                     />
// // // //                   ) : (
// // // //                     <Icon className={`h-8 w-8 ${partner.color}`} />
// // // //                   )}
// // // //                 </div>

// // // //                 {/* Content */}
// // // //                 <div className="flex-grow">
// // // //                   <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${partner.color} opacity-80`}>
// // // //                     {partner.role}
// // // //                   </div>
// // // //                   <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
// // // //                     {partner.name}
// // // //                   </h3>
// // // //                   <p className="text-gray-400 text-sm leading-relaxed">
// // // //                     {partner.desc}
// // // //                   </p>
// // // //                 </div>

// // // //                 {/* Hover Action Arrow */}
// // // //                 <div className="mt-6 flex items-center text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
// // // //                   <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover:translate-x-0">
// // // //                     Learn more
// // // //                   </span>
// // // //                   <ArrowUpRight className="ml-auto h-5 w-5 opacity-50 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
// // // //                 </div>

// // // //                 {/* Decorative Gradient Blob on Hover */}
// // // //                 <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r ${partner.highlight ? 'from-blue-600 to-cyan-600' : 'from-white/5 to-white/10'} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
// // // //               </a>
// // // //             )
// // // //           })}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }

// // // "use client"

// // // import { Handshake, GraduationCap, Sparkles, Cpu, BookOpen, ArrowUpRight, Star } from "lucide-react"

// // // export default function CollaborationBanner() {
// // //   const partners = [
// // //     // ROW 1: Education Partner (Spans Full Width)
// // //     {
// // //       id: "collegepedia",
// // //       name: "CollegePedia",
// // //       role: "Education Partner",
// // //       desc: "Strategic Education Guidance & Counseling",
// // //       icon: Handshake,
// // //       logo: null, // Fallback to icon
// // //       color: "text-emerald-400",
// // //       bg: "bg-emerald-500/10",
// // //       border: "border-white/10 hover:border-emerald-500/50",
// // //       glow: "hover:shadow-emerald-500/20",
// // //       highlight: false,
// // //       link: "https://collegepedia.in",
// // //       gridClass: "md:col-span-2" // Spans 2 columns
// // //     },
// // //     // ROW 2: Academic Partners (Side by Side)
// // //     {
// // //       id: "zell",
// // //       name: "Zell Education",
// // //       role: "Academic Partner",
// // //       desc: "Finance & Accounts Excellence",
// // //       icon: GraduationCap,
// // //       logo: "/Zell.png",
// // //       color: "text-yellow-400",
// // //       bg: "bg-yellow-500/10",
// // //       border: "border-white/10 hover:border-yellow-500/50",
// // //       glow: "hover:shadow-yellow-500/20",
// // //       highlight: false,
// // //       link: "#",
// // //       gridClass: "md:col-span-1" // Standard width
// // //     },
// // //     {
// // //       id: "marketly",
// // //       name: "Marketly",
// // //       role: "Academic Partner",
// // //       desc: "Digital & Tech Education",
// // //       icon: BookOpen,
// // //       logo: "/Marketly.png",
// // //       color: "text-purple-400",
// // //       bg: "bg-purple-500/10",
// // //       border: "border-white/10 hover:border-purple-500/50",
// // //       glow: "hover:shadow-purple-500/20",
// // //       highlight: false,
// // //       link: "#",
// // //       gridClass: "md:col-span-1" // Standard width
// // //     },
// // //     // ROW 3: Skill Partner (Spans Full Width - Highlighted)
// // //     {
// // //       id: "ibm",
// // //       name: "IBM",
// // //       role: "Skill Partner",
// // //       desc: "Advanced Technical Skills & Professional Certification",
// // //       icon: Cpu,
// // //       logo: "/IBM.webp",
// // //       color: "text-blue-400",
// // //       bg: "bg-blue-600/20",
// // //       // Distinct Highlighting Styles
// // //       border: "border-blue-500/60 shadow-[0_0_40px_rgba(59,130,246,0.3)]", 
// // //       glow: "shadow-blue-500/40",
// // //       highlight: true,
// // //       link: "#",
// // //       gridClass: "md:col-span-2 transform md:scale-105" // Spans 2 columns + Scale up
// // //     }
// // //   ]

// // //   return (
// // //     <section className="relative py-24 overflow-hidden bg-[#0B0F19]">
// // //       {/* Background Noise & Gradients */}
// // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // //         <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse"></div>
// // //         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
// // //       </div>

// // //       <div className="relative z-10 container mx-auto px-4 max-w-5xl">
// // //         {/* Section Header */}
// // //         <div className="text-center mb-16">
// // //           <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-md">
// // //             <Sparkles className="h-4 w-4 text-yellow-400" />
// // //             <span className="text-gray-300 text-sm font-medium">Powering Your Future</span>
// // //           </div>
// // //           <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
// // //             Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Collaborations</span>
// // //           </h2>
// // //         </div>

// // //         {/* 1-2-1 Layout Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
// // //           {partners.map((partner) => {
// // //             const Icon = partner.icon
// // //             return (
// // //               <a 
// // //                 href={partner.link}
// // //                 key={partner.id}
// // //                 className={`
// // //                   group relative flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300
// // //                   ${partner.gridClass}
// // //                   ${partner.highlight 
// // //                     ? 'bg-[#131b2e] z-10' // IBM gets darker, prominent background
// // //                     : 'bg-white/5 hover:bg-white/10' 
// // //                   }
// // //                   border ${partner.border}
// // //                   ${!partner.highlight && 'hover:-translate-y-1 hover:shadow-2xl'}
// // //                 `}
// // //               >
// // //                 {/* Premium Badge for IBM */}
// // //                 {partner.highlight && (
// // //                   <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
// // //                     <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] uppercase tracking-wider flex items-center gap-2 border border-blue-400/50">
// // //                       <Star className="w-4 h-4 fill-white" />
// // //                       Premium Skill Partner
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //                 {/* LOGO AREA - LARGE */}
// // //                 <div className={`
// // //                   w-full flex items-center justify-center mb-6 rounded-2xl p-6
// // //                   ${partner.highlight ? 'h-40 bg-gradient-to-b from-blue-900/10 to-transparent' : 'h-32 bg-white/5'}
// // //                 `}>
// // //                   {partner.logo ? (
// // //                     <img 
// // //                       src={partner.logo} 
// // //                       alt={partner.name} 
// // //                       className="w-full h-full object-contain filter drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
// // //                     />
// // //                   ) : (
// // //                     <Icon className={`h-16 w-16 ${partner.color}`} />
// // //                   )}
// // //                 </div>

// // //                 {/* Content */}
// // //                 <div className="max-w-md mx-auto">
// // //                   <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${partner.color} opacity-90`}>
// // //                     {partner.role}
// // //                   </div>
// // //                   <h3 className={`text-2xl font-bold mb-3 ${partner.highlight ? 'text-white text-3xl' : 'text-gray-100'}`}>
// // //                     {partner.name}
// // //                   </h3>
// // //                   <p className={`text-sm leading-relaxed ${partner.highlight ? 'text-gray-300 text-base' : 'text-gray-400'}`}>
// // //                     {partner.desc}
// // //                   </p>
// // //                 </div>

// // //                 {/* Hover Action */}
// // //                 {!partner.highlight && (
// // //                   <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
// // //                     <ArrowUpRight className="h-6 w-6 text-gray-300" />
// // //                   </div>
// // //                 )}
// // //               </a>
// // //             )
// // //           })}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // "use client"

// // import { Handshake, GraduationCap, Sparkles, Cpu, BookOpen, ArrowUpRight, Star } from "lucide-react"

// // export default function CollaborationBanner() {
// //   const partners = [
// //     // ROW 1: Education Partner (Spans Full Width)
// //     {
// //       id: "collegepedia",
// //       name: "CollegePedia",
// //       role: "Education Partner",
// //       desc: "Strategic Education Guidance & Counseling",
// //       icon: Handshake,
// //       logo: null, // Fallback to icon
// //       color: "text-emerald-400",
// //       bg: "bg-emerald-500/10",
// //       border: "border-white/10 hover:border-emerald-500/50",
// //       glow: "hover:shadow-emerald-500/20",
// //       highlight: false,
// //       link: "https://collegepedia.in",
// //       gridClass: "md:col-span-2" // Spans 2 columns
// //     },
// //     // ROW 2: Academic Partners (Side by Side)
// //     {
// //       id: "zell",
// //       name: "Zell Education",
// //       role: "Academic Partner",
// //       desc: "Finance & Accounts Excellence",
// //       icon: GraduationCap,
// //       logo: "/Zell.png",
// //       color: "text-yellow-400",
// //       bg: "bg-yellow-500/10",
// //       border: "border-white/10 hover:border-yellow-500/50",
// //       glow: "hover:shadow-yellow-500/20",
// //       highlight: false,
// //       link: "#",
// //       gridClass: "md:col-span-1" // Standard width
// //     },
// //     {
// //       id: "marketly",
// //       name: "Marketly",
// //       role: "Academic Partner",
// //       desc: "Digital & Tech Education",
// //       icon: BookOpen,
// //       logo: "/Marketly.png",
// //       color: "text-purple-400",
// //       bg: "bg-purple-500/10",
// //       border: "border-white/10 hover:border-purple-500/50",
// //       glow: "hover:shadow-purple-500/20",
// //       highlight: false,
// //       link: "#",
// //       gridClass: "md:col-span-1" // Standard width
// //     },
// //     // ROW 3: Skill Partner (Spans Full Width - Highlighted)
// //     {
// //       id: "ibm",
// //       name: "IBM",
// //       role: "Skill Partner",
// //       desc: "Advanced Technical Skills & Certification",
// //       icon: Cpu,
// //       logo: "/IBM.webp",
// //       color: "text-blue-400",
// //       bg: "bg-blue-600/20",
// //       // Distinct Highlighting Styles
// //       border: "border-blue-500/60 shadow-[0_0_30px_rgba(59,130,246,0.3)]", 
// //       glow: "shadow-blue-500/40",
// //       highlight: true,
// //       link: "#",
// //       gridClass: "md:col-span-2" // Spans 2 columns
// //     }
// //   ]

// //   return (
// //     <section className="relative py-20 overflow-hidden bg-[#0B0F19]">
// //       {/* Background Noise & Gradients */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse"></div>
// //         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
// //       </div>

// //       <div className="relative z-10 container mx-auto px-4 max-w-5xl">
// //         {/* Section Header */}
// //         <div className="text-center mb-12">
// //           <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-4 backdrop-blur-md">
// //             <Sparkles className="h-4 w-4 text-yellow-400" />
// //             <span className="text-gray-300 text-sm font-medium">Powering Your Future</span>
// //           </div>
// //           <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
// //             Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Collaborations</span>
// //           </h2>
// //         </div>

// //         {/* 1-2-1 Layout Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           {partners.map((partner) => {
// //             const Icon = partner.icon
// //             return (
// //               <a 
// //                 href={partner.link}
// //                 key={partner.id}
// //                 className={`
// //                   group relative flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300
// //                   ${partner.gridClass}
// //                   ${partner.highlight 
// //                     ? 'bg-[#131b2e] z-10' // IBM gets darker, prominent background
// //                     : 'bg-white/5 hover:bg-white/10' 
// //                   }
// //                   border ${partner.border}
// //                   ${!partner.highlight && 'hover:-translate-y-1 hover:shadow-2xl'}
// //                 `}
// //               >
// //                 {/* Premium Badge for IBM */}
// //                 {partner.highlight && (
// //                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
// //                     <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-2 border border-blue-400/50">
// //                       <Star className="w-3 h-3 fill-white" />
// //                       Premium Partner
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* LOGO AREA - Medium Size (h-24) */}
// //                 <div className={`
// //                   w-full flex items-center justify-center mb-4 rounded-xl p-4
// //                   ${partner.highlight ? 'h-24 bg-blue-900/10' : 'h-24 bg-white/5'}
// //                 `}>
// //                   {partner.logo ? (
// //                     <img 
// //                       src={partner.logo} 
// //                       alt={partner.name} 
// //                       className="w-full h-full object-contain filter drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
// //                     />
// //                   ) : (
// //                     <Icon className={`h-12 w-12 ${partner.color}`} />
// //                   )}
// //                 </div>

// //                 {/* Content */}
// //                 <div className="max-w-md mx-auto">
// //                   <div className={`text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 ${partner.color} opacity-90`}>
// //                     {partner.role}
// //                   </div>
// //                   <h3 className={`text-xl font-bold mb-2 ${partner.highlight ? 'text-white' : 'text-gray-100'}`}>
// //                     {partner.name}
// //                   </h3>
// //                   <p className={`text-sm leading-relaxed ${partner.highlight ? 'text-gray-300' : 'text-gray-400'}`}>
// //                     {partner.desc}
// //                   </p>
// //                 </div>

// //                 {/* Hover Action */}
// //                 {!partner.highlight && (
// //                   <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
// //                     <ArrowUpRight className="h-5 w-5 text-gray-300" />
// //                   </div>
// //                 )}
// //               </a>
// //             )
// //           })}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { Handshake, GraduationCap, Sparkles, Cpu, BookOpen, ArrowUpRight, Star } from "lucide-react"

// export default function CollaborationBanner() {
//   const partners = [
//     // ROW 1: Education Partner (Spans Full Width)
//     {
//       id: "collegepedia",
//       name: "CollegePedia",
//       role: "Education Partner",
//       desc: "Strategic Education Guidance & Counseling",
//       icon: Handshake,
//       logo: null, // Fallback to icon
//       color: "text-emerald-400",
//       bg: "bg-emerald-500/10",
//       border: "border-white/10 hover:border-emerald-500/50",
//       glow: "hover:shadow-emerald-500/20",
//       highlight: false,
//       link: "https://collegepedia.in",
//       gridClass: "md:col-span-2" // Spans 2 columns
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
//       gridClass: "md:col-span-1" // Standard width
//     },
//     {
//       id: "marketly",
//       name: "Marketly",
//       role: "Academic Partner",
//       desc: "Digital & Tech Education",
//       icon: BookOpen,
//       logo: "/Marketly.png",
//       color: "text-purple-400",
//       bg: "bg-purple-500/10",
//       border: "border-white/10 hover:border-purple-500/50",
//       glow: "hover:shadow-purple-500/20",
//       highlight: false,
//       link: "#",
//       gridClass: "md:col-span-1" // Standard width
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
//       gridClass: "md:col-span-2" // Spans 2 columns
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
//           <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
//             Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Collaborations</span>
//           </h2>
//         </div>

//         {/* 1-2-1 Layout Grid - Optimized Size */}
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

//                 {/* LOGO AREA - Optimized Height (h-20) */}
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

import { Handshake, GraduationCap, Sparkles, Cpu, BookOpen, ArrowUpRight, Star, TrendingUp } from "lucide-react"

export default function CollaborationBanner() {
  const partners = [
    // ROW 1: Education Partner (Spans Full Width)
    {
      id: "collegepedia",
      name: "CollegePedia",
      role: "Education Partner",
      desc: "Strategic Education Guidance & Counseling",
      icon: Handshake,
      logo: null,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-white/10 hover:border-emerald-500/50",
      glow: "hover:shadow-emerald-500/20",
      highlight: false,
      link: "https://collegepedia.in",
      gridClass: "md:col-span-2"
    },
    // ROW 2: Academic Partners (Side by Side)
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
      highlight: false,
      link: "#",
      gridClass: "md:col-span-1"
    },
    {
      id: "marketly",
      name: "Marketly",
      role: "Academic Partner",
      desc: "Digital & Tech Education",
      icon: BookOpen,
      logo: "/Marketly.png",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-white/10 hover:border-purple-500/50",
      glow: "hover:shadow-purple-500/20",
      highlight: false,
      link: "#",
      gridClass: "md:col-span-1"
    },
    // ROW 3: Skill Partner (Spans Full Width - Highlighted)
    {
      id: "ibm",
      name: "IBM",
      role: "Skill Partner",
      desc: "Advanced Technical Skills & Certification",
      icon: Cpu,
      logo: "/IBM_logo.svg.png",
      color: "text-blue-400",
      bg: "bg-blue-600/20",
      // Distinct Highlighting Styles
      border: "border-blue-500/60 shadow-[0_0_25px_rgba(59,130,246,0.3)]", 
      glow: "shadow-blue-500/40",
      highlight: true,
      link: "#",
      gridClass: "md:col-span-2" 
    }
  ]

  return (
    <section className="relative py-16 overflow-hidden bg-[#0B0F19]">
      {/* Background Noise & Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-3 backdrop-blur-md">
            <Sparkles className="h-3 w-3 text-yellow-400" />
            <span className="text-gray-300 text-xs font-medium">Powering Your Future</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Collaborations</span>
          </h2>

          {/* NEW TRAINING & PLACEMENT BANNER (Under Heading) */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-full px-6 py-2">
            <TrendingUp className="h-5 w-5 text-orange-400" />
            <span className="text-orange-200 font-semibold text-sm tracking-wide">
              Including Specialized <span className="text-white">Training & Placement</span> Support
            </span>
          </div>
        </div>

        {/* 1-2-1 Grid Layout - Unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {partners.map((partner) => {
            const Icon = partner.icon
            return (
              <a 
                href={partner.link}
                key={partner.id}
                className={`
                  group relative flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-300
                  ${partner.gridClass}
                  ${partner.highlight 
                    ? 'bg-[#131b2e] z-10' 
                    : 'bg-white/5 hover:bg-white/10' 
                  }
                  border ${partner.border}
                  ${!partner.highlight && 'hover:-translate-y-1 hover:shadow-xl'}
                `}
              >
                {/* Premium Badge for IBM */}
                {partner.highlight && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-4 py-1 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1 border border-blue-400/50">
                      <Star className="w-3 h-3 fill-white" />
                      Premium Partner
                    </div>
                  </div>
                )}

                {/* LOGO AREA - Balanced Height (h-20) */}
                <div className={`
                  w-full flex items-center justify-center mb-3 rounded-xl p-3
                  ${partner.highlight ? 'h-20 bg-blue-900/10' : 'h-20 bg-white/5'}
                `}>
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

                {/* Content */}
                <div className="max-w-md mx-auto">
                  <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${partner.color} opacity-90`}>
                    {partner.role}
                  </div>
                  <h3 className={`text-lg font-bold mb-1 ${partner.highlight ? 'text-white' : 'text-gray-100'}`}>
                    {partner.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${partner.highlight ? 'text-gray-300' : 'text-gray-400'}`}>
                    {partner.desc}
                  </p>
                </div>

                {/* Hover Action */}
                {!partner.highlight && (
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <ArrowUpRight className="h-4 w-4 text-gray-300" />
                  </div>
                )}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}