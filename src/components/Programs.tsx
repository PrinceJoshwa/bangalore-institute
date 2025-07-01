import { GraduationCap, Clock, Users, Award, CheckCircle, BookOpen } from "lucide-react"

export default function Programs() {
  const mbaSpecializations = [
    {
      title: "Marketing Management",
      description: "Comprehensive understanding of marketing strategies, consumer behavior, and brand management.",
      highlights: ["Digital Marketing", "Brand Management", "Consumer Psychology", "Market Research"],
    },
    {
      title: "Finance Management",
      description: "Advanced financial analysis, investment strategies, and corporate finance principles.",
      highlights: ["Financial Analysis", "Investment Banking", "Risk Management", "Corporate Finance"],
    },
    {
      title: "Human Resource Management",
      description: "Strategic HR practices, organizational behavior, and talent management.",
      highlights: ["Talent Acquisition", "Performance Management", "Organizational Development", "Labor Relations"],
    },
    {
      title: "Operations Management",
      description: "Supply chain optimization, quality management, and operational efficiency.",
      highlights: ["Supply Chain", "Quality Control", "Process Optimization", "Project Management"],
    },
    {
      title: "Information Technology Management",
      description: "IT strategy, digital transformation, and technology-driven business solutions.",
      highlights: ["IT Strategy", "Digital Transformation", "Data Analytics", "Cybersecurity"],
    },
    {
      title: "International Business",
      description: "Global trade, cross-cultural management, and international market strategies.",
      highlights: ["Global Markets", "Export-Import", "Cross-cultural Management", "International Finance"],
    },
  ]

  const programFeatures = [
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "2 Years Full-Time",
      description: "Comprehensive 4-semester program with industry exposure",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Small Batch Size",
      description: "Personalized attention with optimal student-faculty ratio",
    },
    {
      icon: <Award className="h-6 w-6 text-blue-600" />,
      title: "Industry Certification",
      description: "Additional certifications from leading industry partners",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
      title: "Case Study Method",
      description: "Harvard-style case study methodology for practical learning",
    },
  ]

  return (
    <section id="programs" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Academic Programs</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">MBA Program</h2>
            <p className="max-w-3xl text-gray-600 md:text-xl">
              Our Master of Business Administration program is designed to develop strategic thinking, leadership
              skills, and business acumen required for today's competitive corporate environment.
            </p>
          </div>
        </div>

        {/* Program Overview */}
        <div className="bg-white rounded-xl p-8 mb-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-blue-800">MBA - Master of Business Administration</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our MBA program combines rigorous academic curriculum with practical industry exposure. Students gain
                comprehensive knowledge in core business areas while specializing in their chosen field of interest.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">AICTE Approved Program</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">PGCET Code: B090MB</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">100% Placement Assistance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Industry-Relevant Curriculum</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {programFeatures.map((feature, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    {feature.icon}
                    <h4 className="font-semibold text-blue-800 text-sm">{feature.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">MBA Specializations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mbaSpecializations.map((spec, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold text-blue-800 mb-3">{spec.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{spec.description}</p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Key Areas:</p>
                  <div className="flex flex-wrap gap-1">
                    {spec.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Information */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your MBA Journey?</h3>
          <p className="mb-6 text-blue-100">
            Limited seats available for 2024 batch. Secure your future with BIMSR's comprehensive MBA program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Apply Now - MBA 2024
            </button>
            <button className="bg-white/10 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">
              Download Brochure
            </button>
          </div>
          <div className="mt-6 text-sm text-blue-100">
            <p>
              <strong>PGCET Code:</strong> B090MB | <strong>Contact:</strong> +91-962 060 2288
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
