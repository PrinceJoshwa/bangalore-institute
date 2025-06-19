// import { Award, BookOpen, Users, GraduationCap, Briefcase, Star } from "lucide-react"

// interface FacultyMember {
//   name: string
//   designation: string
//   qualification: string
//   specialization: string[]
//   experience: string
//   image: string
// }

// export default function Faculty() {
//   const facultyMembers: FacultyMember[] = [
//     {
//       name: "Dr. Rajesh Kumar",
//       designation: "Director & Professor",
//       qualification: "Ph.D in Management, MBA",
//       specialization: ["Strategic Management", "Leadership", "Organizational Behavior"],
//       experience: "20+ Years",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//     },
//     {
//       name: "Dr. Priya Sharma",
//       designation: "Professor - Marketing",
//       qualification: "Ph.D in Marketing, MBA",
//       specialization: ["Digital Marketing", "Consumer Behavior", "Brand Management"],
//       experience: "15+ Years",
//       image:
//         "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//     },
//     {
//       name: "Dr. Arun Patel",
//       designation: "Professor - Finance",
//       qualification: "Ph.D in Finance, CFA, MBA",
//       specialization: ["Corporate Finance", "Investment Analysis", "Financial Markets"],
//       experience: "18+ Years",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//     },
//     {
//       name: "Dr. Meera Nair",
//       designation: "Associate Professor - HR",
//       qualification: "Ph.D in HRM, MBA",
//       specialization: ["Human Resource Management", "Talent Acquisition", "Performance Management"],
//       experience: "12+ Years",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//     },
//     {
//       name: "Dr. Vikram Singh",
//       designation: "Professor - Operations",
//       qualification: "Ph.D in Operations, MBA",
//       specialization: ["Supply Chain Management", "Quality Management", "Project Management"],
//       experience: "16+ Years",
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//     },
//     {
//       name: "Dr. Anita Reddy",
//       designation: "Associate Professor - IT",
//       qualification: "Ph.D in Information Systems, MBA",
//       specialization: ["Information Technology", "Data Analytics", "Digital Transformation"],
//       experience: "10+ Years",
//       image:
//         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//     },
//   ]

//   const facultyStats = [
//     { number: "25+", label: "Expert Faculty" },
//     { number: "15+", label: "Ph.D Holders" },
//     { number: "300+", label: "Years Combined Experience" },
//     { number: "50+", label: "Research Publications" },
//   ]

//   return (
//     <section id="faculty" className="w-full py-12 md:py-24 lg:py-8 bg-blue-50">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Our Faculty</div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
//               Learn from Industry Experts
//             </h2>
//             <p className="max-w-3xl text-gray-600 md:text-xl">
//               Our distinguished faculty combines academic excellence with industry experience to provide world-class
//               management education.
//             </p>
//           </div>
//         </div>

//         {/* Faculty Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
//           {facultyStats.map((stat, index) => (
//             <div key={index} className="card p-6 text-center">
//               <span className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</span>
//               <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Faculty Highlights */}
//         <div className="grid md:grid-cols-3 gap-6 mb-16">
//           <div className="card p-6 text-center">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <GraduationCap className="h-8 w-8 text-blue-600" />
//             </div>
//             <h3 className="text-xl font-bold text-blue-800 mb-3">Academic Excellence</h3>
//             <p className="text-gray-600 text-sm">
//               Ph.D holders from premier institutions with extensive research and publication experience.
//             </p>
//           </div>

//           <div className="card p-6 text-center">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Briefcase className="h-8 w-8 text-blue-600" />
//             </div>
//             <h3 className="text-xl font-bold text-blue-800 mb-3">Industry Experience</h3>
//             <p className="text-gray-600 text-sm">
//               Practical insights from faculty with significant corporate and consulting experience.
//             </p>
//           </div>

//           <div className="card p-6 text-center">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <BookOpen className="h-8 w-8 text-blue-600" />
//             </div>
//             <h3 className="text-xl font-bold text-blue-800 mb-3">Research Focus</h3>
//             <p className="text-gray-600 text-sm">
//               Active researchers contributing to management knowledge through publications and case studies.
//             </p>
//           </div>
//         </div>

//         {/* Faculty Members */}
//         <div className="mb-12">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Meet Our Faculty</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {facultyMembers.map((faculty, index) => (
//               <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
//                 <div className="relative mb-4">
//                   <img
//                     src={faculty.image || "/placeholder.svg"}
//                     alt={faculty.name}
//                     className="w-24 h-24 rounded-full mx-auto object-cover"
//                   />
//                   <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
//                     <Star className="h-4 w-4 text-white" />
//                   </div>
//                 </div>
//                 <h4 className="text-lg font-bold text-blue-800 mb-1">{faculty.name}</h4>
//                 <p className="text-blue-600 font-semibold text-sm mb-2">{faculty.designation}</p>
//                 <p className="text-gray-600 text-xs mb-3">{faculty.qualification}</p>
//                 <div className="mb-3">
//                   <p className="text-xs font-semibold text-gray-700 mb-1">Specialization:</p>
//                   <div className="flex flex-wrap gap-1 justify-center">
//                     {faculty.specialization.map((spec, idx) => (
//                       <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
//                         {spec}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center gap-1 text-orange-600">
//                   <Award className="h-4 w-4" />
//                   <span className="text-xs font-semibold">{faculty.experience}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Faculty Development */}
//         <div className="bg-white rounded-xl p-8">
//           <div className="text-center mb-8">
//             <h3 className="text-2xl font-bold text-blue-800 mb-4">Continuous Faculty Development</h3>
//             <p className="text-gray-600 max-w-3xl mx-auto">
//               Our faculty regularly participates in professional development programs, conferences, and research
//               activities to stay current with industry trends and academic advancements.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="text-center">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <Users className="h-6 w-6 text-blue-600" />
//               </div>
//               <h4 className="font-semibold text-blue-800 mb-2">Industry Interaction</h4>
//               <p className="text-sm text-gray-600">Regular interaction with industry professionals and experts</p>
//             </div>
//             <div className="text-center">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <BookOpen className="h-6 w-6 text-blue-600" />
//               </div>
//               <h4 className="font-semibold text-blue-800 mb-2">Research Publications</h4>
//               <p className="text-sm text-gray-600">Active research and publication in reputed journals</p>
//             </div>
//             <div className="text-center">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <Award className="h-6 w-6 text-blue-600" />
//               </div>
//               <h4 className="font-semibold text-blue-800 mb-2">Professional Development</h4>
//               <p className="text-sm text-gray-600">Continuous learning through workshops and conferences</p>
//             </div>
//             <div className="text-center">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <GraduationCap className="h-6 w-6 text-blue-600" />
//               </div>
//               <h4 className="font-semibold text-blue-800 mb-2">Academic Excellence</h4>
//               <p className="text-sm text-gray-600">Commitment to highest standards of teaching and mentoring</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Award, BookOpen, Users, GraduationCap, Briefcase, Star } from "lucide-react"

