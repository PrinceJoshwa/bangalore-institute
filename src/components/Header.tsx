// // // "use client"

// // // import { useState } from "react"
// // // import { GraduationCap, Menu, X } from "lucide-react"

// // // export default function Header() {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false)

// // //   return (
// // //     <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
// // //       <div className="container mx-auto flex h-16 items-center justify-between px-4">
// // //         <div className="flex items-center gap-2">
// // //           <GraduationCap className="h-6 w-6 text-blue-600" />
// // //           <span className="text-xl font-bold text-blue-800">Bangalore Institute</span>
// // //         </div>

// // //         <nav className="hidden md:flex items-center gap-6">
// // //           <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
// // //             Home
// // //           </a>
// // //           <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
// // //             About
// // //           </a>
// // //           <a href="#courses" className="text-sm font-medium hover:text-blue-600 transition-colors">
// // //             Courses
// // //           </a>
// // //           <a href="#campus" className="text-sm font-medium hover:text-blue-600 transition-colors">
// // //             Campus
// // //           </a>
// // //           <a href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
// // //             Testimonials
// // //           </a>
// // //           <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
// // //             Contact
// // //           </a>
// // //         </nav>

// // //         <div className="flex items-center gap-4">
// // //           {/* <button className="hidden md:flex btn btn-secondary">Login</button> */}
// // //           <button className="btn btn-primary">Apply Now</button>
// // //           <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
// // //             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       {isMenuOpen && (
// // //         <div className="md:hidden border-t bg-white">
// // //           <nav className="flex flex-col gap-4 p-4">
// // //             <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
// // //               Home
// // //             </a>
// // //             <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
// // //               About
// // //             </a>
// // //             <a href="#courses" className="text-sm font-medium hover:text-blue-600 transition-colors">
// // //               Courses
// // //             </a>
// // //             <a href="#campus" className="text-sm font-medium hover:text-blue-600 transition-colors">
// // //               Campus
// // //             </a>
// // //             <a href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
// // //               Testimonials
// // //             </a>
// // //             <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
// // //               Contact
// // //             </a>
// // //           </nav>
// // //         </div>
// // //       )}
// // //     </header>
// // //   )
// // // }

// // "use client"

// // import { useState } from "react"
// // import { GraduationCap, Menu, X } from "lucide-react"

// // export default function Header() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false)

// //   return (
// //     <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
// //       <div className="container mx-auto flex h-16 items-center justify-between px-4">
// //         <div className="flex items-center gap-2">
// //           <GraduationCap className="h-6 w-6 text-blue-600" />
// //           <span className="text-xl font-bold text-blue-800">BIMSR</span>
// //         </div>

// //         <nav className="hidden md:flex items-center gap-6">
// //           <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //             Home
// //           </a>
// //           <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //             About
// //           </a>
// //           {/* <a href="#programs" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //             MBA
// //           </a> */}
// //           <a href="#faculty" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //             Faculty
// //           </a>
// //           <a href="#admission" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //             Admission
// //           </a>
// //           <a href="#courses" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //             Programs
// //           </a>
// //           <a href="#placements" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //             Placements
// //           </a>
// //           <a href="#campus" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //             Campus
// //           </a>
// //           <a href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //             Testimonials
// //           </a>
// //           <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //             Contact
// //           </a>
// //         </nav>

// //         <div className="flex items-center gap-4">
// //           {/* <button className="hidden md:flex btn btn-secondary">Login</button> */}
// //           <button className="btn btn-primary">Apply Now</button>
// //           <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
// //             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMenuOpen && (
// //         <div className="md:hidden border-t bg-white">
// //           <nav className="flex flex-col gap-4 p-4">
// //             <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //               Home
// //             </a>
// //             <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //               About
// //             </a>
// //             {/* <a href="#programs" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //               MBA
// //             </a> */}
// //             <a href="#faculty" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //               Faculty
// //             </a>
// //             <a href="#admission" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //               Admission
// //             </a>
// //             <a href="#courses" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //               Programs
// //             </a>
// //             <a href="#placements" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //               Placements
// //             </a>
// //             <a href="#campus" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //               Campus
// //             </a>
// //             <a href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //               Testimonials
// //             </a>
// //             <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
// //               Contact
// //             </a>
// //           </nav>
// //         </div>
// //       )}
// //     </header>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import { GraduationCap, Menu, X } from "lucide-react"

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">
//         <div className="flex items-center gap-2">
//           <GraduationCap className="h-6 w-6 text-blue-600" />
//           <span className="text-xl font-bold text-blue-800">BIMSR</span>
//         </div>

