import { Award, Trophy, Heart, Users, Star, Gift } from "lucide-react"

export default function Scholarships() {
  const scholarshipPrograms = [
    {
      title: "Academic Excellence Awards",
      description:
        "Top performers receive merit scholarships up to ₹2L annually. Recognition ceremonies celebrate outstanding academic achievements.",
      icon: <Award className="h-8 w-8 text-blue-600" />,
      amount: "Up to ₹2L",
      eligibility: "Top 10% performers",
    },
    {
      title: "Sports Scholarships",
      description:
        "State and national level athletes get full tuition waivers. Special coaching and equipment support included.",
      icon: <Trophy className="h-8 w-8 text-blue-600" />,
      amount: "Full Tuition Waiver",
      eligibility: "State/National athletes",
    },
    {
      title: "Need-Based Support",
      description:
        "Financial assistance for deserving students from all backgrounds. Easy EMI options and flexible payment plans.",
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      amount: "Variable Support",
      eligibility: "Income-based criteria",
    },
    {
      title: "Leadership Recognition",
      description:
        "Student council and community service leaders receive special grants. Character development rewards beyond academics.",
      icon: <Users className="h-8 w-8 text-blue-600" />,
      amount: "Special Grants",
      eligibility: "Leadership roles",
    },
  ]

  const sportsExcellence = [
    {
      title: "Sports Academy",
      description:
        "Dedicated sports quota admissions with specialized training from certified professional coaches and modern facilities.",
      icon: <Trophy className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Kit Sponsorship",
      description:
        "Complete sports kit sponsorship up to C-level competitions, supporting your athletic journey alongside academics.",
      icon: <Gift className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Competition Support",
      description:
        "Active participation in inter-collegiate and state-level competitions with full institutional backing and training.",
      icon: <Star className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Modern Facilities",
      description:
        "Professional gym, playground, and specialized sports infrastructure within our 17-acre campus environment.",
      icon: <Award className="h-6 w-6 text-blue-600" />,
    },
  ]

  return (
    <section id="scholarships" className="w-full py-12 md:py-24 lg:py-8 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Merit Recognition</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
              Merit Recognition and Scholarships
            </h2>
            <p className="max-w-3xl text-gray-600 md:text-xl">
              Excellence Rewards - Top performers receive exclusive scholarships and fee waivers. Supporting merit
              students, sports enthusiasts, and artists equally. Dreams Unlimited - From enlightening to pursuing, we
              support your infinite potential.
            </p>
          </div>
        </div>

        {/* Scholarship Programs */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {scholarshipPrograms.map((program, index) => (
            <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  {program.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{program.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{program.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {program.amount}
                    </div>
                    <div className="text-blue-600 text-sm font-medium">{program.eligibility}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sports Excellence Program */}
        <div className="bg-white rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Comprehensive Sports Excellence Program</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportsExcellence.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="font-bold text-blue-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Merit Recognition Features */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">Excellence Rewards</h3>
            <p className="text-gray-600 text-sm">Top performers receive exclusive scholarships and fee waivers</p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">Academic Merit</h3>
            <p className="text-gray-600 text-sm">Semester-based performance evaluation with continuous recognition</p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">Holistic Support</h3>
            <p className="text-gray-600 text-sm">Supporting merit students, sports enthusiasts, and artists equally</p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-blue-800 mb-2">Dreams Unlimited</h3>
            <p className="text-gray-600 text-sm">From enlightening to pursuing - we support your infinite potential</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Apply for Scholarships Today</h3>
            <p className="mb-6 text-blue-100">
              Don't let financial constraints hold back your dreams. Apply for our comprehensive scholarship programs
              and unlock your potential.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Apply for Scholarships
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
