// // "use client"

// // import { useState } from "react"
// // import { BookOpen, Laptop, Activity, Home } from "lucide-react"

// // export default function CampusLife() {
// //   const [activeImage, setActiveImage] = useState(0)

// //   const images = [
// //     {
// //       src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
// //       alt: "Modern university library",
// //       title: "State-of-the-art Library",
// //     },
// //     {
// //       src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
// //       alt: "Advanced computer laboratory",
// //       title: "Advanced Research Labs",
// //     },
// //     {
// //       src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
// //       alt: "University sports complex",
// //       title: "Multi-sport Complex",
// //     },
// //     {
// //       src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
// //       alt: "Student dormitory building",
// //       title: "Comfortable Hostels",
// //     },
// //   ]

// //   return (
// //     <section id="campus" className="w-full py-12 md:py-24 lg:py-32 bg-white">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
// //           <div className="space-y-2">
// //             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
// //               Student Experience
// //             </div>
// //             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Campus Life</h2>
// //             <p className="max-w-[900px] text-gray-600 md:text-xl">
// //               Experience a vibrant campus environment with state-of-the-art facilities designed to enhance your learning
// //               journey.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Campus Gallery */}
// //         <div className="space-y-4 mb-12">
// //           <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
// //             <img
// //               src={images[activeImage].src || "/placeholder.svg"}
// //               alt={images[activeImage].alt}
// //               className="w-full h-full object-cover transition-all duration-300"
// //             />
// //             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
// //               <h3 className="text-xl font-bold text-white">{images[activeImage].title}</h3>
// //             </div>
// //           </div>

// //           <div className="flex gap-2 overflow-auto pb-2">
// //             {images.map((image, index) => (
// //               <div
// //                 key={index}
// //                 className={`relative h-20 w-32 shrink-0 overflow-hidden cursor-pointer border-2 rounded-lg ${
// //                   activeImage === index ? "border-blue-600" : "border-transparent"
// //                 }`}
// //                 onClick={() => setActiveImage(index)}
// //               >
// //                 <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //           <div className="card p-6 hover:shadow-lg transition-shadow">
// //             <div className="flex items-center gap-2 mb-3">
// //               <BookOpen className="h-5 w-5 text-blue-600" />
// //               <h3 className="text-lg font-bold text-blue-800">Modern Library</h3>
// //             </div>
// //             <p className="text-gray-600 text-sm">
// //               Over 50,000 books, digital resources, and quiet study spaces for focused learning.
// //             </p>
// //           </div>

// //           <div className="card p-6 hover:shadow-lg transition-shadow">
// //             <div className="flex items-center gap-2 mb-3">
// //               <Laptop className="h-5 w-5 text-blue-600" />
// //               <h3 className="text-lg font-bold text-blue-800">Advanced Labs</h3>
// //             </div>
// //             <p className="text-gray-600 text-sm">
// //               Cutting-edge laboratories equipped with the latest technology and research tools.
// //             </p>
// //           </div>

// //           <div className="card p-6 hover:shadow-lg transition-shadow">
// //             <div className="flex items-center gap-2 mb-3">
// //               <Activity className="h-5 w-5 text-blue-600" />
// //               <h3 className="text-lg font-bold text-blue-800">Sports Complex</h3>
// //             </div>
// //             <p className="text-gray-600 text-sm">
// //               Multi-sport facilities including indoor courts, swimming pool, and fitness center.
// //             </p>
// //           </div>

// //           <div className="card p-6 hover:shadow-lg transition-shadow">
// //             <div className="flex items-center gap-2 mb-3">
// //               <Home className="h-5 w-5 text-blue-600" />
// //               <h3 className="text-lg font-bold text-blue-800">Student Hostels</h3>
// //             </div>
// //             <p className="text-gray-600 text-sm">Comfortable accommodation with modern amenities and 24/7 security.</p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import {
//   Users,
//   Calendar,
//   Trophy,
//   Music,
//   Camera,
//   BookOpen,
//   Heart,
//   Gamepad2,
//   Coffee,
//   MapPin,
//   Star,
//   Play,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react"

// export default function CampusLife() {
//   const [activeCategory, setActiveCategory] = useState("overview")
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)

