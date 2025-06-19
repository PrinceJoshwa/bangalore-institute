import { Building2, TrendingUp, Users, Award, Target, Briefcase, MapPin } from "lucide-react"

export default function PlacementsEnhanced() {
  const placementStats = [
    { number: "100%", label: "Placement Assistance" },
    { number: "₹7 LPA", label: "Average Package" },
    { number: "₹15 LPA", label: "Highest Package" },
    { number: "500+", label: "Industry Partners" },
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
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749472845/2-removebg-preview_msujna.png",
      },
      {
        name: "Honeywell",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749469873/honeywell-removebg-preview_hdrwz4.png",
      },
      {
        name: "Royal Enfield",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749472941/9-removebg-preview_ahtdlm.png",
      },
      {
        name: "Mindtree",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749473431/17-removebg-preview_1_hx9coo.png",
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
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749473427/18-removebg-preview_rgtk5c.png",
      },
      {
        name: "Wipro",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749473429/11-removebg-preview_uqfk0o.png",
      },
    ],
    infrastructure: [
      {
        name: "Volvo",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749473704/13-removebg-preview_n46whg.png",
      },
      {
        name: "Jindal Steel",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749473336/15-removebg-preview_psy2ml.png",
      },
      {
        name: "Sobha",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749473426/20-removebg-preview_mfsbjx.png",
      },
      {
        name: "DXC",
        logo: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1749473596/24-removebg-preview_zqmkz5.png",
      },
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

  const careerFocus = [
    {
      level: "Entry-Level Positions",
      description: "Junior developers and assistants",
      package: "₹4-6 LPA",
      roles: ["Junior Developer", "Assistant Analyst", "Trainee Engineer"],
    },
    {
      level: "Mid-Level Roles",
      description: "Full stack developers and specialists",
      package: "₹6-10 LPA",
      roles: ["Full Stack Developer", "Data Analyst", "Marketing Specialist"],
    },
    {
      level: "Leadership Positions",
      description: "Team leads and project managers",
      package: "₹10-15 LPA",
      roles: ["Team Lead", "Project Manager", "Senior Consultant"],
    },
  ]

  return (
    <section id="placements" className="w-full py-12 md:py-24 lg:py-8 bg-white">
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

        {/* Industry Visit Photos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Industry Visits & Placement Activities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2011.11.59_af5f071e.jpg-2kWwj5szRrlblktYUcRhjcuAwbeble.jpeg"
                alt="BIMSR students during industry visit in Anekal, Karnataka"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center gap-1 text-white text-xs">
                  <MapPin className="h-3 w-3" />
                  <span>Anekal, Karnataka</span>
                </div>
                <p className="text-white text-sm font-medium">Industry Visit - Group 1</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2011.12.00_d0013844.jpg-TQGzUQwoc7pENaE6vmnaOo1fxMXw5S.jpeg"
                alt="Large group of BIMSR students with faculty during placement activity"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center gap-1 text-white text-xs">
                  <MapPin className="h-3 w-3" />
                  <span>Anekal, Karnataka</span>
                </div>
                <p className="text-white text-sm font-medium">Placement Activity - Group 2</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2011.12.01_6a10f170.jpg-hV2IrXL02sTsfiAof0wExenJ838sYo.jpeg"
                alt="BIMSR students and faculty during campus placement drive"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center gap-1 text-white text-xs">
                  <MapPin className="h-3 w-3" />
                  <span>Anekal, Karnataka</span>
                </div>
                <p className="text-white text-sm font-medium">Campus Placement Drive</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-19%20at%2011.12.00_00c06c3b.jpg-K3iDNYPP52IC9NK4cgeHBoYeZcWb7d.jpeg"
                alt="BIMSR students with industry professionals during placement event"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="flex items-center gap-1 text-white text-xs">
                  <MapPin className="h-3 w-3" />
                  <span>Anekal, Karnataka</span>
                </div>
                <p className="text-white text-sm font-medium">Industry Interaction</p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">
            Regular industry visits and placement activities ensure our students get real-world exposure and networking
            opportunities
          </p>
        </div>

        {/* Placement Package Distribution */}
        <div className="mb-16 bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">
            Our Placed Students - Package Distribution
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="h-20 bg-blue-200 rounded-t flex items-end justify-center pb-2">
                  <span className="text-blue-800 font-bold text-sm">4 LPA</span>
                </div>
                <div className="bg-blue-600 text-white py-2 rounded-b text-sm">Minimum</div>
              </div>
              <div className="text-center">
                <div className="h-32 bg-green-200 rounded-t flex items-end justify-center pb-2">
                  <span className="text-green-800 font-bold text-sm">7 LPA</span>
                </div>
                <div className="bg-green-600 text-white py-2 rounded-b text-sm">Average</div>
              </div>
              <div className="text-center">
                <div className="h-40 bg-orange-200 rounded-t flex items-end justify-center pb-2">
                  <span className="text-orange-800 font-bold text-sm">12 LPA</span>
                </div>
                <div className="bg-orange-600 text-white py-2 rounded-b text-sm">Good</div>
              </div>
              <div className="text-center">
                <div className="h-48 bg-purple-200 rounded-t flex items-end justify-center pb-2">
                  <span className="text-purple-800 font-bold text-sm">15 LPA</span>
                </div>
                <div className="bg-purple-600 text-white py-2 rounded-b text-sm">Excellent</div>
              </div>
            </div>
            <p className="text-center text-gray-600">
              Our graduates consistently secure impressive placement packages across the industry spectrum. The average
              package of 7 LPA reflects our program's strong industry alignment and comprehensive skill development
              approach.
            </p>
          </div>
        </div>

        {/* Career Focus - 3 Career Opportunities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Job Focus - 3 Career Opportunities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {careerFocus.map((career, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-2">{career.level}</h4>
                <p className="text-gray-600 text-sm mb-3">{career.description}</p>
                <div className="text-2xl font-bold text-green-600 mb-3">{career.package}</div>
                <div className="space-y-1">
                  {career.roles.map((role, idx) => (
                    <div key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm">
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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

        <div className="text-center mt-12">
          <button className="btn btn-primary px-8 py-3">View Placement Records</button>
        </div>
      </div>
    </section>
  )
}