//         <nav className="hidden md:flex items-center gap-6">
//           <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             Home
//           </a>
//           <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             About
//           </a>
//           <a href="#faculty" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             Faculty
//           </a>
//           <a href="#admission" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             Admission
//           </a>
//           <a href="#courses" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             Programs
//           </a>
//           <a href="#placements" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             Placements
//           </a>
//           <a href="#campus" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             Campus
//           </a>
//           <a href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             Testimonials
//           </a>
//           <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             Contact
//           </a>
//         </nav>

//         <div className="flex items-center gap-4">
//           <button className="btn btn-primary">Apply Now</button>
//           <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden border-t bg-white">
//           <nav className="flex flex-col gap-4 p-4">
//             <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Home
//             </a>
//             <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               About
//             </a>
//             <a href="#faculty" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Faculty
//             </a>
//             <a href="#admission" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Admission
//             </a>
//             <a href="#courses" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Programs
//             </a>
//             <a href="#placements" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Placements
//             </a>
//             <a href="#campus" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Campus
//             </a>
//             <a href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Testimonials
//             </a>
//             <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Contact
//             </a>
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }

// "use client"

// import { useState } from "react"
// import { GraduationCap, Menu, X, ChevronDown } from "lucide-react"

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isProgramsOpen, setIsProgramsOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">
//         <div className="flex items-center gap-2">
//           <GraduationCap className="h-6 w-6 text-blue-600" />
//           <span className="text-xl font-bold text-blue-800">BIMSR</span>
//         </div>

//         <nav className="hidden md:flex items-center gap-6">
//           <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             Home
//           </a>
//           <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             About
//           </a>
//           <div className="relative group">
//             <button className="text-sm font-medium hover:text-blue-600 transition-colors flex items-center gap-1">
//               Programs <ChevronDown className="h-3 w-3" />
//             </button>
//             <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//               <div className="p-2">
//                 <a href="#bca-fullstack" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">
//                   BCA + Full Stack + PGCCA
//                 </a>
//                 <a
//                   href="#bca-data-analytics"
//                   className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
//                 >
//                   BCA + Data Analytics + PGCCA
//                 </a>
//                 <a
//                   href="#bca-digital-marketing"
//                   className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
//                 >
//                   BCA + Digital Marketing + PGCCA
//                 </a>
//                 <a
//                   href="#bba-digital-marketing"
//                   className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
//                 >
//                   BBA + Digital Marketing + PGCBA
//                 </a>
//                 <a href="#bcom-acca" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded">
//                   BCOM + ACCA + PGCFM
//                 </a>
//               </div>
//             </div>
//           </div>
//           <a href="#faculty" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             Faculty
//           </a>
//           <a href="#admission" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             Admission
//           </a>
//           <a href="#placements" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             Placements
//           </a>
//           <a href="#campus" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             Campus
//           </a>
//           <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
//             Contact
//           </a>
//         </nav>

