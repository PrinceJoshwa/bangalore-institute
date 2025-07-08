

// "use client"

// import { useState } from "react"
// import { Star, Award, BookOpen, Users, ChevronLeft, ChevronRight, Mail, Linkedin } from "lucide-react"

// export default function Faculty() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [selectedDepartment, setSelectedDepartment] = useState("all")

//   const facultyMembers = [
//     {
//       id: 1,
//       name: "Dr. Rajesh Kumar",
//       designation: "Professor & Head",
//       department: "Computer Science",
//       qualification: "Ph.D. in Computer Science, IIT Delhi",
//       experience: "15+ Years",
//       specialization: "Full Stack Development, AI/ML",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       rating: 4.9,
//       publications: 45,
//       projects: 12,
//       email: "rajesh.kumar@bimsr.edu.in",
//       linkedin: "#",
//       achievements: ["Best Faculty Award 2023", "Research Excellence Award", "Industry Collaboration Award"],
//     },
//     {
//       id: 2,
//       name: "Prof. Priya Sharma",
//       designation: "Associate Professor",
//       department: "Data Analytics",
//       qualification: "Ph.D. in Statistics, ISI Bangalore",
//       experience: "12+ Years",
//       specialization: "Data Science, Machine Learning",
//       image:
//         "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       rating: 4.8,
//       publications: 38,
//       projects: 15,
//       email: "priya.sharma@bimsr.edu.in",
//       linkedin: "#",
//       achievements: ["Outstanding Researcher 2023", "Data Science Excellence Award", "Student Choice Award"],
//     },
//     {
//       id: 3,
//       name: "Dr. Amit Patel",
//       designation: "Professor",
//       department: "Digital Marketing",
//       qualification: "Ph.D. in Marketing, IIM Bangalore",
//       experience: "18+ Years",
//       specialization: "Digital Strategy, Social Media Marketing",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       rating: 4.9,
//       publications: 52,
//       projects: 20,
//       email: "amit.patel@bimsr.edu.in",
//       linkedin: "#",
//       achievements: ["Marketing Excellence Award", "Industry Impact Award", "Innovation in Teaching Award"],
//     },
//     {
//       id: 4,
//       name: "Prof. Sneha Reddy",
//       designation: "Assistant Professor",
//       department: "Commerce",
//       qualification: "Ph.D. in Commerce, Bangalore University",
//       experience: "10+ Years",
//       specialization: "Financial Management, ACCA",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       rating: 4.7,
//       publications: 28,
//       projects: 8,
//       email: "sneha.reddy@bimsr.edu.in",
//       linkedin: "#",
//       achievements: ["Young Faculty Award", "ACCA Excellence Award", "Research Publication Award"],
//     },
//     {
//       id: 5,
//       name: "Dr. Vikram Singh",
//       designation: "Professor",
//       department: "Management",
//       qualification: "Ph.D. in Management, IIM Ahmedabad",
//       experience: "20+ Years",
//       specialization: "Strategic Management, Leadership",
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       rating: 4.9,
//       publications: 65,
//       projects: 25,
//       email: "vikram.singh@bimsr.edu.in",
//       linkedin: "#",
//       achievements: ["Lifetime Achievement Award", "Management Excellence Award", "Industry Leadership Award"],
//     },
//     {
//       id: 6,
//       name: "Prof. Kavya Nair",
//       designation: "Associate Professor",
//       department: "Computer Science",
//       qualification: "M.Tech in CSE, NIT Calicut",
//       experience: "8+ Years",
//       specialization: "Web Development, Cloud Computing",
//       image:
//         "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
//       rating: 4.8,
//       publications: 22,
//       projects: 10,
//       email: "kavya.nair@bimsr.edu.in",
//       linkedin: "#",
//       achievements: ["Tech Innovation Award", "Best Mentor Award", "Cloud Computing Excellence"],
//     },
//   ]

