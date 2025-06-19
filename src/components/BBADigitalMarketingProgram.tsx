import { Award, CheckCircle, Users, BookOpen, Target } from "lucide-react"

export default function BBADigitalMarketingProgram() {
  const programStructure = [
    {
      title: "Business Administration Foundation",
      description: "Core business management principles and leadership skills",
      duration: "Years 1-2",
      topics: ["Management Principles", "Business Ethics", "Organizational Behavior", "Financial Management"],
    },
    {
      title: "Digital Marketing Specialization",
      description: "Modern marketing strategies and digital transformation",
      duration: "Years 2-3",
      topics: ["Digital Strategy", "Social Media Marketing", "Content Marketing", "Marketing Analytics"],
    },
    {
      title: "Leadership & Entrepreneurship",
      description: "Business leadership and startup development skills",
      duration: "Year 3-4",
      topics: ["Strategic Planning", "Team Leadership", "Business Development", "Innovation Management"],
    },
  ]

  const businessSkills = [
    {
      category: "Leadership",
      skills: ["Team Management", "Strategic Planning", "Decision Making", "Communication"],
    },
    {
      category: "Marketing",
      skills: ["Digital Campaigns", "Brand Management", "Market Research", "Customer Analytics"],
    },
    {
      category: "Business Development",
      skills: ["Sales Strategy", "Business Planning", "Financial Analysis", "Project Management"],
    },
    {
      category: "Entrepreneurship",
      skills: ["Startup Development", "Innovation", "Risk Management", "Venture Capital"],
    },
  ]

  const careerPaths = [
    {
      title: "Marketing Manager",
      package: "₹6-10 LPA",
      description: "Lead marketing teams and develop comprehensive marketing strategies",
      skills: ["Team Leadership", "Strategic Planning", "Digital Marketing", "Budget Management"],
    },
    {
      title: "Business Development Manager",
      package: "₹7-12 LPA",
      description: "Drive business growth through strategic partnerships and market expansion",
      skills: ["Sales Strategy", "Partnership Development", "Market Analysis", "Negotiation"],
    },
    {
      title: "Digital Marketing Director",
      package: "₹10-18 LPA",
      description: "Oversee digital transformation and marketing technology initiatives",
      skills: ["Digital Strategy", "Technology Integration", "Team Management", "ROI Optimization"],
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
              Business Leadership Program
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
              BBA + Digital Marketing + PGCBA Program
            </h2>
            <p className="max-w-3xl text-gray-600 md:text-xl">
              Business administration with digital marketing specialization, combining management principles with modern
              marketing strategies for leadership roles.
            </p>
          </div>
        </div>

        {/* Program Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Business team meeting and strategy planning"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Business Leadership with Digital Focus</h3>
              <p className="text-gray-600 mb-6">
                Develop comprehensive business management skills combined with cutting-edge digital marketing expertise.
                Perfect for future business leaders and entrepreneurs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Business management foundations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Digital marketing specialization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Leadership development</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Entrepreneurship training</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fee Structure */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Program Investment</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">₹25,000</div>
              <div className="text-sm text-gray-600 mb-1">Admission Fee</div>
              <div className="text-xs text-gray-500">Registration and onboarding</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">₹1,90,000</div>
              <div className="text-sm text-gray-600 mb-1">First Year</div>
              <div className="text-xs text-gray-500">Business foundations</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">₹75,000</div>
              <div className="text-sm text-gray-600 mb-1">Second & Third Year</div>
              <div className="text-xs text-gray-500">Specialization modules</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-gray-600 mb-1">4th Year Scholarship</div>
              <div className="text-xs text-gray-500">PGCBA funding</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <div className="text-3xl font-bold text-blue-800">₹3,65,000</div>
            <div className="text-gray-600">Total 4-Year Program Fee</div>
          </div>
        </div>

        {/* Program Structure */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Program Structure</h3>
          <div className="space-y-6">
            {programStructure.map((structure, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-bold text-blue-800">{structure.title}</h4>
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">{structure.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-3">{structure.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {structure.topics.map((topic, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Skills */}
        <div className="mb-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Core Business Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessSkills.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <h4 className="text-lg font-bold text-blue-800 mb-4">{category.category}</h4>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Leadership Career Paths</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {careerPaths.map((career, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-2">{career.title}</h4>
                <div className="text-2xl font-bold text-green-600 mb-3">{career.package}</div>
                <p className="text-gray-600 text-sm mb-4">{career.description}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {career.skills.map((skill, idx) => (
                    <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Benefits */}
        <div className="bg-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose BBA Digital Marketing at BIMSR?</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <Award className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Leadership Development</h4>
              <p className="text-blue-100 text-sm">Comprehensive training in business leadership and management</p>
            </div>
            <div>
              <Users className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Industry Connections</h4>
              <p className="text-blue-100 text-sm">Network with business leaders and industry professionals</p>
            </div>
            <div>
              <BookOpen className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Entrepreneurship Focus</h4>
              <p className="text-blue-100 text-sm">Business incubation support and startup mentorship</p>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Apply for BBA Digital Marketing
          </button>
        </div>
      </div>
    </section>
  )
}
