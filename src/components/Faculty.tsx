// "use client"

// import { useState } from "react"
// import { ChevronLeft, ChevronRight, Award, BookOpen, Users, Star, Mail, Phone, Linkedin } from "lucide-react"

// export default function Faculty() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [selectedDepartment, setSelectedDepartment] = useState("all")

//   const facultyMembers = [
//     {
//       id: 1,
//       name: "Dr. Rajesh Kumar",
//       designation: "Professor & Head of Computer Science",
//       department: "computer-science",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       qualifications: ["Ph.D. in Computer Science", "M.Tech in Software Engineering", "B.Tech in CSE"],
//       experience: "15+ years",
//       specialization: ["Machine Learning", "Data Structures", "Software Engineering", "Research Methodology"],
//       achievements: [
//         "Published 25+ research papers in international journals",
//         "Recipient of Best Faculty Award 2023",
//         "Led 10+ industry collaboration projects",
//       ],
//       email: "rajesh.kumar@bimsr.edu.in",
//       phone: "+91 9876543210",
//       linkedin: "linkedin.com/in/rajeshkumar",
//     },
//     {
//       id: 2,
//       name: "Prof. Priya Sharma",
//       designation: "Associate Professor - Data Analytics",
//       department: "computer-science",
//       image:
//         "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       qualifications: ["M.Tech in Data Science", "B.Tech in Information Technology", "Certified Data Scientist"],
//       experience: "12+ years",
//       specialization: ["Data Analytics", "Python Programming", "Statistical Analysis", "Business Intelligence"],
//       achievements: [
//         "Industry expert with 8 years at Microsoft",
//         "Trained 500+ students in data analytics",
//         "Consultant for Fortune 500 companies",
//       ],
//       email: "priya.sharma@bimsr.edu.in",
//       phone: "+91 9876543211",
//       linkedin: "linkedin.com/in/priyasharma",
//     },
//     {
//       id: 3,
//       name: "Dr. Amit Patel",
//       designation: "Professor - Full Stack Development",
//       department: "computer-science",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       qualifications: ["Ph.D. in Software Engineering", "M.S. in Computer Science", "B.Tech in CSE"],
//       experience: "18+ years",
//       specialization: ["Full Stack Development", "Web Technologies", "Cloud Computing", "DevOps"],
//       achievements: [
//         "Former Senior Architect at Amazon",
//         "Open source contributor with 50K+ GitHub stars",
//         "Speaker at 20+ international conferences",
//       ],
//       email: "amit.patel@bimsr.edu.in",
//       phone: "+91 9876543212",
//       linkedin: "linkedin.com/in/amitpatel",
//     },
//     {
//       id: 4,
//       name: "Prof. Sneha Reddy",
//       designation: "Associate Professor - Digital Marketing",
//       department: "business",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       qualifications: ["MBA in Marketing", "B.Com in Business Administration", "Google Ads Certified"],
//       experience: "10+ years",
//       specialization: ["Digital Marketing", "Social Media Strategy", "Brand Management", "Consumer Behavior"],
//       achievements: [
//         "Ex-Marketing Head at Flipkart",
//         "Managed campaigns worth ₹50+ crores",
//         "Certified trainer for Google and Facebook",
//       ],
//       email: "sneha.reddy@bimsr.edu.in",
//       phone: "+91 9876543213",
//       linkedin: "linkedin.com/in/snehareddy",
//     },
//     {
//       id: 5,
//       name: "Dr. Vikram Singh",
//       designation: "Professor - Business Administration",
//       department: "business",
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       qualifications: ["Ph.D. in Management", "MBA in Finance", "B.Com in Accounting"],
//       experience: "20+ years",
//       specialization: ["Strategic Management", "Financial Analysis", "Leadership", "Entrepreneurship"],
//       achievements: ["Former VP at HDFC Bank", "Mentored 100+ startups", "Author of 3 business management books"],
//       email: "vikram.singh@bimsr.edu.in",
//       phone: "+91 9876543214",
//       linkedin: "linkedin.com/in/vikramsingh",
//     },
//     {
//       id: 6,
//       name: "Prof. Kavya Nair",
//       designation: "Assistant Professor - Commerce & ACCA",
//       department: "commerce",
//       image:
//         "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       qualifications: ["M.Com in Accounting", "ACCA Qualified", "B.Com in Finance"],
//       experience: "8+ years",
//       specialization: ["Financial Accounting", "Taxation", "Audit & Assurance", "Corporate Finance"],
//       achievements: ["ACCA Gold Medalist", "Ex-Senior Auditor at Deloitte", "100% student pass rate in ACCA exams"],
//       email: "kavya.nair@bimsr.edu.in",
//       phone: "+91 9876543215",
//       linkedin: "linkedin.com/in/kavyanair",
//     },
//   ]

