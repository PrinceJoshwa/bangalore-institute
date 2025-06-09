// import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

// export default function Footer() {
//   return (
//     <footer id="contact" className="w-full py-12 bg-blue-900 text-white">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="space-y-4">
//             <div className="flex items-center gap-2">
//               <GraduationCap className="h-6 w-6" />
//               <span className="text-xl font-bold">Bangalore Institute</span>
//             </div>
//             <p className="text-sm text-white/80">
//               Empowering Future Innovators through excellence in education, research, and industry collaboration.
//             </p>
//             <div className="flex gap-4">
//               <a href="#" className="hover:text-blue-300 transition-colors">
//                 <Facebook className="h-5 w-5" />
//                 <span className="sr-only">Facebook</span>
//               </a>
//               <a href="#" className="hover:text-blue-300 transition-colors">
//                 <Twitter className="h-5 w-5" />
//                 <span className="sr-only">Twitter</span>
//               </a>
//               <a href="#" className="hover:text-blue-300 transition-colors">
//                 <Instagram className="h-5 w-5" />
//                 <span className="sr-only">Instagram</span>
//               </a>
//               <a href="#" className="hover:text-blue-300 transition-colors">
//                 <Linkedin className="h-5 w-5" />
//                 <span className="sr-only">LinkedIn</span>
//               </a>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
//                   Programs
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
//                   Admissions
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
//                   Campus Life
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
//                   Research
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Resources</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
//                   Student Portal
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
//                   Library
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
//                   Career Services
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
//                   Alumni Network
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
//                   Events
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Contact Us</h3>
//             <ul className="space-y-2">
//               <li className="flex items-start gap-2">
//                 <MapPin className="h-5 w-5 shrink-0 text-blue-300" />
//                 <span className="text-sm text-white/80">123 Education Avenue, Tech City, 560001</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Phone className="h-5 w-5 shrink-0 text-blue-300" />
//                 <span className="text-sm text-white/80">+91 8970002004</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Mail className="h-5 w-5 shrink-0 text-blue-300" />
//                 <span className="text-sm text-white/80">admissions@bangaloreinstitute.edu</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/60">
//           <p>© {new Date().getFullYear()} Bangalore Institute Of Management Science and Research. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="w-full py-12 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              <span className="text-xl font-bold">BIMSR</span>
            </div>
            <p className="text-sm text-white/80">
              Bangalore Institute of Management Science & Research - India's first AI-powered education institute
              offering industry-ready programs with 100% placement assistance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-white/80 hover:text-white transition-colors">
                  About BIMSR
                </a>
              </li>
              <li>
                <a href="#courses" className="text-sm text-white/80 hover:text-white transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#placements" className="text-sm text-white/80 hover:text-white transition-colors">
                  Placements
                </a>
              </li>
              <li>
                <a href="#campus" className="text-sm text-white/80 hover:text-white transition-colors">
                  Campus Life
                </a>
              </li>
              <li>
                <a href="#fee-calculator" className="text-sm text-white/80 hover:text-white transition-colors">
                  Fee Calculator
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  BCom + Digital Marketing + PGDM
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  BCom - ACCA Specialization
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  BBA - Digital Marketing + PGDM
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">
                  BCA - Data Analytics
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-blue-300" />
                <span className="text-sm text-white/80">Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0 text-blue-300" />
                <span className="text-sm text-white/80">+91 8970002004</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0 text-blue-300" />
                <span className="text-sm text-white/80">admissions@bangaloreinstitutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} BIMSR - Bangalore Institute of Management Science & Research. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
