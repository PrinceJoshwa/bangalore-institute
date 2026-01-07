
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

// Pages or main components for routes
import Hero from "./components/Hero"
import About from "./components/About"
import ProgramsOverview from "./components/ProgramsOverview"
import BCAFullStackProgram from "./components/BCAFullStackProgram"
import BCADataAnalyticsPage from "./components/BCADataAnalyticsProgram"
import BCADigitalMarketingPage from "./components/BCADigitalMarketingProgram"
import BBADigitalMarketingPage from "./components/BBADigitalMarketingProgram"
import BCOMACCAProgram from "./components/BCOMACCAProgram"
import FeeCalculator from "./components/FeeCalculator"
import Admission from "./components/Admission"
import Faculty from "./components/Faculty"
import PlacementsEnhanced from "./components/PlacementsEnhanced"
import Campus from "./components/CampusLife"
import Scholarships from "./components/Scholarships"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import WhatsAppChat from "./components/Whatsapp"
import StudentGallery from "./components/StudentGallery"
import CertificationsPage from "./components/CertificationsPage"


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<ProgramsOverview />} />
            <Route path="/programs/bca-full-stack" element={<BCAFullStackProgram />} />
            <Route path="/programs/bca-data-analytics" element={<BCADataAnalyticsPage />} />
            <Route path="/programs/bca-digital-marketing" element={<BCADigitalMarketingPage />} />
            <Route path="/programs/bba-digital-marketing" element={<BBADigitalMarketingPage />} />
            <Route path="/programs/bcom-acca" element={<BCOMACCAProgram />} />
            <Route path="/fee-calculator" element={<FeeCalculator />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/placements" element={<PlacementsEnhanced />} />
            <Route path="/campus" element={<Campus />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student-gallery" element={<StudentGallery />} />
            <Route path="/certifications" element={<CertificationsPage />} />
          </Routes>
        </main>
        <WhatsAppChat />
        <Footer />
      </div>
    </Router>
  )
}

export default App
