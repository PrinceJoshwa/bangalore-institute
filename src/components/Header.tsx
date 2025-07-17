// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import { Link, useLocation } from "react-router-dom"
// // // import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react"

// // // export default function Header() {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false)
// // //   const [isScrolled, setIsScrolled] = useState(false)
// // //   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
// // //   const location = useLocation()

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setIsScrolled(window.scrollY > 20)
// // //     }
// // //     window.addEventListener("scroll", handleScroll)
// // //     return () => window.removeEventListener("scroll", handleScroll)
// // //   }, [])

// // //   const isActive = (path: string) => location.pathname === path

// // //   const programs = [
// // //     { name: "BCA + Full Stack + PGCCA", href: "/programs/bca-full-stack", fee: "₹2.5L Total" },
// // //     { name: "BCA + Data Analytics + PGCCA", href: "/programs/bca-data-analytics", fee: "₹2.5L Total" },
// // //     { name: "BCA + Digital Marketing + PGCCA", href: "/programs/bca-digital-marketing", fee: "₹2.5L Total" },
// // //     { name: "BBA + Digital Marketing + PGCBA", href: "/programs/bba-digital-marketing", fee: "₹2.3L Total" },
// // //     { name: "BCOM + ACCA + PGCFM", href: "/programs/bcom-acca", fee: "₹2.8L Total" },
// // //   ]

// // //   return (
// // //     <>
// // //       {/* Top Contact Bar */}
// // //       <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2 hidden lg:block">
// // //         <div className="container mx-auto px-4">
// // //           <div className="flex justify-between items-center text-sm">
// // //             <div className="flex items-center space-x-6">
// // //               <div className="flex items-center space-x-2">
// // //                 <Phone className="h-4 w-4" />
// // //                 <span>+91 8970002004</span>
// // //               </div>
// // //               <div className="flex items-center space-x-2">
// // //                 <Mail className="h-4 w-4" />
// // //                 <span>admissions@bangaloreinstitutions.com</span>
// // //               </div>
// // //               <div className="flex items-center space-x-2">
// // //                 <MapPin className="h-4 w-4" />
// // //                 <span>Bangalore, Karnataka</span>
// // //               </div>
// // //             </div>
// // //             <div className="flex items-center space-x-4">
// // //               <span className="text-yellow-400 font-semibold">🎯 Admissions 2025-26 Open!</span>
// // //               <Link
// // //                 to="/admission"
// // //                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-1 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105"
// // //               >
// // //                 Apply Now
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Main Header */}
// // //       <header
// // //         className={`sticky top-0 z-50 transition-all duration-300 ${
// // //           isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200" : "bg-white shadow-lg"
// // //         }`}
// // //       >
// // //         <div className="container mx-auto px-4">
// // //           <div className="flex items-center justify-between h-20">
// // //             {/* Logo */}
// // //             <Link to="/" className="flex items-center space-x-3">
// // //               <div className="relative">
// // //                 <img src="/institutelogo.png" alt="Institute Logo" className="w-26 h-30 object-contain" />
// // //                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-pulse"></div>
// // //               </div>
// // //             </Link>

// // //             {/* Desktop Navigation */}
// // //             <nav className="hidden lg:flex items-center space-x-8">
// // //               <Link
// // //                 to="/"
// // //                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// // //                   isActive("/") ? "text-blue-600" : ""
// // //                 }`}
// // //               >
// // //                 Home
// // //               </Link>
// // //               <Link
// // //                 to="/about"
// // //                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// // //                   isActive("/about") ? "text-blue-600" : ""
// // //                 }`}
// // //               >
// // //                 About
// // //               </Link>