//   const campusStats = [
//     {
//       number: "50+",
//       label: "Student Clubs",
//       icon: <Users className="h-6 w-6" />,
//       color: "from-blue-500 to-cyan-500",
//       description: "Active student organizations and clubs",
//     },
//     {
//       number: "100+",
//       label: "Annual Events",
//       icon: <Calendar className="h-6 w-6" />,
//       color: "from-green-500 to-emerald-500",
//       description: "Cultural, technical, and sports events",
//     },
//     {
//       number: "25+",
//       label: "Sports Activities",
//       icon: <Trophy className="h-6 w-6" />,
//       color: "from-purple-500 to-pink-500",
//       description: "Indoor and outdoor sports facilities",
//     },
//     {
//       number: "24/7",
//       label: "Campus Facilities",
//       icon: <Coffee className="h-6 w-6" />,
//       color: "from-orange-500 to-red-500",
//       description: "Round-the-clock campus amenities",
//     },
//   ]

//   const campusImages = [
//     {
//       src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Modern Campus",
//       description: "State-of-the-art infrastructure with AI-powered smart classrooms and modern facilities.",
//       category: "Infrastructure",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Library & Study Areas",
//       description: "Extensive digital library with quiet study spaces and collaborative learning zones.",
//       category: "Academic",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Sports Complex",
//       description: "Comprehensive sports facilities including indoor courts and outdoor playing fields.",
//       category: "Sports",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Student Activities",
//       description: "Vibrant student life with cultural events, festivals, and community gatherings.",
//       category: "Culture",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Cafeteria & Dining",
//       description: "Modern dining facilities with diverse food options and comfortable seating areas.",
//       category: "Dining",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Hostel Accommodation",
//       description: "Comfortable hostel facilities with modern amenities and 24/7 security.",
//       category: "Accommodation",
//     },
//   ]

//   const studentClubs = [
//     {
//       name: "Tech Innovation Club",
//       description: "Exploring cutting-edge technologies and AI innovations",
//       icon: <BookOpen className="h-6 w-6" />,
//       members: "150+",
//       activities: ["Hackathons", "Tech Talks", "Innovation Projects"],
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       name: "Cultural Society",
//       description: "Celebrating arts, music, dance, and cultural diversity",
//       icon: <Music className="h-6 w-6" />,
//       members: "200+",
//       activities: ["Annual Fest", "Cultural Shows", "Art Exhibitions"],
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       name: "Sports Club",
//       description: "Promoting fitness and competitive sports activities",
//       icon: <Trophy className="h-6 w-6" />,
//       members: "180+",
//       activities: ["Inter-college Tournaments", "Fitness Programs", "Sports Events"],
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       name: "Photography Club",
//       description: "Capturing moments and developing visual storytelling skills",
//       icon: <Camera className="h-6 w-6" />,
//       members: "80+",
//       activities: ["Photo Walks", "Exhibitions", "Workshops"],
//       color: "from-orange-500 to-red-500",
//     },
//     {
//       name: "Entrepreneurship Cell",
//       description: "Fostering startup culture and business innovation",
//       icon: <Users className="h-6 w-6" />,
//       members: "120+",
//       activities: ["Startup Pitches", "Business Competitions", "Mentorship"],
//       color: "from-indigo-500 to-purple-500",
//     },
//     {
//       name: "Gaming Club",
//       description: "Competitive gaming and esports tournaments",
//       icon: <Gamepad2 className="h-6 w-6" />,
//       members: "100+",
//       activities: ["Esports Tournaments", "Gaming Nights", "Streaming"],
//       color: "from-red-500 to-pink-500",
//     },
//   ]

//   const campusFacilities = [
//     {
//       title: "AI-Powered Smart Classrooms",
//       description: "Interactive learning environments with AI-induced smart screens and modern teaching aids.",
//       icon: <BookOpen className="h-8 w-8" />,
//       features: ["Smart Boards", "AI Integration", "Digital Learning"],
//       gradient: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Modern Library & Research Center",
//       description: "Extensive digital and physical collection with quiet study spaces and research facilities.",
//       icon: <BookOpen className="h-8 w-8" />,
//       features: ["Digital Library", "Research Databases", "Study Rooms"],
//       gradient: "from-green-500 to-emerald-500",
//     },
//     {
//       title: "Sports & Recreation Complex",
//       description: "Comprehensive sports facilities for both indoor and outdoor activities.",
//       icon: <Trophy className="h-8 w-8" />,
//       features: ["Indoor Courts", "Outdoor Fields", "Fitness Center"],
//       gradient: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Student Accommodation",
//       description: "Comfortable hostel facilities with modern amenities and 24/7 security.",
//       icon: <Heart className="h-8 w-8" />,
//       features: ["Modern Rooms", "24/7 Security", "Common Areas"],
//       gradient: "from-orange-500 to-red-500",
//     },
//   ]

