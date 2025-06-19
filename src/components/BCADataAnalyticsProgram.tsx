import { Database, BarChart3, CheckCircle, Award, Users, BookOpen } from "lucide-react"

export default function BCADataAnalyticsProgram() {
  const careerTrack = [
    {
      semester: "Sem 1",
      title: "Data Literacy",
      description: "Build foundations in data science and statistical thinking",
      topics: ["Statistics Fundamentals", "Excel Mastery", "Data Visualization Basics", "SQL Introduction"],
    },
    {
      semester: "Sem 2",
      title: "Data Wrangling",
      description: "Learn data cleaning and preparation techniques",
      topics: ["Python for Data Science", "Data Cleaning", "Pandas & NumPy", "Data Import/Export"],
    },
    {
      semester: "Sem 3-4",
      title: "Predictive Modeling",
      description: "Build statistical models and machine learning algorithms",
      topics: ["Machine Learning", "Statistical Modeling", "Regression Analysis", "Classification Algorithms"],
    },
    {
      semester: "Sem 5-6",
      title: "Advanced Analytics",
      description: "Master complex analytical techniques and business intelligence",
      topics: ["Deep Learning", "Time Series Analysis", "Business Intelligence", "Advanced Visualization"],
    },
  ]

  const tools = [
    {
      category: "Programming",
      tools: ["Python", "R", "SQL", "JavaScript"],
    },
    {
      category: "Analytics",
      tools: ["Tableau", "Power BI", "Excel", "SPSS"],
    },
    {
      category: "Databases",
      tools: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    },
    {
      category: "Cloud & Big Data",
      tools: ["AWS", "Azure", "Hadoop", "Spark"],
    },
  ]

  const careerPaths = [
    {
      title: "Data Analyst",
      package: "₹4-7 LPA",
      description: "Analyze data to provide business insights and recommendations",
      skills: ["SQL", "Excel", "Tableau", "Statistics"],
    },
    {
      title: "Business Intelligence Analyst",
      package: "₹6-10 LPA",
      description: "Create dashboards and reports for business decision making",
      skills: ["Power BI", "Data Modeling", "ETL", "Business Acumen"],
    },
    {
      title: "Data Scientist",
      package: "₹8-15 LPA",
      description: "Build predictive models and machine learning solutions",
      skills: ["Python", "Machine Learning", "Statistics", "Deep Learning"],
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
              Data Analytics Specialization
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
              BCA + Data Analytics + PGCCA Program
            </h2>
            <p className="max-w-3xl text-gray-600 md:text-xl">
              Advanced analytics program with predictive modeling, data wrangling, and comprehensive analytical
              techniques for data-driven careers.
            </p>
          </div>
        </div>

        {/* Program Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Data analytics workspace with charts and graphs"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Data Analyst Career Track</h3>
              <p className="text-gray-600 mb-6">
                Each certification program includes 120-150 hours of specialized training designed to make you
                industry-ready with hands-on experience in real-world data projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Advanced Analytics in Sem 5-6</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Predictive Modeling in Sem 3-4</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Data Wrangling in Sem 2</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Data Literacy Foundations in Sem 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Data Analytics Learning Path</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {careerTrack.map((track, index) => (
              <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 font-semibold">{track.semester}</div>
                    <h4 className="text-lg font-bold text-blue-800">{track.title}</h4>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{track.description}</p>
                <div className="flex flex-wrap gap-2">
                  {track.topics.map((topic, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">Essential Tools & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <h4 className="text-lg font-bold text-blue-800 mb-4">{category.category}</h4>
                <div className="space-y-2">
                  {category.tools.map((tool, idx) => (
                    <div key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm">
                      {tool}
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
                  <BarChart3 className="h-8 w-8 text-blue-600" />
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
          <h3 className="text-2xl font-bold mb-4">Why Choose Data Analytics at BIMSR?</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <Award className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Industry-Ready Curriculum</h4>
              <p className="text-blue-100 text-sm">120-150 hours of specialized training with real-world projects</p>
            </div>
            <div>
              <Users className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Expert Mentorship</h4>
              <p className="text-blue-100 text-sm">Learn from industry professionals and data science experts</p>
            </div>
            <div>
              <BookOpen className="h-8 w-8 mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Hands-On Learning</h4>
              <p className="text-blue-100 text-sm">Work on real datasets and build a professional portfolio</p>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Apply for Data Analytics Program
          </button>
        </div>
      </div>
    </section>
  )
}