// // //               {/* Programs Dropdown */}
// // //               <div
// // //                 className="relative"
// // //                 onMouseEnter={() => setActiveDropdown("programs")}
// // //                 onMouseLeave={() => setActiveDropdown(null)}
// // //               >
// // //                 <Link
// // //                   to="/programs"
// // //                   className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// // //                     isActive("/programs") ? "text-blue-600" : ""
// // //                   }`}
// // //                 >
// // //                   Programs
// // //                   <ChevronDown className="h-4 w-4" />
// // //                 </Link>
// // //                 {activeDropdown === "programs" && (
// // //                   <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-50">
// // //                     <div className="px-4 pb-3 border-b border-gray-100">
// // //                       <h3 className="font-semibold text-gray-900">Our Programs</h3>
// // //                       <p className="text-sm text-gray-600">Industry-ready courses with 100% placement</p>
// // //                     </div>
// // //                     {programs.map((program, index) => (
// // //                       <Link
// // //                         key={index}
// // //                         to={program.href}
// // //                         className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200"
// // //                       >
// // //                         <div className="font-medium">{program.name}</div>
// // //                         <div className="text-xs text-gray-500">4 Years • {program.fee}</div>
// // //                       </Link>
// // //                     ))}
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               <Link
// // //                 to="/faculty"
// // //                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// // //                   isActive("/faculty") ? "text-blue-600" : ""
// // //                 }`}
// // //               >
// // //                 Faculty
// // //               </Link>
// // //               <Link
// // //                 to="/admission"
// // //                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// // //                   isActive("/admission") ? "text-blue-600" : ""
// // //                 }`}
// // //               >
// // //                 Admission
// // //               </Link>
// // //               <Link
// // //                 to="/placements"
// // //                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// // //                   isActive("/placements") ? "text-blue-600" : ""
// // //                 }`}
// // //               >
// // //                 Placements
// // //               </Link>
// // //               <Link
// // //                 to="/campus"
// // //                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// // //                   isActive("/campus") ? "text-blue-600" : ""
// // //                 }`}
// // //               >
// // //                 Campus
// // //               </Link>
// // //               <Link
// // //                 to="/contact"
// // //                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// // //                   isActive("/contact") ? "text-blue-600" : ""
// // //                 }`}
// // //               >
// // //                 Contact
// // //               </Link>
// // //             </nav>

// // //             {/* CTA Buttons - Fixed spacing with ml-12 for better separation */}
// // //             <div className="hidden lg:flex items-center space-x-4 ml-12">
// // //               <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-2 rounded-lg font-medium transition-all duration-200">
// // //                 Brochure
// // //               </button>
// // //               <Link
// // //                 to="/admission"
// // //                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg transition-all duration-300 transform hover:scale-105"
// // //               >
// // //                 Apply Now
// // //               </Link>
// // //             </div>

// // //             {/* Mobile Menu Button */}
// // //             <button
// // //               className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
// // //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// // //             >
// // //               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Mobile Menu */}
// // //         {isMenuOpen && (
// // //           <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
// // //             <div className="container mx-auto px-4 py-6">
// // //               <nav className="space-y-4">
// // //                 <Link
// // //                   to="/"
// // //                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
// // //                     isActive("/") ? "text-blue-600" : ""
// // //                   }`}
// // //                   onClick={() => setIsMenuOpen(false)}
// // //                 >
// // //                   Home
// // //                 </Link>
// // //                 <Link
// // //                   to="/about"
// // //                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
// // //                     isActive("/about") ? "text-blue-600" : ""
// // //                   }`}
// // //                   onClick={() => setIsMenuOpen(false)}
// // //                 >
// // //                   About
// // //                 </Link>
// // //                 <div className="space-y-2">
// // //                   <p className="font-semibold text-gray-900 py-2">Programs</p>
// // //                   {programs.map((program, index) => (
// // //                     <Link
// // //                       key={index}
// // //                       to={program.href}
// // //                       className="block text-gray-600 hover:text-blue-600 py-1 pl-4"
// // //                       onClick={() => setIsMenuOpen(false)}
// // //                     >
// // //                       <div className="font-medium text-sm">{program.name}</div>
// // //                       <div className="text-xs text-gray-500">4 Years • {program.fee}</div>
// // //                     </Link>
// // //                   ))}
// // //                 </div>
// // //                 <Link
// // //                   to="/faculty"
// // //                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
// // //                     isActive("/faculty") ? "text-blue-600" : ""
// // //                   }`}
// // //                   onClick={() => setIsMenuOpen(false)}
// // //                 >
// // //                   Faculty
// // //                 </Link>
// // //                 <Link
// // //                   to="/admission"
// // //                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
// // //                     isActive("/admission") ? "text-blue-600" : ""
// // //                   }`}
// // //                   onClick={() => setIsMenuOpen(false)}
// // //                 >
// // //                   Admission
// // //                 </Link>
// // //                 <Link
// // //                   to="/placements"
// // //                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
// // //                     isActive("/placements") ? "text-blue-600" : ""
// // //                   }`}
// // //                   onClick={() => setIsMenuOpen(false)}
// // //                 >
// // //                   Placements
// // //                 </Link>
// // //                 <Link
// // //                   to="/campus"
// // //                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
// // //                     isActive("/campus") ? "text-blue-600" : ""
// // //                   }`}
// // //                   onClick={() => setIsMenuOpen(false)}
// // //                 >
// // //                   Campus
// // //                 </Link>
// // //                 <Link
// // //                   to="/contact"
// // //                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
// // //                     isActive("/contact") ? "text-blue-600" : ""
// // //                   }`}
// // //                   onClick={() => setIsMenuOpen(false)}
// // //                 >
// // //                   Contact
// // //                 </Link>
// // //                 <div className="pt-8 space-y-4 border-t border-gray-100 mt-6 sticky bottom-0 bg-white">
// // //                   <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-3 rounded-lg font-medium transition-all duration-200">
// // //                     Download Brochure
// // //                   </button>
// // //                   <Link
// // //                     to="/admission"
// // //                     className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center"
// // //                     onClick={() => setIsMenuOpen(false)}
// // //                   >
// // //                     Apply Now
// // //                   </Link>
// // //                 </div>
// // //               </nav>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </header>
// // //     </>
// // //   )
// // // }