//   const departments = [
//     { id: "all", name: "All Departments", count: facultyMembers.length },
//     {
//       id: "computer-science",
//       name: "Computer Science",
//       count: facultyMembers.filter((f) => f.department === "computer-science").length,
//     },
//     {
//       id: "business",
//       name: "Business Administration",
//       count: facultyMembers.filter((f) => f.department === "business").length,
//     },
//     {
//       id: "commerce",
//       name: "Commerce & ACCA",
//       count: facultyMembers.filter((f) => f.department === "commerce").length,
//     },
//   ]

//   const filteredFaculty =
//     selectedDepartment === "all"
//       ? facultyMembers
//       : facultyMembers.filter((member) => member.department === selectedDepartment)

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % filteredFaculty.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + filteredFaculty.length) % filteredFaculty.length)
//   }

//   const stats = [
//     { label: "Expert Faculty", value: "50+", icon: <Users className="h-8 w-8" /> },
//     { label: "Years of Experience", value: "15+", icon: <Award className="h-8 w-8" /> },
//     { label: "Research Papers", value: "200+", icon: <BookOpen className="h-8 w-8" /> },
//     { label: "Industry Partnerships", value: "100+", icon: <Star className="h-8 w-8" /> },
//   ]

//   return (
//     <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-6">
//             <Users className="h-5 w-5 text-blue-600" />
//             <span className="text-blue-700 font-semibold">Expert Faculty</span>
//           </div>
//           <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Meet Our</span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Distinguished Faculty
//             </span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Learn from industry experts and academic leaders who bring real-world experience and cutting-edge knowledge
//             to the classroom
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="grid md:grid-cols-4 gap-8 mb-16">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
//             >
//               <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
//                 {stat.icon}
//               </div>
//               <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
//               <div className="text-gray-600 font-medium">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Department Filter */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
//             <div className="flex flex-wrap gap-2">
//               {departments.map((dept) => (
//                 <button
//                   key={dept.id}
//                   onClick={() => {
//                     setSelectedDepartment(dept.id)
//                     setCurrentSlide(0)
//                   }}
//                   className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
//                     selectedDepartment === dept.id
//                       ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                       : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
//                   }`}
//                 >
//                   <span>{dept.name}</span>
//                   <span
//                     className={`text-xs px-2 py-1 rounded-full ${
//                       selectedDepartment === dept.id ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"
//                     }`}
//                   >
//                     {dept.count}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Faculty Carousel */}
//         <div className="relative">
//           <div className="overflow-hidden rounded-3xl">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//               {filteredFaculty.map((faculty) => (
//                 <div key={faculty.id} className="w-full flex-shrink-0">
//                   <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
//                     <div className="grid lg:grid-cols-2 gap-0">
//                       {/* Faculty Image */}
//                       <div className="relative">
//                         <img
//                           src={faculty.image || "/placeholder.svg"}
//                           alt={faculty.name}
//                           className="w-full h-96 lg:h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                         <div className="absolute bottom-6 left-6 text-white">
//                           <h2 className="text-3xl font-bold mb-2">{faculty.name}</h2>
//                           <p className="text-xl text-blue-200">{faculty.designation}</p>
//                         </div>
//                       </div>

