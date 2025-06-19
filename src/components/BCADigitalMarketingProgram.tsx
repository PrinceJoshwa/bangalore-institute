import { TrendingUp, Award, CheckCircle, Users, BookOpen, Smartphone } from "lucide-react"

export default function BCADigitalMarketingProgram() {
  const certifications = [
    {
      provider: "Google",
      title: "Google Certifications",
      description: "Become certified in Google Ads, Analytics, and Search Console",
      courses: ["Google Ads", "Google Analytics", "Search Console", "YouTube Marketing"],
    },
    {
      provider: "Meta",
      title: "Meta Certifications",
      description: "Master Facebook, Instagram, and WhatsApp marketing platforms",
      courses: ["Facebook Ads", "Instagram Marketing", "WhatsApp Business", "Meta Analytics"],
    },
    {
      provider: "AI Tools",
      title: "AI Marketing Tools",
      description: "Generative AI and Prompt Engineering for modern marketing",
      courses: ["Generative AI", "Prompt Engineering", "AI Content Creation", "Marketing Automation"],
    },
    {
      provider: "HubSpot",
      title: "HubSpot Certification",
      description: "Learn inbound marketing, sales, and service methodologies",
      courses: ["Inbound Marketing", "Content Marketing", "Email Marketing", "CRM Management"],
    },
  ]

  const marketingSkills = [
    {
      category: "Digital Strategy",
      skills: ["SEO/SEM", "Content Strategy", "Social Media Planning", "Campaign Management"],
    },
    {
      category: "Analytics & Data",
      skills: ["Google Analytics", "Facebook Insights", "Conversion Tracking", "ROI Analysis"],
    },
    {
      category: "Creative & Content",
      skills: ["Graphic Design", "Video Marketing", "Copywriting", "Brand Storytelling"],
    },
    {
      category: "AI & Automation",
      skills: ["ChatGPT Marketing", "AI Content Tools", "Marketing Automation", "Chatbot Development"],
    },
  ]

  const careerPaths = [
    {
      title: "Digital Marketing Specialist",
      package: "₹4-7 LPA",
      description: "Manage digital campaigns across multiple platforms and channels",
      skills: ["Google Ads", "Social Media", "Content Marketing", "Analytics"],
    },
    {
      title: "Social Media Manager",
      package: "₹5-8 LPA",
      description: "Create and execute social media strategies for brand growth",
      skills: ["Instagram", "Facebook", "Content Creation", "Community Management"],
    },
    {
      title: "Performance Marketing Manager",
      package: "₹7-12 LPA",
      description: "Optimize campaigns for maximum ROI and conversion rates",
      skills: ["Paid Advertising", "Conversion Optimization", "Data Analysis", "A/B Testing"],
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
              Digital Marketing Specialization
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
              BCA + Digital Marketing + PGCCA Program
            </h2>
            <p className="max-w-3xl text-gray-600 md:text-xl">
              Digital marketing specialization with Google, Meta, and HubSpot certifications plus AI marketing tools and
              prompt engineering for modern marketing success.
            </p>
          </div>
        </div>

        {/* Program Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
              alt="Digital marketing analytics dashboard"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Digital Marketing Specialization</h3>
              <p className="text-gray-600 mb-6">
                Master modern marketing with industry-leading certifications from Google, Meta, HubSpot, and AI
                marketing tools. Get hands-on experience with real campaigns and live projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Google Ads & Analytics certification</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Meta marketing platforms mastery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">AI marketing tools training</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">HubSpot inbound marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Industry Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 font-semibold">{cert.provider}</div>
                    <h4 className="text-lg font-bold text-blue-800">{cert.title}</h4>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.courses.map((course, idx) => (
                    <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Skills */}
        <div className="mb-16 bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Core Marketing Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingSkills.map((category, index) => (
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
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Career Opportunities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {careerPaths.map((career, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-blue-600" />
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
          <h3 className="text-2xl font-bold mb-4">Why Choose Digital Marketing at BIMSR?</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <Award className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Industry Certifications</h4>
              <p className="text-blue-100 text-sm">Google, Meta, HubSpot, and AI marketing certifications included</p>
            </div>
            <div>
              <Users className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Live Campaign Experience</h4>
              <p className="text-blue-100 text-sm">Work on real marketing campaigns with industry partners</p>
            </div>
            <div>
              <BookOpen className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-2">AI-Powered Marketing</h4>
              <p className="text-blue-100 text-sm">Learn cutting-edge AI tools for modern marketing success</p>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Apply for Digital Marketing Program
          </button>
        </div>
      </div>
    </section>
  )
}
