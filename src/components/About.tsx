import { Award, Users, BookOpen } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Our Mission & Legacy</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Founded in 2005, Bangalore Institute Of Management Science and Research has been at the forefront of educational innovation for
              nearly two decades. Our mission is to empower students with cutting-edge knowledge, practical skills, and
              ethical values to become leaders who drive positive change in society and industry.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="University campus courtyard"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-blue-100 p-2">
                      <Award className="h-4 w-4 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-800">Academic Excellence</h3>
                  </div>
                  <p className="text-gray-600">
                    Consistently ranked among the top educational institutions with accreditation from leading national
                    bodies.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-blue-100 p-2">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-800">Industry Connections</h3>
                  </div>
                  <p className="text-gray-600">
                    Strong partnerships with leading companies ensuring 100% placement assistance and internship
                    opportunities.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-blue-100 p-2">
                      <BookOpen className="h-4 w-4 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-800">Innovation Focus</h3>
                  </div>
                  <p className="text-gray-600">
                    AI-powered smart classrooms and cutting-edge laboratories providing hands-on experience with
                    emerging technologies.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
