// import { Building2, TrendingUp, Users, Award } from "lucide-react"

// export default function Placements() {
//   const placementStats = [
//     { number: "100%", label: "Placement Assistance" },
//     { number: "₹4L-8L", label: "Starting Package" },
//     { number: "500+", label: "Industry Partners" },
//     { number: "95%", label: "Placement Rate" },
//   ]

//   const industryPartners = {
    // technology: [
    //   { name: "IBM", logo: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png" },
    //   { name: "Samsung", logo: "https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png" },
    //   { name: "Infosys", logo: "https://logos-world.net/wp-content/uploads/2020/06/Infosys-Logo.png" },
    //   { name: "TCS", logo: "https://logos-world.net/wp-content/uploads/2020/09/TCS-Logo.png" },
    // ],
    // manufacturing: [
    //   { name: "Bosch", logo: "https://logos-world.net/wp-content/uploads/2020/08/Bosch-Logo.png" },
    //   { name: "Honeywell", logo: "https://logos-world.net/wp-content/uploads/2020/08/Honeywell-Logo.png" },
    //   { name: "Royal Enfield", logo: "https://logos-world.net/wp-content/uploads/2020/11/Royal-Enfield-Logo.png" },
    //   { name: "L&T", logo: "https://logos-world.net/wp-content/uploads/2020/09/LT-Logo.png" },
    // ],
    // consulting: [
    //   { name: "Accenture", logo: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Logo.png" },
    //   { name: "Cognizant", logo: "https://logos-world.net/wp-content/uploads/2020/06/Cognizant-Logo.png" },
    //   { name: "HCL", logo: "https://logos-world.net/wp-content/uploads/2020/06/HCL-Logo.png" },
    //   { name: "Wipro", logo: "https://logos-world.net/wp-content/uploads/2020/06/Wipro-Logo.png" },
    // ],
    // infrastructure: [
    //   { name: "Volvo", logo: "https://logos-world.net/wp-content/uploads/2020/04/Volvo-Logo.png" },
    //   { name: "Jindal Steel", logo: "https://logos-world.net/wp-content/uploads/2020/09/Jindal-Steel-Logo.png" },
    //   { name: "Sobha", logo: "https://logos-world.net/wp-content/uploads/2020/11/Sobha-Logo.png" },
    //   { name: "DLF", logo: "https://logos-world.net/wp-content/uploads/2020/11/DLF-Logo.png" },
    // ],
//   }

//   const placementProcess = [
//     {
//       title: "Early Preparation",
//       description: "Placement-oriented training begins from first year, building industry-ready skills progressively.",
//       icon: <Users className="h-6 w-6 text-blue-600" />,
//     },
//     {
//       title: "Practical Experience",
//       description: "Internships starting from 4th semester with company visits and live industry projects.",
//       icon: <Building2 className="h-6 w-6 text-blue-600" />,
//     },
//     {
//       title: "Career Launch",
//       description: "Dedicated placement semester with campus interviews and continuous monitoring.",
//       icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
//     },
//   ]

//   return (
//     <section id="placements" className="w-full py-12 md:py-24 lg:py-32 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//           <div className="space-y-2">
//             <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Career Success</div>
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">100% Placement Assistance</h2>
//             <p className="max-w-[900px] text-gray-600 md:text-xl">
//               Our dedicated placement cell ensures every student gets industry-ready training and guaranteed placement
//               assistance with leading companies across various sectors.
//             </p>
//           </div>
//         </div>

//         {/* Placement Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
//           {placementStats.map((stat, index) => (
//             <div key={index} className="card p-6 text-center">
//               <span className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</span>
//               <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* Placement Process */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Industry-Focused Placement Training</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             {placementProcess.map((process, index) => (
//               <div key={index} className="card p-6 text-center">
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   {process.icon}
//                 </div>
//                 <h4 className="text-lg font-bold text-blue-800 mb-2">{process.title}</h4>
//                 <p className="text-gray-600 text-sm">{process.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Industry Partners */}
//         <div>
//           <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Our Industry Partners</h3>

//           <div className="space-y-8">
//             <div>
//               <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center gap-2">
//                 <Award className="h-5 w-5" />
//                 Technology Giants
//               </h4>
//               <p className="text-gray-600 text-sm mb-4">
//                 Leading tech companies like IBM, Samsung, and Infosys actively recruit our graduates for cutting-edge
//                 roles.
//               </p>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {industryPartners.technology.map((partner, index) => (
//                   <div key={index} className="card p-4 flex items-center justify-center h-20">
//                     <img
//                       src={`/placeholder.svg?height=40&width=120&text=${partner.name}`}
//                       alt={partner.name}
//                       className="max-h-8 max-w-full object-contain"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center gap-2">
//                 <Building2 className="h-5 w-5" />
//                 Manufacturing Leaders
//               </h4>
//               <p className="text-gray-600 text-sm mb-4">
//                 Industrial powerhouses including Bosch, Honeywell, and Royal Enfield offer diverse engineering
//                 opportunities.
//               </p>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {industryPartners.manufacturing.map((partner, index) => (
//                   <div key={index} className="card p-4 flex items-center justify-center h-20">
//                     <img
//                       src={`/placeholder.svg?height=40&width=120&text=${partner.name}`}
//                       alt={partner.name}
//                       className="max-h-8 max-w-full object-contain"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center gap-2">
//                 <TrendingUp className="h-5 w-5" />
//                 Consulting Firms
//               </h4>
//               <p className="text-gray-600 text-sm mb-4">
//                 Global consulting leaders like Accenture, Cognizant, and HCL provide strategic career pathways for
//                 graduates.
//               </p>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {industryPartners.consulting.map((partner, index) => (
//                   <div key={index} className="card p-4 flex items-center justify-center h-20">
//                     <img
//                       src={`/placeholder.svg?height=40&width=120&text=${partner.name}`}
//                       alt={partner.name}
//                       className="max-h-8 max-w-full object-contain"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center gap-2">
//                 <Building2 className="h-5 w-5" />
//                 Infrastructure Giants
//               </h4>
//               <p className="text-gray-600 text-sm mb-4">
//                 Major corporations like Volvo, Jindal Steel, and Sobha Developers create opportunities across multiple
//                 sectors.
//               </p>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {industryPartners.infrastructure.map((partner, index) => (
//                   <div key={index} className="card p-4 flex items-center justify-center h-20">
//                     <img
//                       src={`/placeholder.svg?height=40&width=120&text=${partner.name}`}
//                       alt={partner.name}
//                       className="max-h-8 max-w-full object-contain"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-12">
//           <button className="btn btn-primary px-8 py-3">View Placement Records</button>
//         </div>
//       </div>
//     </section>
//   )
// }

