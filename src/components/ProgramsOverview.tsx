"use client"
import { ChevronRight, Award, Briefcase, CheckCircle, Laptop, BookOpen, GraduationCap } from "lucide-react"
import FeeCalculator from "./FeeCalculator"

interface ProgramCardProps {
  title: string
  description: string
  duration: string
  totalFee: string
  yearlyBreakdown: string[]
  highlights: string[]
  certifications: string[]
  href: string
}

function ProgramCard({
  title,
  description,
  duration,
  totalFee,
  yearlyBreakdown,
  highlights,
  certifications,
  href,
}: ProgramCardProps) {
  return (
    <div className="card p-6 hover:shadow-lg transition-shadow h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-blue-800">{title}</h3>
        <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">{duration}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-green-600">{totalFee}</span>
          <span className="text-sm text-gray-500">Total Program Fee</span>
        </div>
        <div className="text-xs text-gray-500 space-y-1">
          {yearlyBreakdown.map((year, index) => (
            <div key={index}>{year}</div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
          <Award className="h-4 w-4 text-blue-600" />
          Industry Certifications
        </h4>
        <div className="flex flex-wrap gap-1">
          {certifications.map((cert, index) => (
            <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-1">
          <Briefcase className="h-4 w-4 text-blue-600" />
          Program Highlights
        </h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-1">
              <CheckCircle className="h-3 w-3 text-green-600 mt-1 shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <a href={href} className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium mt-auto">
        Learn more <ChevronRight className="h-4 w-4" />
      </a>
    </div>
  )
}

export default function ProgramsOverview() {
  const programs = [
    {
      title: "BCA + Full Stack + PGCCA",
      description:
        "Comprehensive 4-year program combining undergraduate degree, full stack development certification, and postgraduate certificate in computer applications.",
      duration: "4 Years",
      totalFee: "₹3,95,000",
      yearlyBreakdown: [
        "Admission: ₹25,000",
        "1st Year: ₹2,00,000",
        "2nd Year: ₹85,000",
        "3rd Year: ₹85,000",
        "4th Year: 100% Scholarship",
      ],
      highlights: [
        "Brand-new i3 latest-generation laptops",
        "100% scholarship for 4th year with 70% aggregate",
        "Full Stack Developer certification included",
        "Dedicated student dashboard",
        "Industry project mentorship",
      ],
      certifications: ["Full Stack Development", "React.js", "Node.js", "MongoDB"],
      href: "#bca-fullstack",
    },
    {
      title: "BCA + Data Analytics + PGCCA",
      description:
        "Advanced analytics program with predictive modeling, data wrangling, and comprehensive analytical techniques for data-driven careers.",
      duration: "4 Years",
      totalFee: "₹3,95,000",
      yearlyBreakdown: [
        "Admission: ₹25,000",
        "1st Year: ₹2,00,000",
        "2nd Year: ₹85,000",
        "3rd Year: ₹85,000",
        "4th Year: 100% Scholarship",
      ],
      highlights: [
        "120-150 hours specialized training",
        "Advanced analytics in Sem 5-6",
        "Predictive modeling expertise",
        "Data literacy foundations",
        "Statistical model building",
      ],
      certifications: ["Data Analytics", "Python", "SQL", "Tableau"],
      href: "#bca-data-analytics",
    },
    {
      title: "BCA + Digital Marketing + PGCCA",
      description:
        "Digital marketing specialization with Google, Meta, and HubSpot certifications plus AI marketing tools and prompt engineering.",
      duration: "4 Years",
      totalFee: "₹3,95,000",
      yearlyBreakdown: [
        "Admission: ₹25,000",
        "1st Year: ₹2,00,000",
        "2nd Year: ₹85,000",
        "3rd Year: ₹85,000",
        "4th Year: 100% Scholarship",
      ],
      highlights: [
        "Google Ads & Analytics certification",
        "Meta marketing platforms mastery",
        "AI marketing tools training",
        "Generative AI certification",
        "HubSpot inbound marketing",
      ],
      certifications: ["Google Ads", "Meta Marketing", "HubSpot", "AI Marketing"],
      href: "#bca-digital-marketing",
    },
    {
      title: "BBA + Digital Marketing + PGCBA",
      description:
        "Business administration with digital marketing specialization, combining management principles with modern marketing strategies.",
      duration: "4 Years",
      totalFee: "₹3,65,000",
      yearlyBreakdown: [
        "Admission: ₹25,000",
        "1st Year: ₹1,90,000",
        "2nd Year: ₹75,000",
        "3rd Year: ₹75,000",
        "4th Year: 100% Scholarship",
      ],
      highlights: [
        "Business management foundations",
        "Digital marketing specialization",
        "Leadership development",
        "Strategic marketing planning",
        "Entrepreneurship training",
      ],
      certifications: ["Digital Marketing", "Business Analytics", "Google Ads", "Social Media"],
      href: "#bba-digital-marketing",
    },
    {
      title: "BCOM + ACCA + PGCFM",
      description:
        "Professional accounting pathway with ACCA certification and postgraduate certificate in financial management for global opportunities.",
      duration: "4 Years",
      totalFee: "₹4,25,000",
      yearlyBreakdown: [
        "Admission: ₹25,000",
        "1st Year: ₹1,80,000",
        "2nd Year: ₹1,10,000",
        "3rd Year: ₹1,10,000",
        "4th Year: 100% Scholarship",
      ],
      highlights: [
        "ACCA Knowledge, Skill & Professional levels",
        "Partnership with Zell Education",
        "Global accounting recognition",
        "Financial management expertise",
        "Merit scholarships up to 25%",
      ],
      certifications: ["ACCA", "Financial Management", "Taxation", "Auditing"],
      href: "#bcom-acca",
    },
  ]

  const inclusiveFeatures = [
    {
      icon: <Laptop className="h-8 w-8 text-blue-600" />,
      title: "Technology Package",
      description: "Brand-new i3 latest-generation laptops for each student with dedicated dashboard access",
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Professional Certifications",
      description: "Industry-recognized certification courses included in fee to enhance job readiness",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Learning Materials",
      description: "Comprehensive books, study materials, and college uniforms included in package",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Academic Excellence",
      description: "University registration and all academic requirements covered in program fee",
    },
  ]

  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-8 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
              Integrated Programs 2025-26
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
              Bachelor's Degree with Post-graduation and Professional Development
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Unique integrated programs combining bachelor's degrees with professional certifications to make you
              job-ready. Blend academic excellence with industry-relevant skills for guaranteed career success.
            </p>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">What's Included in Your Fees</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusiveFeatures.map((feature, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-blue-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>

        {/* Fee Structure Highlights */}
        <div className="mt-16 bg-white rounded-xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Fee Structure Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-gray-600 mb-1">4th Year Scholarship</div>
              <div className="text-xs text-gray-500">With 70% aggregate in undergraduate program</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹25K</div>
              <div className="text-sm text-gray-600 mb-1">Admission Fee</div>
              <div className="text-xs text-gray-500">One-time payment including registration and laptop</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">EMI</div>
              <div className="text-sm text-gray-600 mb-1">Flexible Payment</div>
              <div className="text-xs text-gray-500">No-cost EMI and education loan assistance available</div>
            </div>
          </div>
        </div>
{/* 
        <div className="flex justify-center mt-12">
          <button className="btn btn-primary px-8 py-3">
            Explore All Programs <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div> */}
        <div className="flex justify-center mt-12">
        <FeeCalculator/>
        </div>
      </div>
      
    </section>
  )
}
