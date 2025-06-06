"use client"

import { useState } from "react"
import {
  Code,
  Briefcase,
  Wrench,
  Zap,
  Building,
  DollarSign,
  TrendingUp,
  PenTool,
  Film,
  Video,
  Cpu,
  Database,
  ChevronRight,
} from "lucide-react"

interface CourseCardProps {
  title: string
  description: string
  duration: string
  icon: string
}

function CourseCard({ title, description, duration, icon }: CourseCardProps) {
  const getIcon = () => {
    const iconProps = { className: "h-5 w-5 text-blue-600" }
    switch (icon) {
      case "code":
        return <Code {...iconProps} />
      case "briefcase":
        return <Briefcase {...iconProps} />
      case "wrench":
        return <Wrench {...iconProps} />
      case "zap":
        return <Zap {...iconProps} />
      case "building":
        return <Building {...iconProps} />
      case "dollar-sign":
        return <DollarSign {...iconProps} />
      case "trending-up":
        return <TrendingUp {...iconProps} />
      case "pen-tool":
        return <PenTool {...iconProps} />
      case "film":
        return <Film {...iconProps} />
      case "video":
        return <Video {...iconProps} />
      case "cpu":
        return <Cpu {...iconProps} />
      case "database":
        return <Database {...iconProps} />
      default:
        return <Code {...iconProps} />
    }
  }

  return (
    <div className="card p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-blue-100 p-2">{getIcon()}</div>
          <h3 className="text-xl font-bold text-blue-800">{title}</h3>
        </div>
        <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">{duration}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium">
        Learn more <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}

export default function Courses() {
  const [activeTab, setActiveTab] = useState("engineering")

  const tabs = [
    { id: "engineering", label: "Engineering" },
    { id: "management", label: "Management" },
    { id: "computer-science", label: "Computer Science" },
    { id: "arts", label: "Arts & Design" },
  ]

  const courseData = {
    engineering: [
      {
        title: "Mechanical Engineering",
        description: "Design and analyze mechanical systems with industry-standard tools and methodologies.",
        duration: "4 Years",
        icon: "wrench",
      },
      {
        title: "Electrical Engineering",
        description: "Study power systems, electronics, and control systems with hands-on laboratory experience.",
        duration: "4 Years",
        icon: "zap",
      },
      {
        title: "Civil Engineering",
        description: "Learn to design, construct and maintain physical and natural built environments.",
        duration: "4 Years",
        icon: "building",
      },
    ],
    management: [
      {
        title: "Business Administration",
        description: "Develop leadership skills and business acumen for today's competitive marketplace.",
        duration: "3 Years",
        icon: "briefcase",
      },
      {
        title: "Finance Management",
        description: "Master financial analysis, investment strategies, and corporate finance principles.",
        duration: "3 Years",
        icon: "dollar-sign",
      },
      {
        title: "Marketing Management",
        description: "Learn modern marketing strategies including digital marketing and brand management.",
        duration: "3 Years",
        icon: "trending-up",
      },
    ],
    "computer-science": [
      {
        title: "Computer Science",
        description: "Study algorithms, programming languages, and software development methodologies.",
        duration: "4 Years",
        icon: "code",
      },
      {
        title: "Data Science",
        description: "Learn to analyze and interpret complex data with machine learning and statistical methods.",
        duration: "4 Years",
        icon: "database",
      },
      {
        title: "Artificial Intelligence",
        description: "Explore neural networks, natural language processing, and computer vision applications.",
        duration: "4 Years",
        icon: "cpu",
      },
    ],
    arts: [
      {
        title: "Graphic Design",
        description: "Master visual communication and digital design tools for print and digital media.",
        duration: "3 Years",
        icon: "pen-tool",
      },
      {
        title: "Digital Media Arts",
        description: "Create compelling digital content across multiple platforms and mediums.",
        duration: "3 Years",
        icon: "film",
      },
      {
        title: "Animation & VFX",
        description: "Learn 2D and 3D animation techniques for entertainment and commercial applications.",
        duration: "3 Years",
        icon: "video",
      },
    ],
  }

  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Academic Programs</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Courses Offered</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Discover our comprehensive range of undergraduate and postgraduate programs designed to prepare you for
              the careers of tomorrow.
            </p>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id ? "bg-blue-600 text-white" : "bg-white text-blue-600 hover:bg-blue-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseData[activeTab as keyof typeof courseData].map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="btn btn-primary px-8 py-3">
            View All Programs 
            {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
          </button>
        </div>
      </div>
    </section>
  )
}
