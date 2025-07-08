
// "use client"

// import { useState } from "react"
// import { Play, Users, Calendar, Trophy, Music, Camera, BookOpen, Coffee, Wifi, Car } from "lucide-react"

// export default function CampusLife() {
//   const [activeTab, setActiveTab] = useState("facilities")
//   const [selectedImage, setSelectedImage] = useState(0)

//   const campusImages = [
//     {
//       src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Main Campus Building",
//       category: "facilities",
//     },
//     {
//       // src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
//       title: "Modern Library",
//       category: "facilities",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Computer Labs",
//       category: "facilities",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Sports Complex",
//       category: "sports",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Student Hostel",
//       category: "facilities",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Student Activities",
//       category: "events",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       title: "Campus Grounds",
//       category: "facilities",
//     },
//   ]

//   const facilities = [
//     {
//       icon: BookOpen,
//       title: "Modern Library",
//       description: "24/7 access to digital and physical resources with over 50,000 books and journals",
//       image:
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
//     },
//     {
//       icon: Wifi,
//       title: "High-Speed Internet",
//       description: "Campus-wide WiFi with dedicated bandwidth for seamless online learning",
//       image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//     },
//     {
//       icon: Coffee,
//       title: "Food Court & Cafeteria",
//       description: "Multiple dining options with healthy and affordable meal plans",
//       image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//     },
//     {
//       icon: Car,
//       title: "Transportation",
//       description: "Bus facility connecting major areas of Bangalore for easy commute",
//       image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//     },
//   ]

//   const sportsActivities = [
//     {
//       icon: Trophy,
//       title: "Cricket Ground",
//       description: "Full-size cricket ground with professional facilities and coaching",
//       achievements: ["Inter-college Champions 2023", "State Level Participation"],
//     },
//     {
//       icon: Trophy,
//       title: "Basketball Court",
//       description: "Indoor basketball court with modern equipment and regular tournaments",
//       achievements: ["University League Winners", "Regional Championships"],
//     },
//     {
//       icon: Trophy,
//       title: "Badminton Hall",
//       description: "Multi-court badminton facility with professional coaching available",
//       achievements: ["Individual State Champions", "Team Competitions"],
//     },
//     {
//       icon: Trophy,
//       title: "Fitness Center",
//       description: "Fully equipped gymnasium with modern fitness equipment and trainers",
//       achievements: ["Health & Wellness Programs", "Fitness Competitions"],
//     },
//   ]

//   const events = [
//     {
//       title: "Tech Fest 2024",
//       date: "March 15-17, 2024",
//       description: "Annual technology festival featuring hackathons, coding competitions, and tech talks",
//       image:
//         "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       participants: "500+ Students",
//     },
//     {
//       title: "Cultural Festival",
//       date: "February 10-12, 2024",
//       description: "Celebration of arts, music, dance, and cultural diversity with performances and competitions",
//       image:
//         "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       participants: "800+ Students",
//     },
//     {
//       title: "Sports Week",
//       date: "January 20-26, 2024",
//       description: "Inter-department sports competitions including cricket, basketball, and athletics",
//       image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       participants: "300+ Athletes",
//     },
//     {
//       title: "Industry Connect",
//       date: "April 5-6, 2024",
//       description: "Industry experts sharing insights, workshops, and networking opportunities",
//       image:
//         "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       participants: "200+ Professionals",
//     },
//   ]

//   const clubs = [
//     {
//       name: "Coding Club",
//       icon: BookOpen,
//       members: 120,
//       description: "Weekly coding sessions, hackathons, and competitive programming",
//       activities: ["Weekly Contests", "Hackathons", "Tech Talks", "Open Source Projects"],
//     },
//     {
//       name: "Photography Club",
//       icon: Camera,
//       members: 85,
//       description: "Capturing campus life and organizing photography workshops",
//       activities: ["Photo Walks", "Workshops", "Exhibitions", "Competitions"],
//     },
//     {
//       name: "Music Club",
//       icon: Music,
//       members: 95,
//       description: "Regular jam sessions, concerts, and music production workshops",
//       activities: ["Jam Sessions", "Concerts", "Music Production", "Talent Shows"],
//     },
//     {
//       name: "Drama Society",
//       icon: Users,
//       members: 70,
//       description: "Theater productions, street plays, and acting workshops",
//       activities: ["Theater Productions", "Street Plays", "Acting Workshops", "Script Writing"],
//     },
//   ]