interface FacultyMember {
  name: string
  designation: string
  qualification: string
  specialization: string[]
  experience: string
  image: string
}

export default function Faculty() {
  const facultyMembers: FacultyMember[] = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Director & Professor",
      qualification: "Ph.D in Management, MBA",
      specialization: ["Strategic Management", "Leadership", "AI in Business"],
      experience: "20+ Years",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Professor - Digital Marketing",
      qualification: "Ph.D in Marketing, MBA",
      specialization: ["Digital Marketing", "AI Marketing", "Brand Management"],
      experience: "15+ Years",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Dr. Arun Patel",
      designation: "Professor - Data Analytics",
      qualification: "Ph.D in Computer Science, MBA",
      specialization: ["Data Analytics", "Machine Learning", "Business Intelligence"],
      experience: "18+ Years",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Dr. Meera Nair",
      designation: "Associate Professor - ACCA",
      qualification: "Ph.D in Accounting, ACCA, MBA",
      specialization: ["Professional Accounting", "Financial Management", "ACCA Training"],
      experience: "12+ Years",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Prof. Vikram Singh",
      designation: "Industry Expert - Business Creation",
      qualification: "MBA, Entrepreneur",
      specialization: ["Entrepreneurship", "Business Incubation", "Startup Mentoring"],
      experience: "16+ Years",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Dr. Anita Reddy",
      designation: "Associate Professor - AI Technology",
      qualification: "Ph.D in AI, MBA",
      specialization: ["Artificial Intelligence", "Smart Learning", "Digital Transformation"],
      experience: "10+ Years",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ]

  const facultyStats = [
    { number: "25+", label: "Expert Faculty" },
    { number: "15+", label: "Ph.D Holders" },
    { number: "300+", label: "Years Combined Experience" },
    { number: "50+", label: "Industry Certifications" },
  ]

  return (
    <section id="faculty" className="w-full py-12 md:py-24 lg:py-8 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Our Faculty</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
              Learn from AI-Powered Education Experts
            </h2>
            <p className="max-w-3xl text-gray-600 md:text-xl">
              Our distinguished faculty combines academic excellence with industry experience and AI-powered teaching
              methodologies to provide world-class education.
            </p>
          </div>
        </div>

        {/* Faculty Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          {facultyStats.map((stat, index) => (
            <div key={index} className="card p-6 text-center">
              <span className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</span>
              <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Faculty Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">Academic Excellence</h3>
            <p className="text-gray-600 text-sm">
              Ph.D holders from premier institutions with extensive research and AI-powered teaching experience.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">Industry Experience</h3>
            <p className="text-gray-600 text-sm">
              Practical insights from faculty with significant corporate experience and industry certifications.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">AI-Powered Teaching</h3>
            <p className="text-gray-600 text-sm">
              Innovative teaching methods using AI-induced smart screens and personalized learning approaches.
            </p>
          </div>
        </div>

        {/* Faculty Members */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Meet Our Faculty</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="relative mb-4">
                  <img
                    src={faculty.image || "/placeholder.svg"}
                    alt={faculty.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-1">{faculty.name}</h4>
                <p className="text-blue-600 font-semibold text-sm mb-2">{faculty.designation}</p>
                <p className="text-gray-600 text-xs mb-3">{faculty.qualification}</p>
                <div className="mb-3">
                  <p className="text-xs font-semibold text-gray-700 mb-1">Specialization:</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {faculty.specialization.map((spec, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1 text-orange-600">
                  <Award className="h-4 w-4" />
                  <span className="text-xs font-semibold">{faculty.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Development */}
        <div className="bg-white rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">AI-Powered Faculty Development</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our faculty regularly participates in AI and technology training programs, industry conferences, and
              research activities to stay current with the latest educational innovations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">Industry Interaction</h4>
              <p className="text-sm text-gray-600">Regular interaction with industry professionals and AI experts</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">Research & Innovation</h4>
              <p className="text-sm text-gray-600">
                Active research in AI-powered education and modern teaching methods
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">Professional Development</h4>
              <p className="text-sm text-gray-600">
                Continuous learning through AI workshops and technology conferences
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">Teaching Excellence</h4>
              <p className="text-sm text-gray-600">
                Commitment to AI-powered teaching and personalized student mentoring
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