//         <div className="flex items-center gap-4">
//           <button className="btn btn-primary">Apply Now</button>
//           <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden border-t bg-white">
//           <nav className="flex flex-col gap-4 p-4">
//             <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Home
//             </a>
//             <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               About
//             </a>
//             <div>
//               <button
//                 onClick={() => setIsProgramsOpen(!isProgramsOpen)}
//                 className="text-sm font-medium hover:text-blue-600 transition-colors flex items-center gap-1 w-full text-left"
//               >
//                 Programs <ChevronDown className="h-3 w-3" />
//               </button>
//               {isProgramsOpen && (
//                 <div className="ml-4 mt-2 space-y-2">
//                   <a href="#bca-fullstack" className="block text-sm text-gray-600 hover:text-blue-600">
//                     BCA + Full Stack + PGCCA
//                   </a>
//                   <a href="#bca-data-analytics" className="block text-sm text-gray-600 hover:text-blue-600">
//                     BCA + Data Analytics + PGCCA
//                   </a>
//                   <a href="#bca-digital-marketing" className="block text-sm text-gray-600 hover:text-blue-600">
//                     BCA + Digital Marketing + PGCCA
//                   </a>
//                   <a href="#bba-digital-marketing" className="block text-sm text-gray-600 hover:text-blue-600">
//                     BBA + Digital Marketing + PGCBA
//                   </a>
//                   <a href="#bcom-acca" className="block text-sm text-gray-600 hover:text-blue-600">
//                     BCOM + ACCA + PGCFM
//                   </a>
//                 </div>
//               )}
//             </div>
//             <a href="#faculty" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Faculty
//             </a>
//             <a href="#admission" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Admission
//             </a>
//             <a href="#placements" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Placements
//             </a>
//             <a href="#campus" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Campus
//             </a>
//             <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
//               Contact
//             </a>
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }

// import { useState } from "react";
// import { GraduationCap, Menu, X, ChevronDown } from "lucide-react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isProgramsOpen, setIsProgramsOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <GraduationCap className="h-6 w-6 text-blue-600" />
//           <span className="text-xl font-bold text-blue-800">BIMSR</span>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-6">
//           <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</a>
//           <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</a>

//           <div className="relative group">
//             <button className="flex items-center gap-1 text-sm font-medium hover:text-blue-600 transition-colors">
//               Programs <ChevronDown className="h-3 w-3" />
//             </button>
//             <div className="absolute top-full left-0 mt-1 w-64 rounded-lg border border-gray-200 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//               <div className="p-2">
//                 {[
//                   { href: "#bca-fullstack", label: "BCA + Full Stack + PGCCA" },
//                   { href: "#bca-data-analytics", label: "BCA + Data Analytics + PGCCA" },
//                   { href: "#bca-digital-marketing", label: "BCA + Digital Marketing + PGCCA" },
//                   { href: "#bba-digital-marketing", label: "BBA + Digital Marketing + PGCBA" },
//                   { href: "#bcom-acca", label: "BCOM + ACCA + PGCFM" },
//                 ].map((item) => (
//                   <a
//                     key={item.href}
//                     href={item.href}
//                     className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-blue-50"
//                   >
//                     {item.label}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <a href="#faculty" className="text-sm font-medium hover:text-blue-600 transition-colors">Faculty</a>
//           <a href="#admission" className="text-sm font-medium hover:text-blue-600 transition-colors">Admission</a>
//           <a href="#placements" className="text-sm font-medium hover:text-blue-600 transition-colors">Placements</a>
//           <a href="#campus" className="text-sm font-medium hover:text-blue-600 transition-colors">Campus</a>
//           <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
//         </nav>

//         {/* Apply + Mobile Toggle */}
//         <div className="flex items-center gap-4">
//           <button className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
//             Apply Now
//           </button>
//           <button
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden border-t bg-white">
//           <nav className="flex flex-col gap-2 p-4">
//             <a href="#" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</a>
//             <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</a>

