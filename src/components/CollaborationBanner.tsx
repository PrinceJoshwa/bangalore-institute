"use client"

import { Handshake, ExternalLink } from "lucide-react"

export default function CollaborationBanner() {
  return (
    <section className="relative py-8 sm:py-12 overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-32 sm:h-48 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8">
          {/* Left Badge */}
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <Handshake className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
            <span className="text-white font-semibold text-sm sm:text-base">Official Partner</span>
          </div>

          {/* Main Text */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
              In Collaboration with{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                CollegePedia
              </span>
            </h3>
            <p className="text-blue-200 text-xs sm:text-sm lg:text-base">
              Empowering Students with Comprehensive Education Guidance
            </p>
          </div>

          {/* Right CTA (Optional) */}
          <a 
            href="https://collegepedia.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            <span>Visit CollegePedia</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Decorative Border Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
    </section>
  )
}