//   const tabs = [
//     { id: "facilities", label: "Facilities", icon: BookOpen },
//     { id: "sports", label: "Sports", icon: Trophy },
//     { id: "events", label: "Events", icon: Calendar },
//     { id: "clubs", label: "Clubs", icon: Users },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-purple-900 via-blue-800 to-indigo-900 text-white py-20">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
//             Vibrant Campus Life
//           </h1>
//           <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
//             Experience a holistic education with world-class facilities, exciting events, sports activities, and vibrant
//             student communities that shape your personality.
//           </p>
//           <div className="flex flex-wrap justify-center gap-8 text-center">
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//               <div className="text-3xl font-bold text-yellow-400">50+</div>
//               <div className="text-purple-200">Student Clubs</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//               <div className="text-3xl font-bold text-green-400">100+</div>
//               <div className="text-purple-200">Annual Events</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//               <div className="text-3xl font-bold text-blue-400">15+</div>
//               <div className="text-purple-200">Sports Activities</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-16">
//         {/* Campus Gallery */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Campus Gallery</h2>
//           <div className="grid lg:grid-cols-2 gap-8">
//             <div className="relative">
//               <img
//                 src={campusImages[selectedImage].src || "/placeholder.svg"}
//                 alt={campusImages[selectedImage].title}
//                 className="w-full h-96 object-cover rounded-2xl shadow-xl"
//               />
//               <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
//                 <h3 className="font-semibold">{campusImages[selectedImage].title}</h3>
//               </div>
//               <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
//                 <Play className="h-8 w-8 text-gray-700 ml-1" />
//               </button>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               {campusImages.map((image, index) => (
//                 <div
//                   key={index}
//                   className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
//                     selectedImage === index
//                       ? "ring-4 ring-blue-500 transform scale-105"
//                       : "hover:transform hover:scale-105"
//                   }`}
//                   onClick={() => setSelectedImage(index)}
//                 >
//                   <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-32 object-cover" />
//                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                     <span className="text-white text-sm font-medium text-center px-2">{image.title}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Tab Navigation */}
//         <div className="mb-12">
//           <div className="flex flex-wrap justify-center gap-4">
//             {tabs.map((tab) => {
//               const Icon = tab.icon
//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                     activeTab === tab.id
//                       ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105"
//                       : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
//                   }`}
//                 >
//                   <Icon className="h-5 w-5" />
//                   <span>{tab.label}</span>
//                 </button>
//               )
//             })}
//           </div>
//         </div>

//         {/* Tab Content */}
//         <div className="min-h-[600px]">
//           {/* Facilities Tab */}
//           {activeTab === "facilities" && (
//             <div className="space-y-8">
//               <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">World-Class Facilities</h2>
//               <div className="grid md:grid-cols-2 gap-8">
//                 {facilities.map((facility, index) => {
//                   const Icon = facility.icon
//                   return (
//                     <div
//                       key={index}
//                       className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//                     >
//                       <img
//                         src={facility.image || "/placeholder.svg"}
//                         alt={facility.title}
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="p-6">
//                         <div className="flex items-center mb-4">
//                           <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
//                             <Icon className="h-6 w-6 text-white" />
//                           </div>
//                           <h3 className="text-xl font-bold text-gray-900">{facility.title}</h3>
//                         </div>
//                         <p className="text-gray-600">{facility.description}</p>
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>
//           )}

//           {/* Sports Tab */}
//           {activeTab === "sports" && (
//             <div className="space-y-8">
//               <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Sports & Recreation</h2>
//               <div className="grid md:grid-cols-2 gap-8">
//                 {sportsActivities.map((sport, index) => {
//                   const Icon = sport.icon
//                   return (
//                     <div
//                       key={index}
//                       className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//                     >
//                       <div className="flex items-center mb-4">
//                         <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
//                           <Icon className="h-6 w-6 text-white" />
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900">{sport.title}</h3>
//                       </div>
//                       <p className="text-gray-600 mb-4">{sport.description}</p>
//                       <div>
//                         <h4 className="font-semibold text-gray-700 mb-2">Recent Achievements:</h4>
//                         <ul className="space-y-1">
//                           {sport.achievements.map((achievement, idx) => (
//                             <li key={idx} className="flex items-center text-sm text-gray-600">
//                               <Trophy className="h-4 w-4 text-yellow-500 mr-2" />
//                               {achievement}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>
//           )}