// // "use client"

// // import type React from "react"

// // import { useState, useEffect } from "react"
// // import { Link, useLocation } from "react-router-dom"
// // import { Menu, X, ChevronDown, Phone, Mail, MapPin, Download } from "lucide-react"

// // export default function Header() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false)
// //   const [isScrolled, setIsScrolled] = useState(false)
// //   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
// //   const [showBrochurePopup, setShowBrochurePopup] = useState(false)
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     program: "",
// //   })
// //   const location = useLocation()

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 20)
// //     }
// //     window.addEventListener("scroll", handleScroll)
// //     return () => window.removeEventListener("scroll", handleScroll)
// //   }, [])

// //   const isActive = (path: string) => location.pathname === path

// //   const programs = [
// //     { name: "BCA + Full Stack + PGCCA", href: "/programs/bca-full-stack", fee: "₹2.5L Total" },
// //     { name: "BCA + Data Analytics + PGCCA", href: "/programs/bca-data-analytics", fee: "₹2.5L Total" },
// //     { name: "BCA + Digital Marketing + PGCCA", href: "/programs/bca-digital-marketing", fee: "₹2.5L Total" },
// //     { name: "BBA + Digital Marketing + PGCBA", href: "/programs/bba-digital-marketing", fee: "₹2.3L Total" },
// //     { name: "BCOM + ACCA + PGCFM", href: "/programs/bcom-acca", fee: "₹2.8L Total" },
// //   ]

// //   const handleBrochureClick = () => {
// //     setShowBrochurePopup(true)
// //   }

// //   const handleFormSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()

// //     // Submit to Supabase (contact table)
// //     try {
// //       // Here you would integrate with Supabase
// //       console.log("Submitting to Supabase:", formData)

// //       // Trigger PDF download
// //       const link = document.createElement("a")
// //       link.href = "/course-brochure.pdf" // Your PDF path
// //       link.download = "BIMSR-Course-Brochure.pdf"
// //       link.click()

// //       setShowBrochurePopup(false)
// //       setFormData({ name: "", email: "", phone: "", program: "" })
// //     } catch (error) {
// //       console.error("Error submitting form:", error)
// //     }
// //   }

// //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     })
// //   }

// //   return (
// //     <>
// //       {/* Top Contact Bar */}
// //       <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2 hidden lg:block">
// //         <div className="container mx-auto px-4">
// //           <div className="flex justify-between items-center text-sm">
// //             <div className="flex items-center space-x-6">
// //               <div className="flex items-center space-x-2">
// //                 <Phone className="h-4 w-4" />
// //                 <span>+91 8970002004</span>
// //               </div>
// //               <div className="flex items-center space-x-2">
// //                 <Mail className="h-4 w-4" />
// //                 <span>admissions@bangaloreinstitutions.com</span>
// //               </div>
// //               <div className="flex items-center space-x-2">
// //                 <MapPin className="h-4 w-4" />
// //                 <span>Bangalore, Karnataka</span>
// //               </div>
// //             </div>
// //             <div className="flex items-center space-x-4">
// //               <span className="text-yellow-400 font-semibold">🎯 Admissions 2025-26 Open!</span>
// //               <Link
// //                 to="/admission"
// //                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-1 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105"
// //               >
// //                 Apply Now
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Header */}
// //       <header
// //         className={`sticky top-0 z-50 transition-all duration-300 ${
// //           isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200" : "bg-white shadow-lg"
// //         }`}
// //       >
// //         <div className="container mx-auto px-4">
// //           <div className="flex items-center justify-between h-20">
// //             {/* Logo */}
// //             <Link to="/" className="flex items-center space-x-3">
// //               <div className="relative">
// //                 <img src="/institutelogo.png" alt="Institute Logo" className="w-26 h-30 object-contain" />
// //                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-pulse"></div>
// //               </div>
// //             </Link>

