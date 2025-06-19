
// import { Code, Award, CheckCircle, TrendingUp, Users, BookOpen } from "lucide-react"

// export default function BCAFullStackProgram() {
//   const semesterPlan = [
//     {
//       semester: "Sem 1-2",
//       title: "Foundations & Frontend",
//       description: "Master web fundamentals and create interactive user interfaces",
//       topics: ["HTML5, CSS3, JavaScript", "React.js Fundamentals", "UI/UX Design Principles", "Version Control (Git)"],
//     },
//     {
//       semester: "Sem 3-4",
//       title: "Backend & System Design",
//       description: "Build robust server-side applications and optimize architecture",
//       topics: ["Node.js, Express.js", "Database Management", "API Development", "System Architecture"],
//     },
//     {
//       semester: "Sem 5",
//       title: "AI Integration",
//       description: "Incorporate artificial intelligence into full stack applications",
//       topics: ["TensorFlow.js", "OpenAI API Integration", "Machine Learning Basics", "AI-Powered Applications"],
//     },
//     {
//       semester: "Sem 6",
//       title: "Capstone & DSA",
//       description: "Complete industry projects and master data structures",
//       topics: [
//         "Data Structures & Algorithms",
//         "Industry Capstone Project",
//         "Performance Optimization",
//         "Deployment & DevOps",
//       ],
//     },
//   ]

//   const technologies = [
//     {
//       category: "Frontend",
//       tools: ["React.js", "Tailwind CSS", "Bootstrap", "JavaScript ES6+"],
//     },
//     {
//       category: "Backend",
//       tools: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
//     },
//     {
//       category: "DevOps",
//       tools: ["Docker", "Kubernetes", "AWS", "GitHub Actions"],
//     },
//     {
//       category: "AI Tools",
//       tools: ["TensorFlow.js", "OpenAI API", "Machine Learning", "Data Analysis"],
//     },
//   ]

//   const projects = [
//     {
//       category: "Web Development",
//       projects: ["Interactive Portfolio Website", "Dynamic To-Do List App", "Basic Blog Platform (CRUD)"],
//     },
//     {
//       category: "Backend & API",
//       projects: ["E-commerce Product Management API", "User Authentication System", "Real-time Chat Application"],
//     },
//     {
//       category: "DevOps & Cloud",
//       projects: [
//         "Containerized Full-Stack App Deployment",
//         "Cloud CI/CD Pipeline for Web App",
//         "Microservices Architecture",
//       ],
//     },
//     {
//       category: "AI Integration",
//       projects: ["AI-Powered Text Summarizer", "Image Classification Web App", "Smart Chatbot Interface"],
//     },
//   ]

//   const careerPaths = [
//     {
//       level: "Entry-Level",
//       roles: ["Junior Full Stack Developer", "Frontend Developer", "Backend Developer"],
//       package: "₹4-6 LPA",
//     },
//     {
//       level: "Mid-Level",
//       roles: ["Full Stack Developer", "Software Engineer", "DevOps Engineer"],
//       package: "₹6-10 LPA",
//     },
//     {
//       level: "Senior-Level",
//       roles: ["Senior Developer", "Tech Lead", "Solution Architect"],
//       package: "₹10-15 LPA",
//     },
//   ]

//   return (
//     <section id="bca-fullstack" className="w-full py-12 md:py-24 lg:py-8 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
//               4-Year Integrated Program
//             </div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
//               BCA + Full Stack + PGCCA Program
//             </h2>
//             <p className="max-w-3xl text-gray-600 md:text-xl">
//               A comprehensive 4-year program combining undergraduate degree, professional certification, and
//               postgraduate certificate in computer applications with full stack development specialization.
//             </p>
//           </div>
//         </div>