//           {/* Events Tab */}
//           {activeTab === "events" && (
//             <div className="space-y-8">
//               <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Campus Events</h2>
//               <div className="grid md:grid-cols-2 gap-8">
//                 {events.map((event, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//                   >
//                     <img
//                       src={event.image || "/placeholder.svg"}
//                       alt={event.title}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="p-6">
//                       <div className="flex items-center justify-between mb-4">
//                         <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
//                         <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
//                           {event.participants}
//                         </div>
//                       </div>
//                       <div className="flex items-center text-gray-600 mb-3">
//                         <Calendar className="h-4 w-4 mr-2" />
//                         {event.date}
//                       </div>
//                       <p className="text-gray-600">{event.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Clubs Tab */}
//           {activeTab === "clubs" && (
//             <div className="space-y-8">
//               <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Student Clubs & Societies</h2>
//               <div className="grid md:grid-cols-2 gap-8">
//                 {clubs.map((club, index) => {
//                   const Icon = club.icon
//                   return (
//                     <div
//                       key={index}
//                       className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//                     >
//                       <div className="flex items-center justify-between mb-4">
//                         <div className="flex items-center">
//                           <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
//                             <Icon className="h-6 w-6 text-white" />
//                           </div>
//                           <h3 className="text-xl font-bold text-gray-900">{club.name}</h3>
//                         </div>
//                         <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
//                           {club.members} Members
//                         </div>
//                       </div>
//                       <p className="text-gray-600 mb-4">{club.description}</p>
//                       <div>
//                         <h4 className="font-semibold text-gray-700 mb-2">Activities:</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {club.activities.map((activity, idx) => (
//                             <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
//                               {activity}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 })}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl text-white p-8 text-center">
//           <h2 className="text-3xl font-bold mb-4">Experience Campus Life</h2>
//           <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
//             Join our vibrant community and create memories that will last a lifetime. Schedule a campus visit to see our
//             facilities firsthand.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
//               Schedule Campus Tour
//             </button>
//             <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
//               Virtual Campus Tour
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client"

// import { Building, Users, Car, Shield, Wifi, BookOpen, Utensils, Heart, Music, Trophy, Target } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function Campus() {
//   const campusFeatures = [
//     {
//       icon: <Building className="h-8 w-8 text-blue-600" />,
//       title: "17-Acre Campus",
//       description: "Sprawling green campus with modern infrastructure",
//     },
//     {
//       icon: <Users className="h-8 w-8 text-blue-600" />,
//       title: "Hostel Facilities",
//       description: "Separate accommodations for boys and girls with full amenities",
//     },
//     {
//       icon: <Car className="h-8 w-8 text-blue-600" />,
//       title: "Transport Services",
//       description: "Excellent bus facility connecting major city routes",
//     },
//     {
//       icon: <Shield className="h-8 w-8 text-blue-600" />,
//       title: "360° Security",
//       description: "Complete safety with round-the-clock security monitoring",
//     },
//     {
//       icon: <Wifi className="h-8 w-8 text-blue-600" />,
//       title: "Smart Campus",
//       description: "Wi-Fi enabled campus with digital library and modern labs",
//     },
//     {
//       icon: <BookOpen className="h-8 w-8 text-blue-600" />,
//       title: "Digital Library",
//       description: "Comprehensive digital library with NPTEL courseware access",
//     },
//   ]

