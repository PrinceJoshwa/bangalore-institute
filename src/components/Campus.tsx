// import { Building, Users, Car, Shield, Wifi, BookOpen, Utensils, Heart, Music } from "lucide-react"

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
//       title: "Championship Training",
//       description:
//         "Professional coaching across cricket, football, basketball, and indoor games. State-level competition preparation with expert mentorship.",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     },
//     {
//       title: "Fitness & Wellness",
//       description:
//         "Fully equipped gymnasium with modern cardio equipment. Yoga and meditation sessions for mental health balance.",
//       image:
//         "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
//     },
//     {
//       title: "Tournament Participation",
//       description:
//         "Regular inter-college competitions and national level tournaments. Scholarship opportunities for outstanding athletic performance.",
//       image:
//         "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
//     },
//     {
//       title: "Team Building",
//       description:
//         "Leadership development through sports activities. Character building and discipline training for holistic personality development.",
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

//   return (
//     <section id="campus" className="w-full py-12 md:py-24 lg:py-8 bg-white">
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
//             <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 {feature.icon}
//               </div>
//               <h3 className="text-lg font-bold text-blue-800 mb-2">{feature.title}</h3>
//               <p className="text-gray-600 text-sm">{feature.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Sports Excellence Program */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Comprehensive Sports Excellence Program</h3>
//           <div className="grid md:grid-cols-2 gap-8">
//             {sportsProgram.map((program, index) => (
//               <div key={index} className="card overflow-hidden hover:shadow-lg transition-shadow">
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
//               <div key={index} className="bg-white rounded-lg p-6 text-center">
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
//               <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
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
//       </div>
//     </section>
//   )
// }

import { Building, Users, Car, Shield, Wifi, BookOpen, Utensils, Heart, Music } from "lucide-react";

export default function Campus() {
  const campusFeatures = [
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "17-Acre Campus",
      description: "Sprawling green campus with modern infrastructure",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Hostel Facilities",
      description: "Separate accommodations for boys and girls with full amenities",
    },
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: "Transport Services",
      description: "Excellent bus facility connecting major city routes",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "360° Security",
      description: "Complete safety with round-the-clock security monitoring",
    },
    {
      icon: <Wifi className="h-8 w-8 text-blue-600" />,
      title: "Smart Campus",
      description: "Wi-Fi enabled campus with digital library and modern labs",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Digital Library",
      description: "Comprehensive digital library with NPTEL courseware access",
    },
  ];

  const sportsProgram = [
    {
      title: "Championship Training",
      description:
        "Professional coaching across cricket, football, basketball, and indoor games. State-level competition preparation with expert mentorship.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Fitness & Wellness",
      description:
        "Fully equipped gymnasium with modern cardio equipment. Yoga and meditation sessions for mental health balance.",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1975&q=80",
    },
    {
      title: "Tournament Participation",
      description:
        "Regular inter-college competitions and national level tournaments. Scholarship opportunities for outstanding athletic performance.",
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
    },
    {
      title: "Team Building",
      description:
        "Leadership development through sports activities. Character building and discipline training for holistic personality development.",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const labFacilities = [
    {
      title: "Smart Labs",
      description:
        "State-of-the-art laboratories equipped with high-end computers and latest software for hands-on learning experience.",
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Language Lab",
      description:
        "Dedicated language laboratory for communication skills development with professional training modules and practice sessions.",
      icon: <Users className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Digital Library",
      description:
        "Comprehensive digital library with NPTEL courseware access and extensive online resources for research and study.",
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    },
  ];

  const studentAmenities = [
    {
      title: "Dining and Banking",
      description: "On-campus cafeteria and banking facilities for student convenience",
      icon: <Utensils className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Wellness Center",
      description: "Dedicated yoga center and gym for physical and mental well-being",
      icon: <Heart className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Cultural Hub",
      description: "Modern auditorium for events, seminars, and cultural activities",
      icon: <Music className="h-6 w-6 text-blue-600" />,
    },
  ];

  return (
    <section id="campus" className="w-full py-12 md:py-24 lg:py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Campus Life</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
              World-Class Campus Infrastructure
            </h2>
            <p className="max-w-3xl text-gray-600 md:text-xl">
              Experience a vibrant 17-acre campus environment with state-of-the-art facilities designed to enhance your
              learning journey and personal development.
            </p>
          </div>
        </div>

        {/* Campus Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {campusFeatures.map((feature, index) => (
            <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Sports Excellence Program */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Comprehensive Sports Excellence Program</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {sportsProgram.map((program, index) => (
              <div
                key={index}
                className="card overflow-hidden hover:shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-blue-800 mb-2">{program.title}</h4>
                  <p className="text-gray-600 text-sm">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Laboratory Facilities */}
        <div className="mb-16 bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">
            Advanced Laboratory and Learning Facilities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {labFacilities.map((lab, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {lab.icon}
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-2">{lab.title}</h4>
                <p className="text-gray-600 text-sm">{lab.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Student Life Amenities */}
        <div>
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Comprehensive Student Life Amenities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {studentAmenities.map((amenity, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {amenity.icon}
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-2">{amenity.title}</h4>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Campus Gallery</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
            {[
              "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1986&q=80",
            //   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            //   "https://images.unsplash.com/photo-1523268161032-6d56f86e9a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Campus image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