//   const departments = [
//     { id: "all", name: "All Departments" },
//     { id: "Computer Science", name: "Computer Science" },
//     { id: "Data Analytics", name: "Data Analytics" },
//     { id: "Digital Marketing", name: "Digital Marketing" },
//     { id: "Commerce", name: "Commerce" },
//     { id: "Management", name: "Management" },
//   ]

//   const filteredFaculty =
//     selectedDepartment === "all"
//       ? facultyMembers
//       : facultyMembers.filter((faculty) => faculty.department === selectedDepartment)

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % filteredFaculty.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + filteredFaculty.length) % filteredFaculty.length)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
//             Our Distinguished Faculty
//           </h1>
//           <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
//             Learn from industry experts and renowned academicians who bring years of experience and cutting-edge
//             knowledge to shape your future.
//           </p>
//           <div className="flex flex-wrap justify-center gap-8 text-center">
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//               <div className="text-3xl font-bold text-yellow-400">50+</div>
//               <div className="text-blue-200">Expert Faculty</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//               <div className="text-3xl font-bold text-green-400">15+</div>
//               <div className="text-blue-200">Years Avg Experience</div>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
//               <div className="text-3xl font-bold text-purple-400">200+</div>
//               <div className="text-blue-200">Research Publications</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-16">
//         {/* Department Filter */}
//         <div className="mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Filter by Department</h2>
//           <div className="flex flex-wrap justify-center gap-4">
//             {departments.map((dept) => (
//               <button
//                 key={dept.id}
//                 onClick={() => {
//                   setSelectedDepartment(dept.id)
//                   setCurrentSlide(0)
//                 }}
//                 className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                   selectedDepartment === dept.id
//                     ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105"
//                     : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md"
//                 }`}
//               >
//                 {dept.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Featured Faculty Carousel */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Featured Faculty Member</h2>
//           <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
//             <button
//               onClick={prevSlide}
//               className="absolute left-4 z-10 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
//             >
//               <ChevronLeft className="h-6 w-6 text-gray-600" />
//             </button>

//             <div className="w-full p-8">
//               {filteredFaculty.length > 0 && (
//                 <div className="grid lg:grid-cols-2 gap-8 items-center">
//                   <div className="text-center lg:text-left">
//                     <img
//                       src={filteredFaculty[currentSlide].image || "/placeholder.svg"}
//                       alt={filteredFaculty[currentSlide].name}
//                       className="w-64 h-64 rounded-2xl object-cover mx-auto lg:mx-0 shadow-xl"
//                     />
//                   </div>
//                   <div className="space-y-6">
//                     <div>
//                       <h3 className="text-3xl font-bold text-gray-900 mb-2">{filteredFaculty[currentSlide].name}</h3>
//                       <p className="text-xl text-blue-600 font-semibold mb-1">
//                         {filteredFaculty[currentSlide].designation}
//                       </p>
//                       <p className="text-gray-600">{filteredFaculty[currentSlide].department} Department</p>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="bg-blue-50 p-4 rounded-xl">
//                         <div className="text-2xl font-bold text-blue-600">{filteredFaculty[currentSlide].rating}</div>
//                         <div className="text-sm text-gray-600">Student Rating</div>
//                         <div className="flex mt-1">
//                           {[...Array(5)].map((_, i) => (
//                             <Star
//                               key={i}
//                               className={`h-4 w-4 ${
//                                 i < Math.floor(filteredFaculty[currentSlide].rating)
//                                   ? "text-yellow-400 fill-current"
//                                   : "text-gray-300"
//                               }`}
//                             />
//                           ))}
//                         </div>
//                       </div>
//                       <div className="bg-green-50 p-4 rounded-xl">
//                         <div className="text-2xl font-bold text-green-600">
//                           {filteredFaculty[currentSlide].publications}
//                         </div>
//                         <div className="text-sm text-gray-600">Publications</div>
//                       </div>
//                     </div>