//                       {/* Faculty Details */}
//                       <div className="p-8 lg:p-12">
//                         <div className="space-y-8">
//                           {/* Qualifications */}
//                           <div>
//                             <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
//                               <Award className="h-6 w-6 text-blue-600 mr-2" />
//                               Qualifications
//                             </h3>
//                             <div className="space-y-2">
//                               {faculty.qualifications.map((qual, index) => (
//                                 <div key={index} className="flex items-center space-x-3">
//                                   <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                                   <span className="text-gray-700">{qual}</span>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>

//                           {/* Experience & Specialization */}
//                           <div className="grid md:grid-cols-2 gap-6">
//                             <div>
//                               <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
//                               <p className="text-blue-600 font-bold text-lg">{faculty.experience}</p>
//                             </div>
//                             <div>
//                               <h4 className="font-semibold text-gray-900 mb-2">Specialization</h4>
//                               <div className="flex flex-wrap gap-2">
//                                 {faculty.specialization.slice(0, 2).map((spec, index) => (
//                                   <span
//                                     key={index}
//                                     className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
//                                   >
//                                     {spec}
//                                   </span>
//                                 ))}
//                               </div>
//                             </div>
//                           </div>

//                           {/* Achievements */}
//                           <div>
//                             <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
//                               <Star className="h-6 w-6 text-yellow-500 mr-2" />
//                               Key Achievements
//                             </h3>
//                             <div className="space-y-3">
//                               {faculty.achievements.map((achievement, index) => (
//                                 <div key={index} className="flex items-start space-x-3">
//                                   <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
//                                   <span className="text-gray-700">{achievement}</span>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>

//                           {/* Contact Information */}
//                           <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
//                             <h4 className="font-semibold text-gray-900 mb-4">Contact Information</h4>
//                             <div className="space-y-3">
//                               <div className="flex items-center space-x-3">
//                                 <Mail className="h-5 w-5 text-blue-600" />
//                                 <span className="text-gray-700">{faculty.email}</span>
//                               </div>
//                               <div className="flex items-center space-x-3">
//                                 <Phone className="h-5 w-5 text-green-600" />
//                                 <span className="text-gray-700">{faculty.phone}</span>
//                               </div>
//                               <div className="flex items-center space-x-3">
//                                 <Linkedin className="h-5 w-5 text-blue-700" />
//                                 <span className="text-gray-700">{faculty.linkedin}</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           {filteredFaculty.length > 1 && (
//             <>
//               <button
//                 onClick={prevSlide}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:text-blue-600 transition-all duration-200 z-10"
//               >
//                 <ChevronLeft className="h-6 w-6" />
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-white hover:text-blue-600 transition-all duration-200 z-10"
//               >
//                 <ChevronRight className="h-6 w-6" />
//               </button>
//             </>
//           )}

//           {/* Slide Indicators */}
//           {filteredFaculty.length > 1 && (
//             <div className="flex justify-center mt-8 space-x-2">
//               {filteredFaculty.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-200 ${
//                     index === currentSlide ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
//                   }`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Faculty Excellence Section */}
//         <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//           <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

//           <div className="relative z-10 text-center">
//             <h2 className="text-4xl font-bold mb-6">Why Our Faculty Stands Out</h2>
//             <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
//               Our distinguished faculty combines academic excellence with industry experience to provide world-class
//               education
//             </p>

//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <Award className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Industry Experience</h3>
//                 <p className="text-blue-100">Real-world expertise from leading companies and organizations</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <BookOpen className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Research Excellence</h3>
//                 <p className="text-blue-100">Active researchers contributing to cutting-edge knowledge</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <Users className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">Student-Centric Approach</h3>
//                 <p className="text-blue-100">Dedicated mentors committed to student success and growth</p>
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
import { Award, BookOpen, Users, Star } from "lucide-react"