//             <div>
//               <button
//                 onClick={() => setIsProgramsOpen(!isProgramsOpen)}
//                 className="flex w-full items-center gap-1 text-left text-sm font-medium hover:text-blue-600 transition-colors"
//               >
//                 Programs <ChevronDown className="h-3 w-3" />
//               </button>
//               {isProgramsOpen && (
//                 <div className="ml-4 mt-2 flex flex-col gap-1">
//                   {[
//                     { href: "#bca-fullstack", label: "BCA + Full Stack + PGCCA" },
//                     { href: "#bca-data-analytics", label: "BCA + Data Analytics + PGCCA" },
//                     { href: "#bca-digital-marketing", label: "BCA + Digital Marketing + PGCCA" },
//                     { href: "#bba-digital-marketing", label: "BBA + Digital Marketing + PGCBA" },
//                     { href: "#bcom-acca", label: "BCOM + ACCA + PGCFM" },
//                   ].map((item) => (
//                     <a
//                       key={item.href}
//                       href={item.href}
//                       className="block text-sm text-gray-600 hover:text-blue-600"
//                     >
//                       {item.label}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <a href="#faculty" className="text-sm font-medium hover:text-blue-600 transition-colors">Faculty</a>
//             <a href="#admission" className="text-sm font-medium hover:text-blue-600 transition-colors">Admission</a>
//             <a href="#placements" className="text-sm font-medium hover:text-blue-600 transition-colors">Placements</a>
//             <a href="#campus" className="text-sm font-medium hover:text-blue-600 transition-colors">Campus</a>
//             <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

// import { useState } from "react";
// import { Link } from "react-router-dom"; // 🟢 Import Link from React Router
// import { GraduationCap, Menu, X, ChevronDown } from "lucide-react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isProgramsOpen, setIsProgramsOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <GraduationCap className="h-6 w-6 text-blue-600" />
//           <Link to="/" className="text-xl font-bold text-blue-800">BIMSR</Link>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-6">
//           <Link to="/" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</Link>
//           <Link to="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</Link>

//           <div className="relative group">
//             <Link to="/programs" className="flex items-center gap-1 text-sm font-medium hover:text-blue-600 transition-colors">
//               Programs <ChevronDown className="h-3 w-3" />
//             </Link>
//             <div className="absolute top-full left-0 mt-1 w-64 rounded-lg border border-gray-200 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//               <div className="p-2">
//                 {[
//                   { to: "/bca-full-stack", label: "BCA + Full Stack + PGCCA" },
//                   { to: "/bca-data-analytics", label: "BCA + Data Analytics + PGCCA" },
//                   { to: "/bca-digital-marketing", label: "BCA + Digital Marketing + PGCCA" },
//                   { to: "/bba-digital-marketing", label: "BBA + Digital Marketing + PGCBA" },
//                   { to: "/programs/bcom-acca", label: "BCOM + ACCA + PGCFM" },
//                 ].map((item) => (
//                   <Link
//                     key={item.to}
//                     to={item.to}
//                     className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-blue-50"
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <Link to="/faculty" className="text-sm font-medium hover:text-blue-600 transition-colors">Faculty</Link>
//           <Link to="/admission" className="text-sm font-medium hover:text-blue-600 transition-colors">Admission</Link>
//           <Link to="/placements" className="text-sm font-medium hover:text-blue-600 transition-colors">Placements</Link>
//           <Link to="/campus" className="text-sm font-medium hover:text-blue-600 transition-colors">Campus</Link>
//           <Link to="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</Link>
//         </nav>

//         {/* Apply + Mobile Toggle */}
//         <div className="flex items-center gap-4">
//           <Link
//             to="/apply"
//             className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
//           >
//             Apply Now
//           </Link>
//           <button
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden border-t bg-white">
//           <nav className="flex flex-col gap-2 p-4">
//             <Link to="/" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</Link>
//             <Link to="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</Link>

