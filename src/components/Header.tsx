"use client"

import { useState } from "react"
import { GraduationCap, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-blue-800">Bangalore Institute</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#courses" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Courses
          </a>
          <a href="#campus" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Campus
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {/* <button className="hidden md:flex btn btn-secondary">Login</button> */}
          <button className="btn btn-primary">Apply Now</button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col gap-4 p-4">
            <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#courses" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Courses
            </a>
            <a href="#campus" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Campus
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