// //             {/* Desktop Navigation */}
// //             <nav className="hidden lg:flex items-center space-x-8">
// //               <Link
// //                 to="/"
// //                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// //                   isActive("/") ? "text-blue-600" : ""
// //                 }`}
// //               >
// //                 Home
// //               </Link>
// //               <Link
// //                 to="/about"
// //                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// //                   isActive("/about") ? "text-blue-600" : ""
// //                 }`}
// //               >
// //                 About
// //               </Link>

// //               {/* Programs Dropdown */}
// //               <div
// //                 className="relative"
// //                 onMouseEnter={() => setActiveDropdown("programs")}
// //                 onMouseLeave={() => setActiveDropdown(null)}
// //               >
// //                 <Link
// //                   to="/programs"
// //                   className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// //                     isActive("/programs") ? "text-blue-600" : ""
// //                   }`}
// //                 >
// //                   Programs
// //                   <ChevronDown className="h-4 w-4" />
// //                 </Link>
// //                 {activeDropdown === "programs" && (
// //                   <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-50">
// //                     <div className="px-4 pb-3 border-b border-gray-100">
// //                       <h3 className="font-semibold text-gray-900">Our Programs</h3>
// //                       <p className="text-sm text-gray-600">Industry-ready courses with 100% placement</p>
// //                     </div>
// //                     {programs.map((program, index) => (
// //                       <Link
// //                         key={index}
// //                         to={program.href}
// //                         className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200"
// //                       >
// //                         <div className="font-medium">{program.name}</div>
// //                         <div className="text-xs text-gray-500">4 Years • {program.fee}</div>
// //                       </Link>
// //                     ))}
// //                   </div>
// //                 )}
// //               </div>

// //               <Link
// //                 to="/faculty"
// //                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// //                   isActive("/faculty") ? "text-blue-600" : ""
// //                 }`}
// //               >
// //                 Faculty
// //               </Link>
// //               <Link
// //                 to="/admission"
// //                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// //                   isActive("/admission") ? "text-blue-600" : ""
// //                 }`}
// //               >
// //                 Admission
// //               </Link>
// //               <Link
// //                 to="/placements"
// //                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// //                   isActive("/placements") ? "text-blue-600" : ""
// //                 }`}
// //               >
// //                 Placements
// //               </Link>
// //               <Link
// //                 to="/campus"
// //                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// //                   isActive("/campus") ? "text-blue-600" : ""
// //                 }`}
// //               >
// //                 Campus
// //               </Link>
// //               <Link
// //                 to="/contact"
// //                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
// //                   isActive("/contact") ? "text-blue-600" : ""
// //                 }`}
// //               >
// //                 Contact
// //               </Link>
// //             </nav>

// //             {/* CTA Buttons */}
// //             <div className="hidden lg:flex items-center space-x-4 ml-12">
// //               <button
// //                 onClick={handleBrochureClick}
// //                 className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-2 rounded-lg font-medium transition-all duration-200"
// //               >
// //                 Brochure
// //               </button>
// //               <Link
// //                 to="/admission"
// //                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg transition-all duration-300 transform hover:scale-105"
// //               >
// //                 Apply Now
// //               </Link>
// //             </div>