//   const sportsProgram = [
//     {
//       title: "Football Excellence Program",
//       description:
//         "Professional football training under AIFFF qualified coaches. Championship level sponsorship and professional development opportunities for aspiring footballers.",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     },
//     {
//       title: "Championship Training",
//       description:
//         "Professional coaching across cricket, football, basketball, and indoor games. State-level competition preparation with expert mentorship and full sponsorship support.",
//       image:
//         "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
//     },
//     {
//       title: "Fitness & Wellness",
//       description:
//         "Fully equipped gymnasium with modern cardio equipment. Yoga and meditation sessions for mental health balance. Free sports kits for all athletes.",
//       image:
//         "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
//     },
//     {
//       title: "Professional Sports Career",
//       description:
//         "BIMSR sponsors talented athletes for championship levels. Train under qualified coaches and pursue professional sports careers while completing your degree.",
//       image:
//         "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     },
//   ]

//   const labFacilities = [
//     {
//       title: "Smart Labs",
//       description:
//         "State-of-the-art laboratories equipped with high-end computers and latest software for hands-on learning experience.",
//       icon: <BookOpen className="h-6 w-6 text-blue-600" />,
//     },
//     {
//       title: "Language Lab",
//       description:
//         "Dedicated language laboratory for communication skills development with professional training modules and practice sessions.",
//       icon: <Users className="h-6 w-6 text-blue-600" />,
//     },
//     {
//       title: "Digital Library",
//       description:
//         "Comprehensive digital library with NPTEL courseware access and extensive online resources for research and study.",
//       icon: <BookOpen className="h-6 w-6 text-blue-600" />,
//     },
//   ]

//   const studentAmenities = [
//     {
//       title: "Dining and Banking",
//       description: "On-campus cafeteria and banking facilities for student convenience",
//       icon: <Utensils className="h-6 w-6 text-blue-600" />,
//     },
//     {
//       title: "Wellness Center",
//       description: "Dedicated yoga center and gym for physical and mental well-being",
//       icon: <Heart className="h-6 w-6 text-blue-600" />,
//     },
//     {
//       title: "Cultural Hub",
//       description: "Modern auditorium for events, seminars, and cultural activities",
//       icon: <Music className="h-6 w-6 text-blue-600" />,
//     },
//   ]

//   const footballHighlights = [
//     {
//       icon: <Trophy className="h-8 w-8" />,
//       title: "AIFFF Qualified Coaches",
//       description: "Train under certified professional football coaches",
//       color: "from-yellow-500 to-orange-500",
//     },
//     {
//       icon: <Target className="h-8 w-8" />,
//       title: "Championship Sponsorship",
//       description: "Full sponsorship for all championship levels",
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       icon: <Users className="h-8 w-8" />,
//       title: "Professional Development",
//       description: "Pathway to professional football career",
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       icon: <Shield className="h-8 w-8" />,
//       title: "Free Training & Kit",
//       description: "Completely free training and sports equipment",
//       color: "from-purple-500 to-pink-500",
//     },
//   ]

//   return (
//     <section id="campus" className="w-full py-12 md:py-24 lg:py-32 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Campus Life</div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
//               World-Class Campus Infrastructure
//             </h2>
//             <p className="max-w-3xl text-gray-600 md:text-xl">
//               Experience a vibrant 17-acre campus environment with state-of-the-art facilities designed to enhance your
//               learning journey and personal development.
//             </p>
//           </div>
//         </div>

