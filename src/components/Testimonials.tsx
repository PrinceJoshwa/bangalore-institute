import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  program: string
  year: string
  quote: string
  imageSrc: string
}

function TestimonialCard({ name, program, year, quote, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-blue-700 rounded-lg p-6 text-white relative overflow-hidden">
      <Quote className="h-8 w-8 text-blue-400/30 absolute top-4 left-4" />
      <div className="pt-6 mb-6">
        <p className="text-white/90 italic relative z-10">"{quote}"</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img src={imageSrc || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-white/70">{program}</p>
          <p className="text-xs text-white/50">{year}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      program: "B.Tech Computer Science",
      year: "Class of 2023",
      quote:
        "The hands-on learning approach and industry-focused curriculum at Starlight prepared me exceptionally well for my career. I secured a position at a leading tech company even before graduation.",
      imageSrc:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Rahul Mehta",
      program: "MBA Finance",
      year: "Class of 2022",
      quote:
        "The faculty mentorship and networking opportunities at Starlight were invaluable. The case study approach to learning gave me practical insights that I apply daily in my current role.",
      imageSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Aisha Khan",
      program: "B.Des Digital Media",
      year: "Class of 2023",
      quote:
        "The creative freedom combined with technical guidance helped me develop a portfolio that stood out. The industry connections through the college helped me land my dream job.",
      imageSrc:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-500/20 px-3 py-1 text-sm text-white backdrop-blur-sm">
              Student Voices
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Students Say</h2>
            <p className="max-w-[900px] text-white/80 md:text-xl">
              Hear from our students about their experiences and success stories at Bangalore Institute Of Management Science and Research.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