// //             {/* Mobile Menu Button */}
// //             <button
// //               className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //             >
// //               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Menu */}
// //         {isMenuOpen && (
// //           <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
// //             <div className="container mx-auto px-4 py-6">
// //               <nav className="space-y-4">
// //                 <Link
// //                   to="/"
// //                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
// //                     isActive("/") ? "text-blue-600" : ""
// //                   }`}
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   Home
// //                 </Link>
// //                 <Link
// //                   to="/about"
// //                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
// //                     isActive("/about") ? "text-blue-600" : ""
// //                   }`}
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   About
// //                 </Link>
// //                 <div className="space-y-2">
// //                   <p className="font-semibold text-gray-900 py-2">Programs</p>
// //                   {programs.map((program, index) => (
// //                     <Link
// //                       key={index}
// //                       to={program.href}
// //                       className="block text-gray-600 hover:text-blue-600 py-1 pl-4"
// //                       onClick={() => setIsMenuOpen(false)}
// //                     >
// //                       <div className="font-medium text-sm">{program.name}</div>
// //                       <div className="text-xs text-gray-500">4 Years • {program.fee}</div>
// //                     </Link>
// //                   ))}
// //                 </div>
// //                 <Link
// //                   to="/faculty"
// //                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
// //                     isActive("/faculty") ? "text-blue-600" : ""
// //                   }`}
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   Faculty
// //                 </Link>
// //                 <Link
// //                   to="/admission"
// //                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
// //                     isActive("/admission") ? "text-blue-600" : ""
// //                   }`}
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   Admission
// //                 </Link>
// //                 <Link
// //                   to="/placements"
// //                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
// //                     isActive("/placements") ? "text-blue-600" : ""
// //                   }`}
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   Placements
// //                 </Link>
// //                 <Link
// //                   to="/campus"
// //                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
// //                     isActive("/campus") ? "text-blue-600" : ""
// //                   }`}
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   Campus
// //                 </Link>
// //                 <Link
// //                   to="/contact"
// //                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
// //                     isActive("/contact") ? "text-blue-600" : ""
// //                   }`}
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   Contact
// //                 </Link>
// //                 <div className="pt-8 space-y-4 border-t border-gray-100 mt-6 sticky bottom-0 bg-white">
// //                   <button
// //                     onClick={() => {
// //                       handleBrochureClick()
// //                       setIsMenuOpen(false)
// //                     }}
// //                     className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-3 rounded-lg font-medium transition-all duration-200"
// //                   >
// //                     Download Brochure
// //                   </button>
// //                   <Link
// //                     to="/admission"
// //                     className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center"
// //                     onClick={() => setIsMenuOpen(false)}
// //                   >
// //                     Apply Now
// //                   </Link>
// //                 </div>
// //               </nav>
// //             </div>
// //           </div>
// //         )}
// //       </header>

// //       {/* Brochure Popup */}
// //       {showBrochurePopup && (
// //         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
// //           <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
// //             <button
// //               onClick={() => setShowBrochurePopup(false)}
// //               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
// //             >
// //               <X className="h-6 w-6" />
// //             </button>

// //             <div className="text-center mb-6">
// //               <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
// //               <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Brochure</h3>
// //               <p className="text-gray-600">Get detailed information about our programs and facilities</p>
// //             </div>

// //             <form onSubmit={handleFormSubmit} className="space-y-4">
// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Full Name"
// //                 value={formData.name}
// //                 onChange={handleInputChange}
// //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                 required
// //               />
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email Address"
// //                 value={formData.email}
// //                 onChange={handleInputChange}
// //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                 required
// //               />
// //               <input
// //                 type="tel"
// //                 name="phone"
// //                 placeholder="Phone Number"
// //                 value={formData.phone}
// //                 onChange={handleInputChange}
// //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                 required
// //               />
// //               <select
// //                 name="program"
// //                 value={formData.program}
// //                 onChange={handleInputChange}
// //                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
// //                 required
// //               >
// //                 <option value="">Select Program</option>
// //                 {programs.map((program, index) => (
// //                   <option key={index} value={program.name}>
// //                     {program.name}
// //                   </option>
// //                 ))}
// //               </select>
// //               <button
// //                 type="submit"
// //                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
// //               >
// //                 Download Brochure
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   )
// // }

// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import { Link, useLocation } from "react-router-dom"
// import { Menu, X, ChevronDown, Phone, Mail, MapPin, Download } from 'lucide-react'
// import supabase  from "../lib/supabase"

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
//   const [showBrochurePopup, setShowBrochurePopup] = useState(false)
//   const [isSubmittingBrochure, setIsSubmittingBrochure] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     program: "",
//   })
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const isActive = (path: string) => location.pathname === path