//                     <div className="space-y-3">
//                       <div>
//                         <span className="font-semibold text-gray-700">Qualification: </span>
//                         <span className="text-gray-600">{filteredFaculty[currentSlide].qualification}</span>
//                       </div>
//                       <div>
//                         <span className="font-semibold text-gray-700">Experience: </span>
//                         <span className="text-gray-600">{filteredFaculty[currentSlide].experience}</span>
//                       </div>
//                       <div>
//                         <span className="font-semibold text-gray-700">Specialization: </span>
//                         <span className="text-gray-600">{filteredFaculty[currentSlide].specialization}</span>
//                       </div>
//                     </div>

//                     <div>
//                       <h4 className="font-semibold text-gray-700 mb-2">Recent Achievements:</h4>
//                       <div className="space-y-1">
//                         {filteredFaculty[currentSlide].achievements.map((achievement, index) => (
//                           <div key={index} className="flex items-center text-sm text-gray-600">
//                             <Award className="h-4 w-4 text-yellow-500 mr-2" />
//                             {achievement}
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="flex space-x-4">
//                       <a
//                         href={`mailto:${filteredFaculty[currentSlide].email}`}
//                         className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
//                       >
//                         <Mail className="h-4 w-4 mr-2" />
//                         Email
//                       </a>
//                       <a
//                         href={filteredFaculty[currentSlide].linkedin}
//                         className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
//                       >
//                         <Linkedin className="h-4 w-4 mr-2" />
//                         LinkedIn
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <button
//               onClick={nextSlide}
//               className="absolute right-4 z-10 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
//             >
//               <ChevronRight className="h-6 w-6 text-gray-600" />
//             </button>

//             {/* Slide Indicators */}
//             <div className="flex justify-center space-x-2 pb-6">
//               {filteredFaculty.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     currentSlide === index ? "bg-blue-600" : "bg-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* All Faculty Grid */}
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">All Faculty Members</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredFaculty.map((faculty) => (
//               <div
//                 key={faculty.id}
//                 className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="relative">
//                   <img
//                     src={faculty.image || "/placeholder.svg"}
//                     alt={faculty.name}
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
//                     <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
//                     <span className="text-sm font-semibold">{faculty.rating}</span>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-1">{faculty.name}</h3>
//                   <p className="text-blue-600 font-semibold mb-1">{faculty.designation}</p>
//                   <p className="text-gray-600 text-sm mb-4">{faculty.department} Department</p>

//                   <div className="space-y-2 mb-4">
//                     <div className="text-sm">
//                       <span className="font-semibold text-gray-700">Experience: </span>
//                       <span className="text-gray-600">{faculty.experience}</span>
//                     </div>
//                     <div className="text-sm">
//                       <span className="font-semibold text-gray-700">Specialization: </span>
//                       <span className="text-gray-600">{faculty.specialization}</span>
//                     </div>
//                   </div>

//                   <div className="flex justify-between items-center mb-4">
//                     <div className="flex items-center text-sm text-gray-600">
//                       <BookOpen className="h-4 w-4 mr-1" />
//                       {faculty.publications} Publications
//                     </div>
//                     <div className="flex items-center text-sm text-gray-600">
//                       <Users className="h-4 w-4 mr-1" />
//                       {faculty.projects} Projects
//                     </div>
//                   </div>

//                   <div className="flex space-x-2">
//                     <a
//                       href={`mailto:${faculty.email}`}
//                       className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 px-3 rounded-lg text-center text-sm font-medium transition-colors"
//                     >
//                       Contact
//                     </a>
//                     <a
//                       href={faculty.linkedin}
//                       className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-600 py-2 px-3 rounded-lg text-center text-sm font-medium transition-colors"
//                     >
//                       Profile
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Faculty Stats */}
//         <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white p-8">
//           <h2 className="text-3xl font-bold text-center mb-8">Faculty Excellence</h2>
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
//               <div className="text-blue-100">Expert Faculty</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-green-400 mb-2">250+</div>
//               <div className="text-blue-100">Research Papers</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
//               <div className="text-blue-100">Industry Projects</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-pink-400 mb-2">4.8</div>
//               <div className="text-blue-100">Average Rating</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Award, BookOpen, Users, Star, Mail, Phone, Linkedin } from "lucide-react"