export default function Faculty() {
  const [selectedDepartment, setSelectedDepartment] = useState("all")

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Karthik Raju S",
      designation: "Principal",
      department: "administration",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["Mcom", "MBA", "UGC-NET", "PhD", "CA"],
      experience: "10 years",
      specialization: ["Educational Leadership", "Academic Administration", "Strategic Planning"],
      achievements: [
        "Leading BIMSR to new heights",
        "Implementing innovative academic programs",
        "Building industry partnerships",
      ],
      email: "adith.akr.raju@gmail.com",
      phone: "9743261992",
      linkedin: "linkedin.com/in/karthikraju",
    },
    {
      id: 2,
      name: "Dr. Manivannan",
      designation: "Vice-Principal",
      department: "administration",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["MA(Eng)", "UGC-NET", "PhD"],
      experience: "10 years",
      specialization: ["English Literature", "Academic Coordination", "Curriculum Development"],
      achievements: ["Excellence in English education", "Academic program coordination", "Research in literature"],
      email: "gmmasvm@gmail.com",
      phone: "9677437347",
      linkedin: "linkedin.com/in/manivannan",
    },
    {
      id: 3,
      name: "Mrs. Renuka",
      designation: "1st PU Com Class Teacher",
      department: "commerce",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["MCom", "MA(Eng)", "B.Ed"],
      experience: "9 years",
      specialization: ["Commerce Education", "English Language", "Student Mentoring"],
      achievements: ["Excellent student results", "Innovative teaching methods", "Student development programs"],
      email: "renukamanju@gmail.com",
      phone: "9986209311",
      linkedin: "linkedin.com/in/renuka",
    },
    {
      id: 4,
      name: "Mr Balaji",
      designation: "Lecturer in Kannada",
      department: "languages",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["MA(Kan)", "B.Ed"],
      experience: "12 years",
      specialization: ["Kannada Literature", "Regional Language Teaching", "Cultural Studies"],
      achievements: ["Promoting Kannada culture", "Excellence in language teaching", "Cultural program coordination"],
      email: "balaji147@gmail.com",
      phone: "9035870692",
      linkedin: "linkedin.com/in/balaji",
    },
    {
      id: 5,
      name: "Mrs. Rinuk",
      designation: "Lecturer in Hindi",
      department: "languages",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["MCom", "MA(Hindi)", "B.Ed"],
      experience: "9 years",
      specialization: ["Hindi Literature", "Language Teaching", "Communication Skills"],
      achievements: [
        "Excellence in Hindi education",
        "Student language development",
        "Literary activities coordination",
      ],
      email: "prinuk@gmail.com",
      phone: "8105923122",
      linkedin: "linkedin.com/in/rinuk",
    },
    {
      id: 6,
      name: "Mrs. Monika",
      designation: "Lecturer in Science",
      department: "science",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["MSc(Math)", "B.Ed"],
      experience: "3 years",
      specialization: ["Mathematics", "Physics", "Scientific Research"],
      achievements: ["Innovative science teaching", "Student research guidance", "STEM education promotion"],
      email: "umonika879@gmail.com",
      phone: "8088101545",
      linkedin: "linkedin.com/in/monika",
    },
    {
      id: 7,
      name: "Mrs. Tejomani",
      designation: "1st PU Sci Class Teacher",
      department: "science",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["MSc(Che)", "B.Ed"],
      experience: "6 years",
      specialization: ["Chemistry", "Biology", "Laboratory Management"],
      achievements: ["Excellence in chemistry teaching", "Lab safety implementation", "Student practical training"],
      email: "tejomanid@gmail.com",
      phone: "7985182944",
      linkedin: "linkedin.com/in/tejomani",
    },
    {
      id: 8,
      name: "Mrs. Nikitha",
      designation: "Lecturer in Computer Science",
      department: "computer-science",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["MSc.(CS)", "B.Ed"],
      experience: "3 years",
      specialization: ["Computer Programming", "Software Development", "Technology Education"],
      achievements: ["Modern CS curriculum development", "Student coding competitions", "Technology integration"],
      email: "gowdanikitha647@gmail.com",
      phone: "9663687709",
      linkedin: "linkedin.com/in/nikitha",
    },
    {
      id: 9,
      name: "Mr. Ragunatha",
      designation: "HOD(PUC) & 2nd PU Com Class Teacher",
      department: "commerce",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["MCom", "MBA", "PGCBA", "B.Ed"],
      experience: "9 years",
      specialization: ["Commerce Education", "Business Administration", "Academic Leadership"],
      achievements: ["PUC department leadership", "Commerce curriculum excellence", "Student career guidance"],
      email: "raghuram1992feet@gmail.com",
      phone: "7204855430",
      linkedin: "linkedin.com/in/ragunatha",
    },
    {
      id: 10,
      name: "Mr. Meena",
      designation: "Lecturer in Commerce",
      department: "commerce",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["MCom", "MBA", "B.Ed"],
      experience: "5 years",
      specialization: ["Business Studies", "Financial Management", "Entrepreneurship"],
      achievements: ["Business education excellence", "Student entrepreneurship programs", "Industry connections"],
      email: "meenavasan543@gmail.com",
      phone: "9611581255",
      linkedin: "linkedin.com/in/meena",
    },
    {
      id: 11,
      name: "Mr. Sabitha",
      designation: "Lecturer in Economics",
      department: "commerce",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      qualifications: ["MCom", "MBA", "B.Ed"],
      experience: "6 years",
      specialization: ["Economics", "Business Economics", "Market Analysis"],
      achievements: ["Economics curriculum development", "Student research projects", "Economic analysis expertise"],
      email: "baskar.sabithab@gmail.com",
      phone: "7356295757",
      linkedin: "linkedin.com/in/sabitha",
    },
  ]

  const departments = [
    { id: "all", name: "All Departments", count: facultyMembers.length },
    {
      id: "administration",
      name: "Administration",
      count: facultyMembers.filter((f) => f.department === "administration").length,
    },
    {
      id: "commerce",
      name: "Commerce",
      count: facultyMembers.filter((f) => f.department === "commerce").length,
    },
    {
      id: "science",
      name: "Science",
      count: facultyMembers.filter((f) => f.department === "science").length,
    },
    {
      id: "languages",
      name: "Languages",
      count: facultyMembers.filter((f) => f.department === "languages").length,
    },
    {
      id: "computer-science",
      name: "Computer Science",
      count: facultyMembers.filter((f) => f.department === "computer-science").length,
    },
  ]

  const filteredFaculty =
    selectedDepartment === "all"
      ? facultyMembers
      : facultyMembers.filter((member) => member.department === selectedDepartment)

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

        {/* Faculty Cards Grid */}
        <div className="grid gap-8">
          {filteredFaculty.map((faculty, index) => (
            <div
              key={faculty.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        #{index + 1}
                      </span>
                      <span className="text-blue-100 text-sm uppercase tracking-wide">
                        {faculty.department.replace("-", " ")}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{faculty.name}</h3>
                    <p className="text-blue-100 text-lg">{faculty.designation}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-sm text-blue-100">Experience</div>
                      <div className="text-xl font-bold">{faculty.experience}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Qualifications */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Qualifications</h4>
                    <div className="space-y-2">
                      {faculty.qualifications.map((qual, qualIndex) => (
                        <span
                          key={qualIndex}
                          className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
                        >
                          {qual}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialization */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Specialization</h4>
                    <div className="space-y-2">
                      {faculty.specialization.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Contact Information
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{faculty.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <a
                          href={`mailto:${faculty.email}`}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium truncate"
                        >
                          {faculty.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Key Achievements</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {faculty.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-2">
                        <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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

