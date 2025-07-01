// "use client"

// import { useState } from "react"
// import { Link, useLocation } from "react-router-dom"
// import { GraduationCap, Menu, X, ChevronDown, Phone, Mail } from "lucide-react"

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isProgramsOpen, setIsProgramsOpen] = useState(false)
//   const location = useLocation()

//   const isActive = (path: string) => location.pathname === path

//   return (
//     <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
//       {/* Top Bar */}
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
//             <div className="flex items-center gap-6">
//               <div className="flex items-center gap-2">
//                 <Phone className="h-4 w-4" />
//                 <span>8970002004</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Mail className="h-4 w-4" />
//                 <span>admissions@bangaloreinstitutions.com</span>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="font-semibold">🎯 Admissions 2025-26 Open!</span>
//               <button className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded text-xs font-medium transition-colors">
//                 Apply Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="container mx-auto flex h-20 items-center justify-between px-4">
//         <Link to="/" className="flex items-center gap-3">
//           <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
//             <GraduationCap className="h-7 w-7 text-white" />
//           </div>
//           <div>
//             <span className="text-2xl font-bold text-gray-900">BIMSR</span>
//             <p className="text-xs text-gray-600 leading-tight">
//               Bangalore Institute of Management
//               <br />
//               Science & Research
//             </p>
//           </div>
//         </Link>

//         <nav className="hidden lg:flex items-center gap-8">
//           <Link
//             to="/"
//             className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
//               isActive("/") ? "text-blue-600" : "text-gray-700"
//             }`}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
//               isActive("/about") ? "text-blue-600" : "text-gray-700"
//             }`}
//           >
//             About
//           </Link>
//           <div className="relative group">
//             <button className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
//               Programs <ChevronDown className="h-4 w-4" />
//             </button>
//             <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
//               <div className="p-4">
//                 <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Our Programs</div>
//                 <div className="space-y-2">
//                   <Link
//                     to="/programs/bca-full-stack"
//                     className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
//                   >
//                     <div className="font-medium">BCA + Full Stack + PGCCA</div>
//                     <div className="text-xs text-gray-500">3 Years • ₹2.5L Total</div>
//                   </Link>
//                   <Link
//                     to="/programs/bca-data-analytics"
//                     className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
//                   >
//                     <div className="font-medium">BCA + Data Analytics + PGCCA</div>
//                     <div className="text-xs text-gray-500">3 Years • ₹2.5L Total</div>
//                   </Link>
//                   <Link
//                     to="/programs/bca-digital-marketing"
//                     className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
//                   >
//                     <div className="font-medium">BCA + Digital Marketing + PGCCA</div>
//                     <div className="text-xs text-gray-500">3 Years • ₹2.5L Total</div>
//                   </Link>
//                   <Link
//                     to="/programs/bba-digital-marketing"
//                     className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
//                   >
//                     <div className="font-medium">BBA + Digital Marketing + PGCBA</div>
//                     <div className="text-xs text-gray-500">3 Years • ₹2.3L Total</div>
//                   </Link>
//                   <Link
//                     to="/programs/bcom-acca"
//                     className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
//                   >
//                     <div className="font-medium">BCOM + ACCA + PGCFM</div>
//                     <div className="text-xs text-gray-500">3 Years • ₹2.8L Total</div>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Link
//             to="/faculty"
//             className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
//               isActive("/faculty") ? "text-blue-600" : "text-gray-700"
//             }`}
//           >
//             Faculty
//           </Link>
//           <Link
//             to="/admission"
//             className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
//               isActive("/admission") ? "text-blue-600" : "text-gray-700"
//             }`}
//           >
//             Admission
//           </Link>
//           <Link
//             to="/placements"
//             className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
//               isActive("/placements") ? "text-blue-600" : "text-gray-700"
//             }`}
//           >
//             Placements
//           </Link>
//           <Link
//             to="/campus"
//             className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
//               isActive("/campus") ? "text-blue-600" : "text-gray-700"
//             }`}
//           >
//             Campus
//           </Link>
//           <Link
//             to="/contact"
//             className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
//               isActive("/contact") ? "text-blue-600" : "text-gray-700"
//             }`}
//           >
//             Contact
//           </Link>
//         </nav>