//         {/* Campus Features */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//           {campusFeatures.map((feature, index) => (
//             <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow h-full">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 {feature.icon}
//               </div>
//               <h3 className="text-lg font-bold text-blue-800 mb-2">{feature.title}</h3>
//               <p className="text-gray-600 text-sm">{feature.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Football Excellence Program - Special Section */}
//         <div className="mb-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//           <div className="relative z-10">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold mb-6">⚽ Calling All Footballers! Want to Go Pro?</h2>
//               <p className="text-xl text-green-100 max-w-4xl mx-auto">
//                 BIMSR sponsors you for championship levels! Train under AIFFF qualified coaches for FREE and pursue your
//                 professional football dreams.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-4 gap-8">
//               {footballHighlights.map((highlight, index) => (
//                 <div key={index} className="text-center">
//                   <div
//                     className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}
//                   >
//                     {highlight.icon}
//                   </div>
//                   <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
//                   <p className="text-green-100 text-sm">{highlight.description}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="text-center mt-8">
//               <Link
//                 to="/contact"
//                 className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
//               >
//                 Join Football Excellence Program
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Sports Excellence Program */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Comprehensive Sports Excellence Program</h3>
//           <div className="grid md:grid-cols-2 gap-8">
//             {sportsProgram.map((program, index) => (
//               <div key={index} className="card overflow-hidden hover:shadow-lg transition-shadow h-full">
//                 <img
//                   src={program.image || "/placeholder.svg"}
//                   alt={program.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h4 className="text-lg font-bold text-blue-800 mb-2">{program.title}</h4>
//                   <p className="text-gray-600 text-sm">{program.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Advanced Laboratory Facilities */}
//         <div className="mb-16 bg-blue-50 rounded-xl p-8">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">
//             Advanced Laboratory and Learning Facilities
//           </h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {labFacilities.map((lab, index) => (
//               <div key={index} className="bg-white rounded-lg p-6 text-center h-full">
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   {lab.icon}
//                 </div>
//                 <h4 className="text-lg font-bold text-blue-800 mb-2">{lab.title}</h4>
//                 <p className="text-gray-600 text-sm">{lab.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Student Life Amenities */}
//         <div>
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Comprehensive Student Life Amenities</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {studentAmenities.map((amenity, index) => (
//               <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow h-full">
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   {amenity.icon}
//                 </div>
//                 <h4 className="text-lg font-bold text-blue-800 mb-2">{amenity.title}</h4>
//                 <p className="text-gray-600 text-sm">{amenity.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Campus Gallery */}
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Campus Gallery</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//             <img
//               src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80"
//               alt="Modern campus building"
//               className="w-full h-48 object-cover rounded-lg"
//             />
//             <img
//               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//               alt="Library facility"
//               className="w-full h-48 object-cover rounded-lg"
//             />
//             <img
//               src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//               alt="Computer laboratory"
//               className="w-full h-48 object-cover rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Campus Tour CTA */}
//         <div className="mt-16 text-center">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
//             <h3 className="text-2xl font-bold mb-4">Experience Our World-Class Campus</h3>
//             <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
//               Visit our campus and see firsthand the facilities that will shape your future. Schedule a personalized
//               tour today.
//             </p>
//             <Link
//               to="/contact"
//               className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
//             >
//               Schedule Campus Tour
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { Users, Calendar, Trophy, Music, Camera, BookOpen, Coffee, Wifi, Car } from "lucide-react"
import { Link } from "react-router-dom"

export default function CampusLife() {
  const [activeTab, setActiveTab] = useState("facilities")
  const [selectedImage, setSelectedImage] = useState(0)

  const campusImages = [
    {
      src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Main Campus Building",
      category: "facilities",
    },
    {
      // src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      // src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      title: "Modern Library",
      category: "facilities",
    },
    {
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Computer Labs",
      category: "facilities",
    },
    {
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
      title: "Sports Complex",
      category: "sports",
    },
    {
      // src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Student Hostel",
      category: "facilities",
    },
    {
      // src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Student Activities",
      category: "events",
    },
    {
      src: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Coffee,
      title: "Food Court & Cafeteria",
      description: "Multiple dining options with healthy and affordable meal plans",
      image:
        "https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Bus facility connecting major areas of Bangalore for easy commute",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
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

        {/* Football Excellence Program - Special Section */}
        <div className="mb-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">⚽ Calling All Footballers! Want to Go Pro?</h2>
              <p className="text-xl text-green-100 max-w-4xl mx-auto">
                BIMSR sponsors you for championship levels! Train under AIFFF qualified coaches for FREE and pursue your
                professional football dreams.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">AIFFF Qualified Coaches</h3>
                <p className="text-green-100 text-sm">Train under certified professional football coaches</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Championship Sponsorship</h3>
                <p className="text-green-100 text-sm">Full sponsorship for all championship levels</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Professional Development</h3>
                <p className="text-green-100 text-sm">Pathway to professional football career</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Free Training & Kit</h3>
                <p className="text-green-100 text-sm">Completely free training and sports equipment</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Join Football Excellence Program
              </Link>
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
            <Link
              to="/contact"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule Campus Tour
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
