"use client"

import { useState } from "react"
import { BookOpen, Laptop, Activity, Home } from "lucide-react"

export default function CampusLife() {
  const [activeImage, setActiveImage] = useState(0)

  const images = [
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Modern university library",
      title: "State-of-the-art Library",
    },
    {
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Advanced computer laboratory",
      title: "Advanced Research Labs",
    },
    {
      src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80",
      alt: "University sports complex",
      title: "Multi-sport Complex",
    },
    {
      src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Student dormitory building",
      title: "Comfortable Hostels",
    },
  ]

  return (
    <section id="campus" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
              Student Experience
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">Campus Life</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl">
              Experience a vibrant campus environment with state-of-the-art facilities designed to enhance your learning
              journey.
            </p>
          </div>
        </div>

        {/* Campus Gallery */}
        <div className="space-y-4 mb-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
            <img
              src={images[activeImage].src || "/placeholder.svg"}
              alt={images[activeImage].alt}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-xl font-bold text-white">{images[activeImage].title}</h3>
            </div>
          </div>

          <div className="flex gap-2 overflow-auto pb-2">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative h-20 w-32 shrink-0 overflow-hidden cursor-pointer border-2 rounded-lg ${
                  activeImage === index ? "border-blue-600" : "border-transparent"
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Modern Library</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Over 50,000 books, digital resources, and quiet study spaces for focused learning.
            </p>
          </div>

          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <Laptop className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Advanced Labs</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Cutting-edge laboratories equipped with the latest technology and research tools.
            </p>
          </div>

          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Sports Complex</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Multi-sport facilities including indoor courts, swimming pool, and fitness center.
            </p>
          </div>

          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <Home className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Student Hostels</h3>
            </div>
            <p className="text-gray-600 text-sm">Comfortable accommodation with modern amenities and 24/7 security.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