//         <div className="flex items-center gap-4">
//           <Link
//             to="/admission"
//             className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             Apply Now
//           </Link>
//           <button
//             className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden border-t bg-white">
//           <nav className="flex flex-col gap-1 p-4">
//             <Link
//               to="/"
//               className={`text-sm font-medium py-3 px-4 rounded-lg transition-colors ${
//                 isActive("/") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
//               }`}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className={`text-sm font-medium py-3 px-4 rounded-lg transition-colors ${
//                 isActive("/about") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
//               }`}
//             >
//               About
//             </Link>
//             <div>
//               <button
//                 onClick={() => setIsProgramsOpen(!isProgramsOpen)}
//                 className="text-sm font-medium py-3 px-4 rounded-lg transition-colors text-gray-700 hover:bg-gray-50 flex items-center gap-1 w-full text-left"
//               >
//                 Programs{" "}
//                 <ChevronDown className={`h-4 w-4 transition-transform ${isProgramsOpen ? "rotate-180" : ""}`} />
//               </button>
//               {isProgramsOpen && (
//                 <div className="ml-4 space-y-1">
//                   <Link
//                     to="/programs/bca-full-stack"
//                     className="block text-sm text-gray-600 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
//                   >
//                     BCA + Full Stack + PGCCA
//                   </Link>
//                   <Link
//                     to="/programs/bca-data-analytics"
//                     className="block text-sm text-gray-600 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
//                   >
//                     BCA + Data Analytics + PGCCA
//                   </Link>
//                   <Link
//                     to="/programs/bca-digital-marketing"
//                     className="block text-sm text-gray-600 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
//                   >
//                     BCA + Digital Marketing + PGCCA
//                   </Link>
//                   <Link
//                     to="/programs/bba-digital-marketing"
//                     className="block text-sm text-gray-600 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
//                   >
//                     BBA + Digital Marketing + PGCBA
//                   </Link>
//                   <Link
//                     to="/programs/bcom-acca"
//                     className="block text-sm text-gray-600 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
//                   >
//                     BCOM + ACCA + PGCFM
//                   </Link>
//                 </div>
//               )}
//             </div>
//             <Link
//               to="/faculty"
//               className={`text-sm font-medium py-3 px-4 rounded-lg transition-colors ${
//                 isActive("/faculty") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
//               }`}
//             >
//               Faculty
//             </Link>
//             <Link
//               to="/admission"
//               className={`text-sm font-medium py-3 px-4 rounded-lg transition-colors ${
//                 isActive("/admission") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
//               }`}
//             >
//               Admission
//             </Link>
//             <Link
//               to="/placements"
//               className={`text-sm font-medium py-3 px-4 rounded-lg transition-colors ${
//                 isActive("/placements") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
//               }`}
//             >
//               Placements
//             </Link>
//             <Link
//               to="/campus"
//               className={`text-sm font-medium py-3 px-4 rounded-lg transition-colors ${
//                 isActive("/campus") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
//               }`}
//             >
//               Campus
//             </Link>
//             <Link
//               to="/contact"
//               className={`text-sm font-medium py-3 px-4 rounded-lg transition-colors ${
//                 isActive("/contact") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
//               }`}
//             >
//               Contact
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown, Phone, Mail, MapPin, GraduationCap } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  const programs = [
    { name: "BCA + Full Stack + PGCCA", href: "/programs/bca-full-stack", fee: "₹2.5L Total" },
    { name: "BCA + Data Analytics + PGCCA", href: "/programs/bca-data-analytics", fee: "₹2.5L Total" },
    { name: "BCA + Digital Marketing + PGCCA", href: "/programs/bca-digital-marketing", fee: "₹2.5L Total" },
    { name: "BBA + Digital Marketing + PGCBA", href: "/programs/bba-digital-marketing", fee: "₹2.3L Total" },
    { name: "BCOM + ACCA + PGCFM", href: "/programs/bcom-acca", fee: "₹2.8L Total" },
  ]

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 8970002004</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>admissions@bangaloreinstitutions.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Bangalore, Karnataka</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-yellow-400 font-semibold">🎯 Admissions 2025-26 Open!</span>
              <Link
                to="/admission"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-1 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200" : "bg-white shadow-lg"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  BIMSR
                </h1>
                <p className="text-xs text-gray-600 font-medium">AI-Powered Education</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive("/") ? "text-blue-600" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive("/about") ? "text-blue-600" : ""
                }`}
              >
                About
              </Link>

              {/* Programs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("programs")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                  <span>Programs</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === "programs" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-50">
                    <div className="px-4 pb-3 border-b border-gray-100">
                      <h3 className="font-semibold text-gray-900">Our Programs</h3>
                      <p className="text-sm text-gray-600">Industry-ready courses with 100% placement</p>
                    </div>
                    {programs.map((program, index) => (
                      <Link
                        key={index}
                        to={program.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200"
                      >
                        <div className="font-medium">{program.name}</div>
                        <div className="text-xs text-gray-500">3 Years • {program.fee}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/faculty"
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive("/faculty") ? "text-blue-600" : ""
                }`}
              >
                Faculty
              </Link>
              <Link
                to="/admission"
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive("/admission") ? "text-blue-600" : ""
                }`}
              >
                Admission
              </Link>
              <Link
                to="/placements"
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive("/placements") ? "text-blue-600" : ""
                }`}
              >
                Placements
              </Link>
              <Link
                to="/campus"
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive("/campus") ? "text-blue-600" : ""
                }`}
              >
                Campus
              </Link>
              <Link
                to="/contact"
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive("/contact") ? "text-blue-600" : ""
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-all duration-200">
                Brochure
              </button>
              <Link
                to="/admission"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                <Link
                  to="/"
                  className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
                    isActive("/") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
                    isActive("/about") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900 py-2">Programs</p>
                  {programs.map((program, index) => (
                    <Link
                      key={index}
                      to={program.href}
                      className="block text-gray-600 hover:text-blue-600 py-1 pl-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="font-medium text-sm">{program.name}</div>
                      <div className="text-xs text-gray-500">3 Years • {program.fee}</div>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/faculty"
                  className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
                    isActive("/faculty") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Faculty
                </Link>
                <Link
                  to="/admission"
                  className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
                    isActive("/admission") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admission
                </Link>
                <Link
                  to="/placements"
                  className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
                    isActive("/placements") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Placements
                </Link>
                <Link
                  to="/campus"
                  className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
                    isActive("/campus") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Campus
                </Link>
                <Link
                  to="/contact"
                  className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
                    isActive("/contact") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-4 space-y-3">
                  <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all duration-200">
                    Download Brochure
                  </button>
                  <Link
                    to="/admission"
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Apply Now
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