//             <div>
//               <button
//                 onClick={() => setIsProgramsOpen(!isProgramsOpen)}
//                 className="flex w-full items-center gap-1 text-left text-sm font-medium hover:text-blue-600 transition-colors"
//               >
//                 Programs <ChevronDown className="h-3 w-3" />
//               </button>
//               {isProgramsOpen && (
//                 <div className="ml-4 mt-2 flex flex-col gap-1">
//                   {[
//                     { to: "/programs/bca-fullstack", label: "BCA + Full Stack + PGCCA" },
//                     { to: "/programs/bca-data-analytics", label: "BCA + Data Analytics + PGCCA" },
//                     { to: "/programs/bca-digital-marketing", label: "BCA + Digital Marketing + PGCCA" },
//                     { to: "/programs/bba-digital-marketing", label: "BBA + Digital Marketing + PGCBA" },
//                     { to: "/programs/bcom-acca", label: "BCOM + ACCA + PGCFM" },
//                   ].map((item) => (
//                     <Link
//                       key={item.to}
//                       to={item.to}
//                       className="block text-sm text-gray-600 hover:text-blue-600"
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <Link to="/faculty" className="text-sm font-medium hover:text-blue-600 transition-colors">Faculty</Link>
//             <Link to="/admission" className="text-sm font-medium hover:text-blue-600 transition-colors">Admission</Link>
//             <Link to="/placements" className="text-sm font-medium hover:text-blue-600 transition-colors">Placements</Link>
//             <Link to="/campus" className="text-sm font-medium hover:text-blue-600 transition-colors">Campus</Link>
//             <Link to="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // ⬅ Add useLocation
import { GraduationCap, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const location = useLocation(); // ⬅ Get current route

  // Helper to determine if link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-blue-600" />
          <Link to="/" className="text-xl font-bold text-blue-800">BIMSR</Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive("/") ? "text-blue-600" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive("/about") ? "text-blue-600" : ""}`}
          >
            About
          </Link>

          <div className="relative group">
            <Link
              to="/programs"
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname.startsWith("/programs") ? "text-blue-600" : ""
              }`}
            >
              Programs <ChevronDown className="h-3 w-3" />
            </Link>
            <div className="absolute top-full left-0 mt-1 w-64 rounded-lg border border-gray-200 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-2">
                {[
                  { to: "/programs/bca-full-stack", label: "BCA + Full Stack + PGCCA" },
                  { to: "/programs/bca-data-analytics", label: "BCA + Data Analytics + PGCCA" },
                  { to: "/programs/bca-digital-marketing", label: "BCA + Digital Marketing + PGCCA" },
                  { to: "/programs/bba-digital-marketing", label: "BBA + Digital Marketing + PGCBA" },
                  { to: "/programs/bcom-acca", label: "BCOM + ACCA + PGCFM" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`block rounded px-3 py-2 text-sm ${
                      isActive(item.to) ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {[
            { to: "/faculty", label: "Faculty" },
            { to: "/admission", label: "Admission" },
            { to: "/placements", label: "Placements" },
            { to: "/campus", label: "Campus" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive(item.to) ? "text-blue-600" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
              isActive("/contact") ? "bg-blue-700 text-white" : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Apply Now
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col gap-2 p-4">
            <Link to="/" className={`text-sm font-medium hover:text-blue-600 ${isActive("/") ? "text-blue-600" : ""}`}>Home</Link>
            <Link to="/about" className={`text-sm font-medium hover:text-blue-600 ${isActive("/about") ? "text-blue-600" : ""}`}>About</Link>

            <div>
              <button
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                className="flex w-full items-center gap-1 text-left text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Programs <ChevronDown className="h-3 w-3" />
              </button>
              {isProgramsOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-1">
                  {[
                    { to: "/programs/bca-full-stack", label: "BCA + Full Stack + PGCCA" },
                    { to: "/programs/bca-data-analytics", label: "BCA + Data Analytics + PGCCA" },
                    { to: "/programs/bca-digital-marketing", label: "BCA + Digital Marketing + PGCCA" },
                    { to: "/programs/bba-digital-marketing", label: "BBA + Digital Marketing + PGCBA" },
                    { to: "/programs/bcom-acca", label: "BCOM + ACCA + PGCFM" },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`block text-sm ${
                        isActive(item.to) ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { to: "/faculty", label: "Faculty" },
              { to: "/admission", label: "Admission" },
              { to: "/placements", label: "Placements" },
              { to: "/campus", label: "Campus" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm font-medium hover:text-blue-600 ${
                  isActive(item.to) ? "text-blue-600" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