//         {/* Program Overview */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
//           <div>
//             <img
//               src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
//               alt="Full stack development workspace"
//               className="w-full h-[400px] object-cover rounded-xl shadow-lg"
//             />
//           </div>
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl font-bold text-blue-800 mb-4">Program Structure</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
//                     <span className="text-blue-600 font-bold text-sm">3</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Years: BCA</h4>
//                     <p className="text-gray-600 text-sm">Undergraduate Degree in Computer Applications</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
//                     <Code className="h-4 w-4 text-green-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Full Stack Certification</h4>
//                     <p className="text-gray-600 text-sm">Professional certification course in full stack development</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
//                     <span className="text-orange-600 font-bold text-sm">1</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-800">Year: PGCCA</h4>
//                     <p className="text-gray-600 text-sm">Postgraduate Certificate in Computer Applications</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Fee Structure */}
//         <div className="bg-blue-50 rounded-xl p-8 mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Comprehensive Fee Structure</h3>
//           <div className="grid md:grid-cols-4 gap-6">
//             <div className="card p-6 text-center">
//               <div className="text-2xl font-bold text-blue-600 mb-2">₹25,000</div>
//               <div className="text-sm text-gray-600 mb-1">Admission Fee</div>
//               <div className="text-xs text-gray-500">Includes registration, laptop, and digital resources</div>
//             </div>
//             <div className="card p-6 text-center">
//               <div className="text-2xl font-bold text-blue-600 mb-2">₹2,00,000</div>
//               <div className="text-sm text-gray-600 mb-1">First Year</div>
//               <div className="text-xs text-gray-500">BCA foundation with programming tools</div>
//             </div>
//             <div className="card p-6 text-center">
//               <div className="text-2xl font-bold text-blue-600 mb-2">₹85,000</div>
//               <div className="text-sm text-gray-600 mb-1">Second & Third Year</div>
//               <div className="text-xs text-gray-500">Advanced coursework and certifications</div>
//             </div>
//             <div className="card p-6 text-center">
//               <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
//               <div className="text-sm text-gray-600 mb-1">4th Year Scholarship</div>
//               <div className="text-xs text-gray-500">With 70% aggregate in BCA</div>
//             </div>
//           </div>
//           <div className="text-center mt-6">
//             <div className="text-3xl font-bold text-blue-800">₹3,95,000</div>
//             <div className="text-gray-600">Total 4-Year Program Fee</div>
//           </div>
//         </div>

//         {/* Semester-wise Learning Path */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Full Stack Developer Pathway</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             {semesterPlan.map((sem, index) => (
//               <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     <span className="text-blue-600 font-bold">{sem.semester}</span>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-bold text-blue-800">{sem.title}</h4>
//                     <p className="text-gray-600 text-sm">{sem.description}</p>
//                   </div>
//                 </div>
//                 <ul className="space-y-2">
//                   {sem.topics.map((topic, idx) => (
//                     <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
//                       <CheckCircle className="h-4 w-4 text-green-600" />
//                       {topic}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Technologies & Tools */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Essential Tools & Technologies</h3>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {technologies.map((tech, index) => (
//               <div key={index} className="card p-6 text-center">
//                 <h4 className="text-lg font-bold text-blue-800 mb-4">{tech.category}</h4>
//                 <div className="space-y-2">
//                   {tech.tools.map((tool, idx) => (
//                     <div key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm">
//                       {tool}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Student Projects */}
//         <div className="mb-16 bg-gray-50 rounded-xl p-8">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Student Projects</h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             {projects.map((category, index) => (
//               <div key={index} className="bg-white rounded-lg p-6">
//                 <h4 className="text-lg font-bold text-blue-800 mb-4">{category.category}</h4>
//                 <ul className="space-y-2">
//                   {category.projects.map((project, idx) => (
//                     <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
//                       <Code className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
//                       {project}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Career Opportunities */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Career Opportunities</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {careerPaths.map((path, index) => (
//               <div key={index} className="card p-6 text-center">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <TrendingUp className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <h4 className="text-lg font-bold text-blue-800 mb-2">{path.level}</h4>
//                 <div className="text-2xl font-bold text-green-600 mb-3">{path.package}</div>
//                 <ul className="text-sm text-gray-600 space-y-1">
//                   {path.roles.map((role, idx) => (
//                     <li key={idx}>{role}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Program Benefits */}
//         <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
//           <h3 className="text-2xl font-bold mb-4">Why Choose Our Full Stack Program?</h3>
//           <div className="grid md:grid-cols-3 gap-6 mb-6">
//             <div>
//               <Award className="h-8 w-8 mx-auto mb-2" />
//               <h4 className="font-semibold mb-2">Industry-Aligned Curriculum</h4>
//               <p className="text-blue-100 text-sm">
//                 Curriculum designed with industry experts for real-world relevance
//               </p>
//             </div>
//             <div>
//               <Users className="h-8 w-8 mx-auto mb-2" />
//               <h4 className="font-semibold mb-2">Individual Mentorship</h4>
//               <p className="text-blue-100 text-sm">
//                 Personal guidance from experienced faculty and industry professionals
//               </p>
//             </div>
//             <div>
//               <BookOpen className="h-8 w-8 mx-auto mb-2" />
//               <h4 className="font-semibold mb-2">Hands-On Projects</h4>
//               <p className="text-blue-100 text-sm">Real-world project experience throughout the program</p>
//             </div>
//           </div>
//           <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
//             Apply for Full Stack Program
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Code, Award, CheckCircle, TrendingUp, Users, BookOpen } from "lucide-react"