//   const programs = [
//     { name: "BCA + Full Stack + PGCCA", href: "programs/bca-full-stack", fee: "₹2.5L Total" },
//     { name: "BCA + Data Analytics + PGCCA", href: "programs/bca-data-analytics", fee: "₹2.5L Total" },
//     { name: "BCA + Digital Marketing + PGCCA", href: "programs/bca-digital-marketing", fee: "₹2.5L Total" },
//     { name: "BBA + Digital Marketing + PGCBA", href: "programs/bba-digital-marketing", fee: "₹2.3L Total" },
//     { name: "BCOM + ACCA + PGCFM", href: "programs/bcom-acca", fee: "₹2.8L Total" },
//   ]

//   const handleBrochureClick = () => {
//     setShowBrochurePopup(true)
//   }

//   const handleFormSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmittingBrochure(true)

//     try {
//       const contactData = {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         program: formData.program,
//         message: "Brochure Download Request",
//         created_at: new Date().toISOString(),
//       }

//       const { data, error } = await supabase.from("contact").insert([contactData])

//       if (error) throw error

//       // Trigger PDF download
//       const link = document.createElement("a")
//       link.href = "course-brochure.pdf"
//       link.download = "BIMSR-Course-Brochure.pdf"
//       link.click()

//       setShowBrochurePopup(false)
//       setFormData({ name: "", email: "", phone: "", program: "" })
//     } catch (error) {
//       console.error("Error submitting brochure form:", error)
//       // Still allow download even if database insert fails
//       const link = document.createElement("a")
//       link.href = "course-brochure.pdf"
//       link.download = "BIMSR-Course-Brochure.pdf"
//       link.click()