//   const upcomingEvents = [
//     {
//       title: "Annual Tech Fest 2024",
//       date: "March 15-17, 2024",
//       description: "Three-day technology festival with competitions, exhibitions, and industry talks.",
//       type: "Technical",
//       participants: "500+",
//       icon: <BookOpen className="h-5 w-5" />,
//     },
//     {
//       title: "Cultural Extravaganza",
//       date: "April 5-7, 2024",
//       description: "Celebrating diversity through music, dance, drama, and art exhibitions.",
//       type: "Cultural",
//       participants: "800+",
//       icon: <Music className="h-5 w-5" />,
//     },
//     {
//       title: "Inter-College Sports Meet",
//       date: "February 20-25, 2024",
//       description: "Competitive sports tournament with multiple colleges participating.",
//       type: "Sports",
//       participants: "300+",
//       icon: <Trophy className="h-5 w-5" />,
//     },
//     {
//       title: "Entrepreneurship Summit",
//       date: "May 10-12, 2024",
//       description: "Startup pitches, investor meetings, and entrepreneurship workshops.",
//       type: "Business",
//       participants: "200+",
//       icon: <Users className="h-5 w-5" />,
//     },
//   ]

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % campusImages.length)
//   }

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + campusImages.length) % campusImages.length)
//   }

//   return (
//     <section
//       id="campus-life"
//       className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-100/30 to-blue-100/30 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
//             <Heart className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">Campus Life</span>
//           </div>
//           <h2 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               Vibrant Campus
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Experience
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             Experience a dynamic campus life with modern facilities, diverse student activities, and a supportive
//             community that fosters personal and professional growth.
//           </p>
//         </div>

//         {/* Campus Stats */}
//         <div className="grid md:grid-cols-4 gap-8 mb-20">
//           {campusStats.map((stat, index) => (
//             <div key={index} className="group">
//               <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                 >
//                   {stat.icon}
//                 </div>
//                 <div className="text-center">
//                   <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-gray-900 font-semibold mb-2">{stat.label}</div>
//                   <div className="text-gray-600 text-sm">{stat.description}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
//             <div className="flex flex-wrap justify-center gap-2">
//               {[
//                 { id: "overview", name: "Overview", icon: <MapPin className="h-4 w-4" /> },
//                 { id: "facilities", name: "Facilities", icon: <BookOpen className="h-4 w-4" /> },
//                 { id: "clubs", name: "Student Clubs", icon: <Users className="h-4 w-4" /> },
//                 { id: "events", name: "Events", icon: <Calendar className="h-4 w-4" /> },
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveCategory(tab.id)}
//                   className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                     activeCategory === tab.id
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                       : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   {tab.icon}
//                   {tab.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Tab Content */}
//         {activeCategory === "overview" && (
//           <div className="space-y-20">
//             {/* Campus Gallery */}
//             <div>
//               <div className="text-center mb-12">
//                 <h3 className="text-3xl font-bold text-gray-900 mb-4">Campus Gallery</h3>
//                 <p className="text-gray-600 text-lg">Explore our modern campus and facilities</p>
//               </div>

//               <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full -translate-y-16 translate-x-16"></div>

//                 <div className="relative z-10">
//                   <div className="grid lg:grid-cols-2 gap-12 items-center">
//                     {/* Image Display */}
//                     <div className="relative">
//                       <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
//                         <img
//                           src={campusImages[currentImageIndex].src || "/placeholder.svg"}
//                           alt={campusImages[currentImageIndex].title}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
//                         <Play className="h-8 w-8" />
//                       </div>
//                     </div>

//                     {/* Image Details */}
//                     <div className="space-y-6">
//                       <div>
//                         <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
//                           {campusImages[currentImageIndex].category}
//                         </div>
//                         <h4 className="text-2xl font-bold text-gray-900 mb-4">
//                           {campusImages[currentImageIndex].title}
//                         </h4>
//                         <p className="text-gray-600 leading-relaxed text-lg">
//                           {campusImages[currentImageIndex].description}
//                         </p>
//                       </div>

//                       {/* Navigation */}
//                       <div className="flex items-center gap-4">
//                         <button
//                           onClick={prevImage}
//                           className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
//                         >
//                           <ChevronLeft className="h-6 w-6 text-gray-600" />
//                         </button>

//                         <div className="flex space-x-2">
//                           {campusImages.map((_, index) => (
//                             <button
//                               key={index}
//                               onClick={() => setCurrentImageIndex(index)}
//                               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                                 currentImageIndex === index ? "bg-blue-600 w-8" : "bg-gray-300"
//                               }`}
//                             />
//                           ))}
//                         </div>