export default function BCAFullStackProgram() {
  const semesterPlan = [
    {
      semester: "Sem 1-2",
      title: "Foundations & Frontend",
      description: "Master web fundamentals and create interactive user interfaces",
      topics: ["HTML5, CSS3, JavaScript", "React.js Fundamentals", "UI/UX Design Principles", "Version Control (Git)"],
    },
    {
      semester: "Sem 3-4",
      title: "Backend & System Design",
      description: "Build robust server-side applications and optimize architecture",
      topics: ["Node.js, Express.js", "Database Management", "API Development", "System Architecture"],
    },
    {
      semester: "Sem 5",
      title: "AI Integration",
      description: "Incorporate artificial intelligence into full stack applications",
      topics: ["TensorFlow.js", "OpenAI API Integration", "Machine Learning Basics", "AI-Powered Applications"],
    },
    {
      semester: "Sem 6",
      title: "Capstone & DSA",
      description: "Complete industry projects and master data structures",
      topics: [
        "Data Structures & Algorithms",
        "Industry Capstone Project",
        "Performance Optimization",
        "Deployment & DevOps",
      ],
    },
  ]

  const technologies = [
    {
      category: "Frontend",
      tools: ["React.js", "Tailwind CSS", "Bootstrap", "JavaScript ES6+"],
    },
    {
      category: "Backend",
      tools: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    },
    {
      category: "DevOps",
      tools: ["Docker", "Kubernetes", "AWS", "GitHub Actions"],
    },
    {
      category: "AI Tools",
      tools: ["TensorFlow.js", "OpenAI API", "Machine Learning", "Data Analysis"],
    },
  ]

  const projects = [
    {
      category: "Web Development",
      projects: ["Interactive Portfolio Website", "Dynamic To-Do List App", "Basic Blog Platform (CRUD)"],
    },
    {
      category: "Backend & API",
      projects: ["E-commerce Product Management API", "User Authentication System", "Real-time Chat Application"],
    },
    {
      category: "DevOps & Cloud",
      projects: [
        "Containerized Full-Stack App Deployment",
        "Cloud CI/CD Pipeline for Web App",
        "Microservices Architecture",
      ],
    },
    {
      category: "AI Integration",
      projects: ["AI-Powered Text Summarizer", "Image Classification Web App", "Smart Chatbot Interface"],
    },
  ]

  const careerPaths = [
    {
      level: "Entry-Level",
      roles: ["Junior Full Stack Developer", "Frontend Developer", "Backend Developer"],
      package: "₹4-6 LPA",
    },
    {
      level: "Mid-Level",
      roles: ["Full Stack Developer", "Software Engineer", "DevOps Engineer"],
      package: "₹6-10 LPA",
    },
    {
      level: "Senior-Level",
      roles: ["Senior Developer", "Tech Lead", "Solution Architect"],
      package: "₹10-15 LPA",
    },
  ]

  return (
    <section id="bca-fullstack" className="w-full py-12 md:py-24 lg:py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
              4-Year Integrated Program
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
              BCA + Full Stack + PGCCA Program
            </h2>
            <p className="max-w-3xl text-gray-600 md:text-xl">
              A comprehensive 4-year program combining undergraduate degree, professional certification, and
              postgraduate certificate in computer applications with full stack development specialization.
            </p>
          </div>
        </div>

        {/* Program Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Full stack development workspace with multiple monitors showing code"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Program Structure</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Years: BCA</h4>
                    <p className="text-gray-600 text-sm">Undergraduate Degree in Computer Applications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <Code className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Full Stack Certification</h4>
                    <p className="text-gray-600 text-sm">Professional certification course in full stack development</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-orange-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Year: PGCCA</h4>
                    <p className="text-gray-600 text-sm">Postgraduate Certificate in Computer Applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fee Structure */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Comprehensive Fee Structure</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">₹25,000</div>
              <div className="text-sm text-gray-600 mb-1">Admission Fee</div>
              <div className="text-xs text-gray-500">Includes registration, laptop, and digital resources</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">₹2,00,000</div>
              <div className="text-sm text-gray-600 mb-1">First Year</div>
              <div className="text-xs text-gray-500">BCA foundation with programming tools</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">₹85,000</div>
              <div className="text-sm text-gray-600 mb-1">Second & Third Year</div>
              <div className="text-xs text-gray-500">Advanced coursework and certifications</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-gray-600 mb-1">4th Year Scholarship</div>
              <div className="text-xs text-gray-500">With 70% aggregate in BCA</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <div className="text-3xl font-bold text-blue-800">₹3,95,000</div>
            <div className="text-gray-600">Total 4-Year Program Fee</div>
          </div>
        </div>

        {/* Semester-wise Learning Path */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Full Stack Developer Pathway</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {semesterPlan.map((sem, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{sem.semester}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-800">{sem.title}</h4>
                    <p className="text-gray-600 text-sm">{sem.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {sem.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Essential Tools & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="card p-6 text-center">
                <h4 className="text-lg font-bold text-blue-800 mb-4">{tech.category}</h4>
                <div className="space-y-2">
                  {tech.tools.map((tool, idx) => (
                    <div key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Projects */}
        <div className="mb-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Student Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h4 className="text-lg font-bold text-blue-800 mb-4">{category.category}</h4>
                <ul className="space-y-2">
                  {category.projects.map((project, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Code className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Career Opportunities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {careerPaths.map((path, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-2">{path.level}</h4>
                <div className="text-2xl font-bold text-green-600 mb-3">{path.package}</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  {path.roles.map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Program Benefits */}
        <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Our Full Stack Program?</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <Award className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Industry-Aligned Curriculum</h4>
              <p className="text-blue-100 text-sm">
                Curriculum designed with industry experts for real-world relevance
              </p>
            </div>
            <div>
              <Users className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Individual Mentorship</h4>
              <p className="text-blue-100 text-sm">
                Personal guidance from experienced faculty and industry professionals
              </p>
            </div>
            <div>
              <BookOpen className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Hands-On Projects</h4>
              <p className="text-blue-100 text-sm">Real-world project experience throughout the program</p>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Apply for Full Stack Program
          </button>
        </div>
      </div>
    </section>
  )
}
