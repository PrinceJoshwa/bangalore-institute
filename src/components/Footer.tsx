
import { Link } from "react-router-dom"
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
  Award,
  Users,
  Building,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">BIMSR</span>
                <p className="text-xs text-blue-200 leading-tight">
                  India's First AI-Powered
                  <br />
                  Education Institute
                </p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Transforming education with AI-powered learning, industry certifications, and guaranteed placement
              assistance. Join the revolution in higher education.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/bimsr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/bimsr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/bimsr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/bimsr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  About BIMSR
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-2"
                >
                  <GraduationCap className="h-4 w-4" />
                  AI-Powered Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/admission"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Users className="h-4 w-4" />
                  Admissions 2025-26
                </Link>
              </li>
              <li>
                <Link
                  to="/placements"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Building className="h-4 w-4" />
                  100% Placement Guarantee
                </Link>
              </li>
              <li>
                <Link to="/campus" className="text-blue-100 hover:text-white transition-colors flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Campus Life
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-100 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Revolutionary Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/programs/bca-fullstack" className="text-blue-100 hover:text-white transition-colors text-sm">
                  BCA + Full Stack + PGCCA
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/bca-data-analytics"
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  BCA + Data Analytics + PGCCA
                </Link>
              </li>
              <li>
                <Link
                  to="/programs/bba-digital-marketing"
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  BBA + Digital Marketing + PGCBA
                </Link>
              </li>
              <li>
                <Link to="/programs/bcom-acca" className="text-blue-100 hover:text-white transition-colors text-sm">
                  BCOM + ACCA + PGCFM
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-blue-300 mt-1" />
                <div className="text-blue-100 text-sm">
                  <p className="font-medium text-white">BIMSR Campus</p>
                  <p>Bangalore Institute of Management</p>
                  <p>Science & Research</p>
                  <p>Chikkakannalli, Bengaluru,</p>
                  <p>Karnataka-560035</p>
                  
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-blue-300" />
                <div>
                  <a href="tel:7676401932" className="text-white font-medium hover:text-blue-300 transition-colors">
                    +91 76764 01932
                  </a>
                  <p className="text-blue-100 text-sm">Admission Helpline</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-blue-300" />
                <div>
                  <a
                    href="mailto:admissions@bangaloreinstitutions.com"
                    className="text-white font-medium hover:text-blue-300 transition-colors"
                  >
                    admissions@bangaloreinstitutions.com
                  </a>
                  <p className="text-blue-100 text-sm">Official Email</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 shrink-0 text-blue-300 mt-1" />
                <div className="text-blue-100 text-sm">
                  <p className="text-white font-medium">Office Hours</p>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
  <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
    <div className="text-center lg:text-left space-y-1">
      <p className="text-blue-100">
        © {new Date().getFullYear()} BIMSR – India's First AI-Powered Education Institute. All rights reserved.
      </p>
      <p className="text-blue-100 text-sm">
        Rights reserved by <span className="font-semibold text-white">Marketly</span>.
      </p>
    </div>
    <div className="flex flex-wrap items-center gap-6 text-sm">
      <div className="flex items-center gap-2 bg-green-600/20 px-4 py-2 rounded-full border border-green-400/30">
        <Award className="h-4 w-4 text-green-400" />
        <span className="text-green-300 font-semibold">100% Placement Guarantee</span>
      </div>
      <div className="flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30">
        <GraduationCap className="h-4 w-4 text-blue-400" />
        <span className="text-blue-300 font-semibold">AI-Powered Learning</span>
      </div>
    </div>
  </div>

  {/* Education Partners Logo Section */}
  <div className="mt-10 flex flex-col items-center space-y-4">
    <p className="text-white font-semibold">Our Education Partners</p>
    <div className="flex flex-wrap justify-center items-center gap-6">
      <img src="/zelllogo.jpeg" alt="Partner 1" className="h-10 object-contain" />
      <img src="/enormayu.png" alt="Partner 2" className="h-10 object-contain" />
      {/* Add more logos as needed */}
    </div>
  </div>
</div>

      </div>
    </footer>
  )
}