//                         <button
//                           onClick={nextImage}
//                           className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
//                         >
//                           <ChevronRight className="h-6 w-6 text-gray-600" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeCategory === "facilities" && (
//           <div>
//             <div className="text-center mb-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">World-Class Facilities</h3>
//               <p className="text-gray-600 text-lg">Modern infrastructure designed for excellence</p>
//             </div>
//             <div className="grid md:grid-cols-2 gap-8">
//               {campusFacilities.map((facility, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                     <div
//                       className={`w-20 h-20 bg-gradient-to-r ${facility.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                     >
//                       {facility.icon}
//                     </div>
//                     <div className="text-center mb-6">
//                       <h4 className="text-xl font-bold text-gray-900 mb-4">{facility.title}</h4>
//                       <p className="text-gray-600 leading-relaxed">{facility.description}</p>
//                     </div>
//                     <div className="space-y-2">
//                       {facility.features.map((feature, idx) => (
//                         <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
//                           <Star className="h-4 w-4 text-yellow-500" />
//                           {feature}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeCategory === "clubs" && (
//           <div>
//             <div className="text-center mb-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Student Clubs & Organizations</h3>
//               <p className="text-gray-600 text-lg">Join communities that match your interests and passions</p>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {studentClubs.map((club, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                     <div
//                       className={`w-16 h-16 bg-gradient-to-r ${club.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
//                     >
//                       {club.icon}
//                     </div>
//                     <div className="text-center mb-6">
//                       <h4 className="text-lg font-bold text-gray-900 mb-2">{club.name}</h4>
//                       <p className="text-gray-600 text-sm mb-4 leading-relaxed">{club.description}</p>
//                       <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
//                         {club.members} Members
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       <h5 className="font-semibold text-gray-900 text-sm mb-3">Key Activities:</h5>
//                       {club.activities.map((activity, idx) => (
//                         <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
//                           <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
//                           {activity}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeCategory === "events" && (
//           <div>
//             <div className="text-center mb-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
//               <p className="text-gray-600 text-lg">Don't miss these exciting campus events and activities</p>
//             </div>
//             <div className="grid md:grid-cols-2 gap-8">
//               {upcomingEvents.map((event, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
//                     <div className="flex items-start gap-4 mb-6">
//                       <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white shrink-0">
//                         {event.icon}
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex items-center gap-2 mb-2">
//                           <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
//                             {event.type}
//                           </span>
//                           <span className="text-gray-500 text-sm">{event.date}</span>
//                         </div>
//                         <h4 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h4>
//                         <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <Users className="h-4 w-4" />
//                         <span>{event.participants} Expected</span>
//                       </div>
//                       <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">Learn More →</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Call to Action */}
//         <div className="mt-20">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//             <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//             <div className="relative z-10 text-center">
//               <h3 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h3>
//               <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
//                 Experience the vibrant campus life at BIMSR. Join us and be part of a community that values growth,
//                 innovation, and excellence.
//               </p>
//               <div className="flex flex-wrap justify-center gap-4">
//                 <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                   Schedule Campus Visit
//                 </button>
//                 <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30">
//                   Virtual Tour
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { Play, Users, Calendar, Trophy, Music, Camera, BookOpen, Coffee, Wifi, Car } from "lucide-react"