export default function Faculty() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Head of Computer Science",
      department: "computer-science",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["Ph.D. in Computer Science", "M.Tech in Software Engineering", "B.Tech in CSE"],
      experience: "15+ years",
      specialization: ["Machine Learning", "Data Structures", "Software Engineering", "Research Methodology"],
      achievements: [
        "Published 25+ research papers in international journals",
        "Recipient of Best Faculty Award 2023",
        "Led 10+ industry collaboration projects",
      ],
      email: "rajesh.kumar@bimsr.edu.in",
      phone: "+91 9876543210",
      linkedin: "linkedin.com/in/rajeshkumar",
    },
    {
      id: 2,
      name: "Prof. Priya Sharma",
      designation: "Associate Professor - Data Analytics",
      department: "computer-science",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["M.Tech in Data Science", "B.Tech in Information Technology", "Certified Data Scientist"],
      experience: "12+ years",
      specialization: ["Data Analytics", "Python Programming", "Statistical Analysis", "Business Intelligence"],
      achievements: [
        "Industry expert with 8 years at Microsoft",
        "Trained 500+ students in data analytics",
        "Consultant for Fortune 500 companies",
      ],
      email: "priya.sharma@bimsr.edu.in",
      phone: "+91 9876543211",
      linkedin: "linkedin.com/in/priyasharma",
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      designation: "Professor - Full Stack Development",
      department: "computer-science",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["Ph.D. in Software Engineering", "M.S. in Computer Science", "B.Tech in CSE"],
      experience: "18+ years",
      specialization: ["Full Stack Development", "Web Technologies", "Cloud Computing", "DevOps"],
      achievements: [
        "Former Senior Architect at Amazon",
        "Open source contributor with 50K+ GitHub stars",
        "Speaker at 20+ international conferences",
      ],
      email: "amit.patel@bimsr.edu.in",
      phone: "+91 9876543212",
      linkedin: "linkedin.com/in/amitpatel",
    },
    {
      id: 4,
      name: "Prof. Sneha Reddy",
      designation: "Associate Professor - Digital Marketing",
      department: "business",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["MBA in Marketing", "B.Com in Business Administration", "Google Ads Certified"],
      experience: "10+ years",
      specialization: ["Digital Marketing", "Social Media Strategy", "Brand Management", "Consumer Behavior"],
      achievements: [
        "Ex-Marketing Head at Flipkart",
        "Managed campaigns worth ₹50+ crores",
        "Certified trainer for Google and Facebook",
      ],
      email: "sneha.reddy@bimsr.edu.in",
      phone: "+91 9876543213",
      linkedin: "linkedin.com/in/snehareddy",
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      designation: "Professor - Business Administration",
      department: "business",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["Ph.D. in Management", "MBA in Finance", "B.Com in Accounting"],
      experience: "20+ years",
      specialization: ["Strategic Management", "Financial Analysis", "Leadership", "Entrepreneurship"],
      achievements: ["Former VP at HDFC Bank", "Mentored 100+ startups", "Author of 3 business management books"],
      email: "vikram.singh@bimsr.edu.in",
      phone: "+91 9876543214",
      linkedin: "linkedin.com/in/vikramsingh",
    },
    {
      id: 6,
      name: "Prof. Kavya Nair",
      designation: "Assistant Professor - Commerce & ACCA",
      department: "commerce",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["M.Com in Accounting", "ACCA Qualified", "B.Com in Finance"],
      experience: "8+ years",
      specialization: ["Financial Accounting", "Taxation", "Audit & Assurance", "Corporate Finance"],
      achievements: ["ACCA Gold Medalist", "Ex-Senior Auditor at Deloitte", "100% student pass rate in ACCA exams"],
      email: "kavya.nair@bimsr.edu.in",
      phone: "+91 9876543215",
      linkedin: "linkedin.com/in/kavyanair",
    },
  ]

  const departments = [
    { id: "all", name: "All Departments", count: facultyMembers.length },
    {
      id: "computer-science",
      name: "Computer Science",
      count: facultyMembers.filter((f) => f.department === "computer-science").length,
    },
    {
      id: "business",
      name: "Business Administration",
      count: facultyMembers.filter((f) => f.department === "business").length,
    },
    {
      id: "commerce",
      name: "Commerce & ACCA",
      count: facultyMembers.filter((f) => f.department === "commerce").length,
    },
  ]

  const filteredFaculty =
    selectedDepartment === "all"
      ? facultyMembers
      : facultyMembers.filter((member) => member.department === selectedDepartment)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredFaculty.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredFaculty.length) % filteredFaculty.length)
  }

  const stats = [
    { label: "Expert Faculty", value: "50+", icon: <Users className="h-8 w-8" /> },
    { label: "Years of Experience", value: "15+", icon: <Award className="h-8 w-8" /> },
    { label: "Research Papers", value: "200+", icon: <BookOpen className="h-8 w-8" /> },
    { label: "Industry Partnerships", value: "100+", icon: <Star className="h-8 w-8" /> },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Expert Faculty</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Meet Our</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Distinguished Faculty
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from industry experts and academic leaders who bring real-world experience and cutting-edge knowledge
            to the classroom
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Department Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => {
                    setSelectedDepartment(dept.id)
                    setCurrentSlide(0)
                  }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    selectedDepartment === dept.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <span>{dept.name}</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      selectedDepartment === dept.id ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {dept.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Faculty Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {filteredFaculty.map((faculty) => (
                <div key={faculty.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Faculty Image */}
                      <div className="relative">
                        <img
                          src={faculty.image || "/placeholder.svg"}
                          alt={faculty.name}
                          className="w-full h-96 lg:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <h2 className="text-3xl font-bold mb-2">{faculty.name}</h2>
                          <p className="text-xl text-blue-200">{faculty.designation}</p>
                        </div>
                      </div>

                      {/* Faculty Details */}
                      <div className="p-8 lg:p-12">
                        <div className="space-y-8">
                          {/* Qualifications */}
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                              <Award className="h-6 w-6 text-blue-600 mr-2" />
                              Qualifications
                            </h3>
                            <div className="space-y-2">
                              {faculty.qualifications.map((qual, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                  <span className="text-gray-700">{qual}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Experience & Specialization */}
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                              <p className="text-blue-600 font-bold text-lg">{faculty.experience}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Specialization</h4>
                              <div className="flex flex-wrap gap-2">
                                {faculty.specialization.slice(0, 2).map((spec, index) => (
                                  <span
                                    key={index}
                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                              <Star className="h-6 w-6 text-yellow-500 mr-2" />
                              Key Achievements
                            </h3>
                            <div className="space-y-3">
                              {faculty.achievements.map((achievement, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                                  <span className="text-gray-700">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Contact Information */}
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                            <h4 className="font-semibold text-gray-900 mb-4">Contact Information</h4>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-blue-600" />
                                <span className="text-gray-700">{faculty.email}</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-green-600" />
                                <span className="text-gray-700">{faculty.phone}</span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <Linkedin className="h-5 w-5 text-blue-700" />
                                <span className="text-gray-700">{faculty.linkedin}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {filteredFaculty.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:text-blue-600 transition-all duration-200 z-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:text-blue-600 transition-all duration-200 z-10"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {filteredFaculty.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {filteredFaculty.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Faculty Excellence Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6">Why Our Faculty Stands Out</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Our distinguished faculty combines academic excellence with industry experience to provide world-class
              education
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Industry Experience</h3>
                <p className="text-blue-100">Real-world expertise from leading companies and organizations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Research Excellence</h3>
                <p className="text-blue-100">Active researchers contributing to cutting-edge knowledge</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Student-Centric Approach</h3>
                <p className="text-blue-100">Dedicated mentors committed to student success and growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