//       setShowBrochurePopup(false)
//       setFormData({ name: "", email: "", phone: "", program: "" })
//     } finally {
//       setIsSubmittingBrochure(false)
//     }
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   return (
//     <>
//       {/* Top Contact Bar */}
//       <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-2 hidden lg:block">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center text-sm">
//             <div className="flex items-center space-x-6">
//               <div className="flex items-center space-x-2">
//                 <Phone className="h-4 w-4" />
//                 <span>+91 8970002004</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Mail className="h-4 w-4" />
//                 <span>admissions@bangaloreinstitutions.com</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <MapPin className="h-4 w-4" />
//                 <span>Bangalore, Karnataka</span>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <span className="text-yellow-400 font-semibold">🎯 Admissions 2025-26 Open!</span>
//               <Link
//                 to="admission"
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-1 rounded-full text-xs font-medium transition-all duration-300 transform hover:scale-105"
//               >
//                 Apply Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header
//         className={`sticky top-0 z-50 transition-all duration-300 ${
//           isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200" : "bg-white shadow-lg"
//         }`}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <Link to="" className="flex items-center space-x-3">
//               <div className="relative">
//                 <img src="institutelogo.png" alt="Institute Logo" className="w-26 h-30 object-contain" />
//                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-pulse"></div>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center space-x-8">
//               <Link
//                 to=""
//                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
//                   isActive("") ? "text-blue-600" : ""
//                 }`}
//               >
//                 Home
//               </Link>
//               <Link
//                 to="about"
//                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
//                   isActive("about") ? "text-blue-600" : ""
//                 }`}
//               >
//                 About
//               </Link>

//               {/* Programs Dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setActiveDropdown("programs")}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <Link
//                   to="programs"
//                   className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
//                     isActive("programs") ? "text-blue-600" : ""
//                   }`}
//                 >
//                   Programs
//                   <ChevronDown className="h-4 w-4" />
//                 </Link>
//                 {activeDropdown === "programs" && (
//                   <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-50">
//                     <div className="px-4 pb-3 border-b border-gray-100">
//                       <h3 className="font-semibold text-gray-900">Our Programs</h3>
//                       <p className="text-sm text-gray-600">Industry-ready courses with 100% placement</p>
//                     </div>
//                     {programs.map((program, index) => (
//                       <Link
//                         key={index}
//                         to={program.href}
//                         className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200"
//                       >
//                         <div className="font-medium">{program.name}</div>
//                         <div className="text-xs text-gray-500">4 Years • {program.fee}</div>
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link
//                 to="faculty"
//                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
//                   isActive("faculty") ? "text-blue-600" : ""
//                 }`}
//               >
//                 Faculty
//               </Link>
//               <Link
//                 to="admission"
//                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
//                   isActive("admission") ? "text-blue-600" : ""
//                 }`}
//               >
//                 Admission
//               </Link>
//               <Link
//                 to="placements"
//                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
//                   isActive("placements") ? "text-blue-600" : ""
//                 }`}
//               >
//                 Placements
//               </Link>
//               <Link
//                 to="campus"
//                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
//                   isActive("campus") ? "text-blue-600" : ""
//                 }`}
//               >
//                 Campus
//               </Link>
//               <Link
//                 to="contact"
//                 className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
//                   isActive("contact") ? "text-blue-600" : ""
//                 }`}
//               >
//                 Contact
//               </Link>
//             </nav>

//             {/* CTA Buttons */}
//             <div className="hidden lg:flex items-center space-x-4 ml-12">
//               <button
//                 onClick={handleBrochureClick}
//                 className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-2 rounded-lg font-medium transition-all duration-200"
//               >
//                 Brochure
//               </button>
//               <Link
//                 to="admission"
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 Apply Now
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
//             <div className="container mx-auto px-4 py-6">
//               <nav className="space-y-4">
//                 <Link
//                   to=""
//                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
//                     isActive("") ? "text-blue-600" : ""
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="about"
//                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
//                     isActive("about") ? "text-blue-600" : ""
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   About
//                 </Link>
//                 <div className="space-y-2">
//                   <p className="font-semibold text-gray-900 py-2">Programs</p>
//                   {programs.map((program, index) => (
//                     <Link
//                       key={index}
//                       to={program.href}
//                       className="block text-gray-600 hover:text-blue-600 py-1 pl-4"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       <div className="font-medium text-sm">{program.name}</div>
//                       <div className="text-xs text-gray-500">4 Years • {program.fee}</div>
//                     </Link>
//                   ))}
//                 </div>
//                 <Link
//                   to="faculty"
//                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
//                     isActive("faculty") ? "text-blue-600" : ""
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Faculty
//                 </Link>
//                 <Link
//                   to="admission"
//                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
//                     isActive("admission") ? "text-blue-600" : ""
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Admission
//                 </Link>
//                 <Link
//                   to="placements"
//                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
//                     isActive("placements") ? "text-blue-600" : ""
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Placements
//                 </Link>
//                 <Link
//                   to="campus"
//                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
//                     isActive("campus") ? "text-blue-600" : ""
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Campus
//                 </Link>
//                 <Link
//                   to="contact"
//                   className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
//                     isActive("contact") ? "text-blue-600" : ""
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   Contact
//                 </Link>
//                 <div className="pt-8 space-y-4 border-t border-gray-100 mt-6 sticky bottom-0 bg-white">
//                   <button
//                     onClick={() => {
//                       handleBrochureClick()
//                       setIsMenuOpen(false)
//                     }}
//                     className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-3 rounded-lg font-medium transition-all duration-200"
//                   >
//                     Download Brochure
//                   </button>
//                   <Link
//                     to="admission"
//                     className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Apply Now
//                   </Link>
//                 </div>
//               </nav>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Brochure Popup */}
//       {showBrochurePopup && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
//             <button
//               onClick={() => setShowBrochurePopup(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//             >
//               <X className="h-6 w-6" />
//             </button>

//             <div className="text-center mb-6">
//               <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Brochure</h3>
//               <p className="text-gray-600">Get detailed information about our programs and facilities</p>
//             </div>

//             <form onSubmit={handleFormSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 required
//               />
//               <select
//                 name="program"
//                 value={formData.program}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 required
//               >
//                 <option value="">Select Program</option>
//                 {programs.map((program, index) => (
//                   <option key={index} value={program.name}>
//                     {program.name}
//                   </option>
//                 ))}
//               </select>
//               <button
//                 type="submit"
//                 disabled={isSubmittingBrochure}
//                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 {isSubmittingBrochure ? (
//                   <>
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                     Processing...
//                   </>
//                 ) : (
//                   <>
//                     <Download className="h-4 w-4" />
//                     Download Brochure
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Download } from 'lucide-react'
import supabase  from "../lib/supabase"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [showBrochurePopup, setShowBrochurePopup] = useState(false)
  const [isSubmittingBrochure, setIsSubmittingBrochure] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
  })
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
    { name: "BCA + Full Stack + PGCCA", href: "programs/bca-full-stack", fee: "₹3.95L Total" },
    { name: "BCA + Data Analytics + PGCCA", href: "programs/bca-data-analytics", fee: "₹3.95L Total" },
    { name: "BCA + Digital Marketing + PGCCA", href: "programs/bca-digital-marketing", fee: "₹3.95L Total" },
    { name: "BBA + Digital Marketing + PGCBA", href: "programs/bba-digital-marketing", fee: "₹3.65L Total" },
    { name: "BCOM + ACCA + PGCFM", href: "programs/bcom-acca", fee: "₹4.25L Total" },
  ]

  const handleBrochureClick = () => {
    setShowBrochurePopup(true)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingBrochure(true)

    try {
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        program: formData.program,
        message: "Brochure Download Request",
        created_at: new Date().toISOString(),
      }

      const { error } = await supabase.from("contact").insert([contactData])

      if (error) throw error

      // Trigger PDF download
      const link = document.createElement("a")
      link.href = "course-brochure.pdf"
      link.download = "BIMSR-Course-Brochure.pdf"
      link.click()

      setShowBrochurePopup(false)
      setFormData({ name: "", email: "", phone: "", program: "" })
    } catch (error) {
      console.error("Error submitting brochure form:", error)
      // Still allow download even if database insert fails
      const link = document.createElement("a")
      link.href = "course-brochure.pdf"
      link.download = "BIMSR-Course-Brochure.pdf"
      link.click()

      setShowBrochurePopup(false)
      setFormData({ name: "", email: "", phone: "", program: "" })
    } finally {
      setIsSubmittingBrochure(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
                to="admission"
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
            <Link to="" className="flex items-center space-x-3">
              <div className="relative">
                <img src="institutelogo.png" alt="Institute Logo" className="w-26 h-30 object-contain" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full animate-pulse"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to=""
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive("") ? "text-blue-600" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="about"
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive("about") ? "text-blue-600" : ""
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
                <Link
                  to="programs"
                  className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                    isActive("programs") ? "text-blue-600" : ""
                  }`}
                >
                  Programs
                  <ChevronDown className="h-4 w-4" />
                </Link>
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
                        <div className="text-xs text-gray-500">4 Years • {program.fee}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="faculty"
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive("faculty") ? "text-blue-600" : ""
                }`}
              >
                Faculty
              </Link>
              <Link
                to="admission"
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive("admission") ? "text-blue-600" : ""
                }`}
              >
                Admission
              </Link>
              <Link
                to="placements"
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive("placements") ? "text-blue-600" : ""
                }`}
              >
                Placements
              </Link>
              <Link
                to="campus"
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive("campus") ? "text-blue-600" : ""
                }`}
              >
                Campus
              </Link>
              <Link
                to="contact"
                className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                  isActive("contact") ? "text-blue-600" : ""
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4 ml-12">
              <button
                onClick={handleBrochureClick}
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-2 rounded-lg font-medium transition-all duration-200"
              >
                Brochure
              </button>
              <Link
                to="admission"
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
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                <Link
                  to=""
                  className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
                    isActive("") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="about"
                  className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
                    isActive("about") ? "text-blue-600" : ""
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
                      <div className="text-xs text-gray-500">4 Years • {program.fee}</div>
                    </Link>
                  ))}
                </div>
                <Link
                  to="faculty"
                  className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
                    isActive("faculty") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Faculty
                </Link>
                <Link
                  to="admission"
                  className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
                    isActive("admission") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admission
                </Link>
                <Link
                  to="placements"
                  className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
                    isActive("placements") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Placements
                </Link>
                <Link
                  to="campus"
                  className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
                    isActive("campus") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Campus
                </Link>
                <Link
                  to="contact"
                  className={`block text-gray-700 hover:text-blue-600 font-medium py-2 ${
                    isActive("contact") ? "text-blue-600" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-8 space-y-4 border-t border-gray-100 mt-6 sticky bottom-0 bg-white">
                  <button
                    onClick={() => {
                      handleBrochureClick()
                      setIsMenuOpen(false)
                    }}
                    className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-3 rounded-lg font-medium transition-all duration-200"
                  >
                    Download Brochure
                  </button>
                  <Link
                    to="admission"
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

      {/* Brochure Popup */}
      {showBrochurePopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowBrochurePopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center mb-6">
              <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Download Brochure</h3>
              <p className="text-gray-600">Get detailed information about our programs and facilities</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <select
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Program</option>
                {programs.map((program, index) => (
                  <option key={index} value={program.name}>
                    {program.name}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                disabled={isSubmittingBrochure}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmittingBrochure ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    Download Brochure
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}