export default function CampusLife() {
  const [activeTab, setActiveTab] = useState("facilities")
  const [selectedImage, setSelectedImage] = useState(0)

  const campusImages = [
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Main Campus Building",
      category: "facilities",
    },
    {
      // src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      title: "Modern Library",
      category: "facilities",
    },
    {
      src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Computer Labs",
      category: "facilities",
    },
    {
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Sports Complex",
      category: "sports",
    },
    {
      src: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Student Hostel",
      category: "facilities",
    },
    {
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Student Activities",
      category: "events",
    },
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Campus Grounds",
      category: "facilities",
    },
  ]

  const facilities = [
    {
      icon: BookOpen,
      title: "Modern Library",
      description: "24/7 access to digital and physical resources with over 50,000 books and journals",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Campus-wide WiFi with dedicated bandwidth for seamless online learning",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Coffee,
      title: "Food Court & Cafeteria",
      description: "Multiple dining options with healthy and affordable meal plans",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Bus facility connecting major areas of Bangalore for easy commute",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ]

  const sportsActivities = [
    {
      icon: Trophy,
      title: "Cricket Ground",
      description: "Full-size cricket ground with professional facilities and coaching",
      achievements: ["Inter-college Champions 2023", "State Level Participation"],
    },
    {
      icon: Trophy,
      title: "Basketball Court",
      description: "Indoor basketball court with modern equipment and regular tournaments",
      achievements: ["University League Winners", "Regional Championships"],
    },
    {
      icon: Trophy,
      title: "Badminton Hall",
      description: "Multi-court badminton facility with professional coaching available",
      achievements: ["Individual State Champions", "Team Competitions"],
    },
    {
      icon: Trophy,
      title: "Fitness Center",
      description: "Fully equipped gymnasium with modern fitness equipment and trainers",
      achievements: ["Health & Wellness Programs", "Fitness Competitions"],
    },
  ]

  const events = [
    {
      title: "Tech Fest 2024",
      date: "March 15-17, 2024",
      description: "Annual technology festival featuring hackathons, coding competitions, and tech talks",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      participants: "500+ Students",
    },
    {
      title: "Cultural Festival",
      date: "February 10-12, 2024",
      description: "Celebration of arts, music, dance, and cultural diversity with performances and competitions",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      participants: "800+ Students",
    },
    {
      title: "Sports Week",
      date: "January 20-26, 2024",
      description: "Inter-department sports competitions including cricket, basketball, and athletics",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      participants: "300+ Athletes",
    },
    {
      title: "Industry Connect",
      date: "April 5-6, 2024",
      description: "Industry experts sharing insights, workshops, and networking opportunities",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      participants: "200+ Professionals",
    },
  ]

  const clubs = [
    {
      name: "Coding Club",
      icon: BookOpen,
      members: 120,
      description: "Weekly coding sessions, hackathons, and competitive programming",
      activities: ["Weekly Contests", "Hackathons", "Tech Talks", "Open Source Projects"],
    },
    {
      name: "Photography Club",
      icon: Camera,
      members: 85,
      description: "Capturing campus life and organizing photography workshops",
      activities: ["Photo Walks", "Workshops", "Exhibitions", "Competitions"],
    },
    {
      name: "Music Club",
      icon: Music,
      members: 95,
      description: "Regular jam sessions, concerts, and music production workshops",
      activities: ["Jam Sessions", "Concerts", "Music Production", "Talent Shows"],
    },
    {
      name: "Drama Society",
      icon: Users,
      members: 70,
      description: "Theater productions, street plays, and acting workshops",
      activities: ["Theater Productions", "Street Plays", "Acting Workshops", "Script Writing"],
    },
  ]

  const tabs = [
    { id: "facilities", label: "Facilities", icon: BookOpen },
    { id: "sports", label: "Sports", icon: Trophy },
    { id: "events", label: "Events", icon: Calendar },
    { id: "clubs", label: "Clubs", icon: Users },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Vibrant Campus Life
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Experience a holistic education with world-class facilities, exciting events, sports activities, and vibrant
            student communities that shape your personality.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-400">50+</div>
              <div className="text-purple-200">Student Clubs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400">100+</div>
              <div className="text-purple-200">Annual Events</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-400">15+</div>
              <div className="text-purple-200">Sports Activities</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Campus Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Campus Gallery</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src={campusImages[selectedImage].src || "/placeholder.svg"}
                alt={campusImages[selectedImage].title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <h3 className="font-semibold">{campusImages[selectedImage].title}</h3>
              </div>
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                <Play className="h-8 w-8 text-gray-700 ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {campusImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedImage === index
                      ? "ring-4 ring-blue-500 transform scale-105"
                      : "hover:transform hover:scale-105"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-32 object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white text-sm font-medium text-center px-2">{image.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Facilities Tab */}
          {activeTab === "facilities" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">World-Class Facilities</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {facilities.map((facility, index) => {
                  const Icon = facility.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <img
                        src={facility.image || "/placeholder.svg"}
                        alt={facility.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{facility.title}</h3>
                        </div>
                        <p className="text-gray-600">{facility.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Sports Tab */}
          {activeTab === "sports" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Sports & Recreation</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {sportsActivities.map((sport, index) => {
                  const Icon = sport.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{sport.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{sport.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Recent Achievements:</h4>
                        <ul className="space-y-1">
                          {sport.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <Trophy className="h-4 w-4 text-yellow-500 mr-2" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === "events" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Campus Events</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                        <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                          {event.participants}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Clubs Tab */}
          {activeTab === "clubs" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Student Clubs & Societies</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {clubs.map((club, index) => {
                  const Icon = club.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{club.name}</h3>
                        </div>
                        <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                          {club.members} Members
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{club.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Activities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {club.activities.map((activity, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Campus Life</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our vibrant community and create memories that will last a lifetime. Schedule a campus visit to see our
            facilities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Schedule Campus Tour
            </button>
            <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              Virtual Campus Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
