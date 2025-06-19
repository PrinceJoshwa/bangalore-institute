import { Award, BookOpen, TrendingUp, Users, CheckCircle, GraduationCap, Calculator, Building } from "lucide-react"

export default function BCOMACCAProgram() {
  const programStructure = [
    {
      title: "BCOM Academic Degree",
      description: "Comprehensive foundation in commerce, accounting, business studies, economics, and law",
      duration: "3 Years",
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "ACCA Certification",
      description: "Knowledge, Skill, and Professional levels in collaboration with ZELL Education",
      duration: "Integrated",
      icon: <Award className="h-8 w-8 text-blue-600" />,
    },
    {
      title: "PGCFM",
      description: "Advanced financial strategies, investment, and risk management certification",
      duration: "1 Year",
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    },
  ]

  const accaLevels = [
    {
      level: "ACCA Knowledge Level",
      description: "Build foundation in accounting principles and business concepts",
      subjects: ["Business and Technology", "Management Accounting", "Financial Accounting"],
    },
    {
      level: "ACCA Skill Level",
      description: "Develop technical and professional skills required for the workplace",
      subjects: ["Corporate and Business Law", "Performance Management", "Taxation", "Financial Reporting"],
    },
    {
      level: "ACCA Professional Level",
      description: "Master strategic business leadership and financial management",
      subjects: ["Strategic Business Leader", "Strategic Business Reporting", "Advanced Financial Management"],
    },
  ]

  const careerOpportunities = [
    {
      title: "Chartered Certified Accountant",
      description: "Handle advanced financial reporting, taxation, and auditing",
      package: "₹8-15 LPA",
      icon: <Calculator className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Financial Analyst",
      description: "Analyze data and support strategic investment decisions",
      package: "₹6-12 LPA",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Auditor",
      description: "Ensure regulatory compliance and financial transparency",
      package: "₹5-10 LPA",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Finance Manager",
      description: "Oversee financial operations, reporting, and policy-making",
      package: "₹10-18 LPA",
      icon: <Building className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Tax Consultant",
      description: "Advise on tax strategy, planning, and legal compliance",
      package: "₹7-14 LPA",
      icon: <Award className="h-6 w-6 text-blue-600" />,
    },
  ]

  const studentJourney = [
    {
      phase: "Academic Learning",
      description: "Semester-wise modules with hands-on labs and domain-specific workshops",
      activities: ["BCOM coursework", "ACCA Knowledge level", "Financial fundamentals", "Business law basics"],
    },
    {
      phase: "Skill Building",
      description: "Technical skill development through masterclasses by industry professionals",
      activities: ["ACCA Skills level", "Advanced accounting", "Taxation expertise", "Financial reporting"],
    },
    {
      phase: "Career Development",
      description: "Soft skills training, resume building, and mock interviews",
      activities: ["ACCA Professional level", "PGCFM modules", "Industry exposure", "Placement preparation"],
    },
    {
      phase: "Graduation & Placement",
      description: "Capstone project and placement with top firms",
      activities: ["Final certifications", "Campus interviews", "Career guidance", "Alumni network"],
    },
  ]

  return (
    <section id="bcom-acca" className="w-full py-12 md:py-24 lg:py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
              Professional Accounting Program
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">BCOM + ACCA + PGCFM</h2>
            <p className="max-w-3xl text-gray-600 md:text-xl">
              Your path to professional accounting excellence through a bachelor of commerce, ACCA certification, and
              postgraduate certificate in financial management for global opportunities.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">12+ Years of Excellence</h3>
            <p className="text-gray-600 text-sm">
              Delivering quality education with values of Sincerity, Hard Work, and Justice
            </p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">17-Acre Modern Campus</h3>
            <p className="text-gray-600 text-sm">
              State-of-the-art facilities including digital library and laboratories
            </p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">Expert Faculty</h3>
            <p className="text-gray-600 text-sm">Highly qualified instructors with extensive industry experience</p>
          </div>
          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">Recognized Excellence</h3>
            <p className="text-gray-600 text-sm">Approved by AICTE and affiliated with VTU and BNU</p>
          </div>
        </div>

        {/* Program Structure */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Program Structure</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {programStructure.map((program, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {program.icon}
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-2 text-center">{program.title}</h4>
                <p className="text-gray-600 text-sm text-center mb-3">{program.description}</p>
                <div className="text-center">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {program.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fee Structure */}
        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Fee Structure</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">₹25,000</div>
              <div className="text-sm text-gray-600 mb-1">Admission Fee</div>
              <div className="text-xs text-gray-500">Registration, administration, and welcome kit</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">₹1,80,000</div>
              <div className="text-sm text-gray-600 mb-1">First Year</div>
              <div className="text-xs text-gray-500">BCOM coursework, ACCA Knowledge level modules</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">₹1,10,000</div>
              <div className="text-sm text-gray-600 mb-1">Second & Third Year</div>
              <div className="text-xs text-gray-500">Advanced courses and ACCA Professional level</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-gray-600 mb-1">4th Year Scholarship</div>
              <div className="text-xs text-gray-500">PGCFM with 75% or higher grades</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <div className="text-3xl font-bold text-blue-800">₹4,25,000</div>
            <div className="text-gray-600">Total Program Cost</div>
            <div className="text-sm text-gray-500 mt-2">
              Flexible payment plans available • Merit scholarships up to 25%
            </div>
          </div>
        </div>

        {/* ACCA Program Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">ACCA Program Benefits</h3>
          <div className="space-y-6">
            {accaLevels.map((level, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-blue-800 mb-2">{level.level}</h4>
                    <p className="text-gray-600 mb-3">{level.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {level.subjects.map((subject, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <Award className="h-6 w-6 text-green-600" />
              <h4 className="font-semibold text-green-800">ACCA Powered by Zell Education</h4>
            </div>
            <p className="text-green-700 text-sm">
              ACCA registration fee is included in your program cost. Zell Education delivers global rankers and
              provides comprehensive support throughout your ACCA journey.
            </p>
          </div>
        </div>

        {/* Student Journey */}
        <div className="mb-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Student Journey</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentJourney.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-2 text-center">{phase.phase}</h4>
                <p className="text-gray-600 text-sm text-center mb-3">{phase.description}</p>
                <ul className="space-y-1">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      {activity}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerOpportunities.map((career, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    {career.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-800">{career.title}</h4>
                    <div className="text-green-600 font-semibold">{career.package}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{career.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Life & Support */}
        <div className="bg-blue-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Campus Life & Support</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Modern Facilities</h4>
              <ul className="text-blue-100 text-sm space-y-1">
                <li>• Wi-Fi enabled campus</li>
                <li>• Separate hostels for boys & girls</li>
                <li>• Digital library & language lab</li>
                <li>• Cafeteria, gym & yoga center</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Skill Enhancement</h4>
              <ul className="text-blue-100 text-sm space-y-1">
                <li>• Value added certification courses</li>
                <li>• English communication training</li>
                <li>• Aptitude development program</li>
                <li>• NPTEL courseware access</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Financial Support</h4>
              <ul className="text-blue-100 text-sm space-y-1">
                <li>• Merit scholarships available</li>
                <li>• Education loan assistance</li>
                <li>• Flexible fee installment options</li>
                <li>• 100% 4th year scholarship</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Apply for ACCA Program
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