import { Building2, TrendingUp, Users, Award } from "lucide-react"

export default function Placements() {
  const placementStats = [
    { number: "100%", label: "Placement Assistance" },
    { number: "₹4L-8L", label: "Starting Package" },
    { number: "500+", label: "Industry Partners" },
    { number: "95%", label: "Placement Rate" },
  ]

  const industryPartners = {
    technology: [
      {
        name: "IBM",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      },
      {
        name: "Samsung",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      },
      {
        name: "Infosys",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
      },
      {
        name: "TCS",
        logo: "https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png",
      },
    ],
    manufacturing: [
      {
        name: "Bosch",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749467507/2_gcbgqf.png",
      },
      {
        name: "Honeywell",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749469873/honeywell-removebg-preview_hdrwz4.png",
      },
      {
        name: "Royal Enfield",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749467514/9_j9fcpd.png",
      },
      {
        name: "Mindtree",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749467523/17_ik9ov0.png",
      },
    ],
    consulting: [
      {
        name: "Accenture",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
      },
      {
        name: "Cognizant",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749470023/4-removebg-preview_auhb4l.png",
      },
      {
        name: "HCL",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749467524/18_bnqtlb.png",
      },
      {
        name: "Wipro",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749467516/11_fqduj0.png",
      },
    ],
    infrastructure: [
      {
        name: "Volvo",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749467518/13_b2fn9w.png",
      },
      {
        name: "Jindal Steel",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749467520/15_jwqivz.png",
      },
      {
        name: "Sobha",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749467547/20_eifdeq.png",
      },
      {
        name: "DXC",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749467670/24_kjqz1g.png",
      },
    ],
  }

  const placementProcess = [
    {
      title: "Early Preparation",
      description: "Placement-oriented training begins from first year, building industry-ready skills progressively.",
      icon: <Users className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Practical Experience",
      description: "Internships starting from 4th semester with company visits and live industry projects.",
      icon: <Building2 className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Career Launch",
      description: "Dedicated placement semester with campus interviews and continuous monitoring.",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
    },
  ]

  return (
    <section id="placements" className="w-full py-12 md:py-24 lg:py-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Career Success</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">100% Placement Assistance</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Our dedicated placement cell ensures every student gets industry-ready training and guaranteed placement
              assistance with leading companies across various sectors.
            </p>
          </div>
        </div>

        {/* Placement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
          {placementStats.map((stat, index) => (
            <div key={index} className="card p-6 text-center">
              <span className="text-3xl md:text-4xl font-bold text-blue-600">{stat.number}</span>
              <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Placement Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Industry-Focused Placement Training</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {placementProcess.map((process, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {process.icon}
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Partners */}
        <div>
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Our Industry Partners</h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Technology Giants
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Leading tech companies like IBM, Samsung, and Infosys actively recruit our graduates for cutting-edge
                roles.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {industryPartners.technology.map((partner, index) => (
                  <div
                    key={index}
                    className="card p-16 flex items-center justify-center h-20 bg-white hover:shadow-md transition-shadow"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="max-h-10 max-w-full object-contain filter transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `/placeholder.svg?height=40&width=120&text=${partner.name}`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Manufacturing Leaders
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Industrial powerhouses including Bosch, Honeywell, and Royal Enfield offer diverse engineering
                opportunities.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {industryPartners.manufacturing.map((partner, index) => (
                  <div
                    key={index}
                    className="card p-16 flex items-center justify-center h-20 bg-white hover:shadow-md transition-shadow"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="max-h-40  max-w-full object-contain filter transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `/placeholder.svg?height=40&width=120&text=${partner.name}`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Consulting Firms
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Global consulting leaders like Accenture, Cognizant, and HCL provide strategic career pathways for
                graduates.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {industryPartners.consulting.map((partner, index) => (
                  <div
                    key={index}
                    className="card p-16 flex items-center justify-center h-20 bg-white hover:shadow-md transition-shadow"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="max-h-40 max-w-full object-contain filter transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `/placeholder.svg?height=40&width=120&text=${partner.name}`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-700 mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Infrastructure Giants
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Major corporations like Volvo, Jindal Steel, and Sobha Developers create opportunities across multiple
                sectors.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {industryPartners.infrastructure.map((partner, index) => (
                  <div
                    key={index}
                    className="card p-16 flex items-center justify-center h-20 bg-white hover:shadow-md transition-shadow"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="max-h-40 max-w-full object-contain filter transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `/placeholder.svg?height=40&width=120&text=${partner.name}`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="text-center mt-12">
          <button className="btn btn-primary px-8 py-3">View Placement Records</button>
        </div> */}
      </div>
    </section>
  )
}
