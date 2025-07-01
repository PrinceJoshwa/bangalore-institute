import { Building2, TrendingUp, Users, Award, Target, Briefcase } from "lucide-react"

export default function Placements() {
  const placementStats = [
    { number: "100%", label: "Placement Assistance" },
    { number: "₹4L-8L", label: "Starting Package" },
    { number: "500+", label: "Industry Partners" },
    { number: "95%", label: "Placement Rate" },
  ]

  const industryPartners = {
    technology: [
      { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
      { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
      { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
      { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
    ],
    manufacturing: [
      { name: "Bosch", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Bosch-logo.svg" },
      { name: "Honeywell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Honeywell_logo.svg" },
      { name: "Royal Enfield", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Royal_Enfield_logo.svg" },
      { name: "L&T", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Larsen_%26_Toubro_logo.svg" },
    ],
    consulting: [
      { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
      { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Cognizant_logo_2022.svg" },
      { name: "HCL", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/HCL_Technologies_logo.svg" },
      { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
    ],
    infrastructure: [
      { name: "Volvo", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Volvo_logo.svg" },
      { name: "Jindal Steel", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/JSW_Group_logo.svg" },
      { name: "Sobha", logo: "https://logos-download.com/wp-content/uploads/2021/01/Sobha_Realty_Logo.png" },
      { name: "DLF", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/DLF_Logo.svg" },
    ],
  }

  const placementProcess = [
    {
      title: "Early Preparation",
      description:
        "Placement-oriented training begins from first year, building industry-ready skills progressively through comprehensive skill development programs.",
      icon: <Users className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Practical Experience",
      description:
        "Internships starting from 4th semester with company visits, expert lectures, and live industry-promoted projects for real-world exposure.",
      icon: <Building2 className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Career Launch",
      description:
        "Dedicated placement semester with campus interviews, employer connections, and continuous monitoring of employment opportunities.",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
    },
  ]

  const skillsPrograms = [
    {
      title: "Communication Excellence",
      description:
        "Basic English communication training by certified trainers covering verbal, written, and listening skills development.",
      icon: <Users className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Problem Solving",
      description:
        "Aptitude development with continuous industry-relevant training from experienced professionals and practical applications.",
      icon: <Target className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Teamwork Skills",
      description:
        "Collaborative project work developing integrity, teamwork abilities, and modern technology tool usage for workplace readiness.",
      icon: <Users className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Entrepreneurship",
      description:
        "Innovation mindset development through Business Creation Lab experiences and startup incubation support programs.",
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
    },
  ]

  return (
    <section id="placements" className="w-full py-12 md:py-24 lg:py-32 bg-white">
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

        {/* Industry-Focused Placement Training */}
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

        {/* Essential Skills Development */}
        <div className="mb-16 bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Essential Skills Development Programs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsPrograms.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-2">{skill.title}</h4>
                <p className="text-gray-600 text-sm">{skill.description}</p>
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
                    className="card p-4 flex items-center justify-center h-20 bg-white hover:shadow-md transition-shadow"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="max-h-10 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `<div class="text-blue-600 font-semibold text-sm text-center">${partner.name}</div>`
                        }
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
                    className="card p-4 flex items-center justify-center h-20 bg-white hover:shadow-md transition-shadow"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="max-h-10 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `<div class="text-blue-600 font-semibold text-sm text-center">${partner.name}</div>`
                        }
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
                    className="card p-4 flex items-center justify-center h-20 bg-white hover:shadow-md transition-shadow"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="max-h-10 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `<div class="text-blue-600 font-semibold text-sm text-center">${partner.name}</div>`
                        }
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
                    className="card p-4 flex items-center justify-center h-20 bg-white hover:shadow-md transition-shadow"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="max-h-10 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `<div class="text-blue-600 font-semibold text-sm text-center">${partner.name}</div>`
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-primary px-8 py-3">View Placement Records</button>
        </div>
      </div>
    </section>
  )
}
