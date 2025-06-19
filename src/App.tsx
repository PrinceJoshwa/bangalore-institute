// // // // // import Header from "./components/Header"
// // // // // import Hero from "./components/Hero"
// // // // // import Stats from "./components/Stats"
// // // // // import About from "./components/About"
// // // // // import Courses from "./components/Courses"
// // // // // import FeeCalculator from "./components/FeeCalculator" // Import the new component
// // // // // import CampusLife from "./components/CampusLife"
// // // // // import Testimonials from "./components/Testimonials"
// // // // // import CTA from "./components/CTA"
// // // // // import Footer from "./components/Footer"
// // // // // import Placements from "./components/Placements"

// // // // // function App() {
// // // // //   return (
// // // // //     <div className="flex flex-col min-h-screen">
// // // // //       <Header />
// // // // //       <main className="flex-1">
// // // // //         <Hero />
// // // // //         <Stats />
// // // // //         <About />
// // // // //         <Courses />
// // // // //         <FeeCalculator /> {/* Add the new component here */}
// // // // //         <Placements />
// // // // //         <CampusLife />
// // // // //         <Testimonials />
// // // // //         <CTA />
// // // // //       </main>
// // // // //       <Footer />
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default App

// // // // import Header from "./components/Header"
// // // // import Hero from "./components/Hero"
// // // // import Stats from "./components/Stats"
// // // // import About from "./components/About"
// // // // import Courses from "./components/Courses"
// // // // import FeeCalculator from "./components/FeeCalculator"
// // // // import Admission from "./components/Admission"
// // // // import Faculty from "./components/Faculty"
// // // // import Placements from "./components/Placements"
// // // // import CampusLife from "./components/CampusLife"
// // // // import Testimonials from "./components/Testimonials"
// // // // import CTA from "./components/CTA"
// // // // import Footer from "./components/Footer"

// // // // function App() {
// // // //   return (
// // // //     <div className="flex flex-col min-h-screen">
// // // //       <Header />
// // // //       <main className="flex-1">
// // // //         <Hero />
// // // //         <Stats />
// // // //         <About />
// // // //         <Courses />
// // // //         <FeeCalculator />
// // // //         <Admission />
// // // //         <Faculty />
// // // //         <Placements />
// // // //         <CampusLife />
// // // //         <Testimonials />
// // // //         <CTA />
// // // //       </main>
// // // //       <Footer />
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App

// // // import Header from "./components/Header"
// // // import Hero from "./components/Hero"
// // // import About from "./components/About"
// // // import Courses from "./components/Courses"
// // // import FeeCalculator from "./components/FeeCalculator"
// // // import Admission from "./components/Admission"
// // // import Faculty from "./components/Faculty"
// // // import Placements from "./components/Placements"
// // // import Campus from "./components/Campus"
// // // import Scholarships from "./components/Scholarships"
// // // import Testimonials from "./components/Testimonials"
// // // import Footer from "./components/Footer"

// // // function App() {
// // //   return (
// // //     <div className="flex flex-col min-h-screen">
// // //       <Header />
// // //       <main className="flex-1">
// // //         <Hero />
// // //         <About />
// // //         <Courses />
// // //         <FeeCalculator />
// // //         <Admission />
// // //         <Faculty />
// // //         <Placements />
// // //         <Campus />
// // //         <Scholarships />
// // //         <Testimonials />
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   )
// // // }

// // // export default App

// // import Header from "./components/Header"
// // import Hero from "./components/Hero"
// // import About from "./components/About"
// // import ProgramsOverview from "./components/ProgramsOverview"
// // import BCAFullStackProgram from "./components/BCAFullStackProgram"
// // import BCOMACCAProgram from "./components/BCOMACCAProgram"
// // import FeeCalculator from "./components/FeeCalculator"
// // import Admission from "./components/Admission"
// // import Faculty from "./components/Faculty"
// // import PlacementsEnhanced from "./components/PlacementsEnhanced"
// // import Campus from "./components/Campus"
// // import Scholarships from "./components/Scholarships"
// // import Testimonials from "./components/Testimonials"
// // import Footer from "./components/Footer"

// // function App() {
// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       <Header />
// //       <main className="flex-1">
// //         <Hero />
// //         <About />
// //         <ProgramsOverview />
// //         <BCAFullStackProgram />
// //         <BCOMACCAProgram />
// //         <FeeCalculator />
// //         <Admission />
// //         <Faculty />
// //         <PlacementsEnhanced />
// //         <Campus />
// //         <Scholarships />
// //         <Testimonials />
// //       </main>
// //       <Footer />
// //     </div>
// //   )
// // }

// // export default App

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import Header from "./components/Header"
// import Footer from "./components/Footer"

// // Pages
// import HomePage from "./pages/HomePage"
// import AboutPage from "./pages/AboutPage"
// import ProgramsPage from "./pages/ProgramsPage"
// import BCAFullStackPage from "./pages/BCAFullStackPage"
// import BCOMACCAPage from "./pages/BCOMACCAPage"
// import BCADataAnalyticsPage from "./pages/BCADataAnalyticsPage"
// import BCADigitalMarketingPage from "./pages/BCADigitalMarketingPage"
// import BBADigitalMarketingPage from "./pages/BBADigitalMarketingPage"
// import FeeCalculatorPage from "./pages/FeeCalculatorPage"
// import AdmissionPage from "./pages/AdmissionPage"
// import FacultyPage from "./pages/FacultyPage"
// import PlacementsPage from "./pages/PlacementsPage"
// import CampusPage from "./pages/CampusPage"
// import ScholarshipsPage from "./pages/ScholarshipsPage"
// import TestimonialsPage from "./pages/TestimonialsPage"

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-1">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/programs" element={<ProgramsPage />} />
//             <Route path="/programs/bca-full-stack" element={<BCAFullStackPage />} />
//             {/* <Route path="/programs/bca-data-analytics" element={<BCADataAnalyticsPage />} />
//             <Route path="/programs/bca-digital-marketing" element={<BCADigitalMarketingPage />} />
//             <Route path="/programs/bba-digital-marketing" element={<BBADigitalMarketingPage />} /> */}
//             <Route path="/programs/bcom-acca" element={<BCOMACCAPage />} />
//             <Route path="/fee-calculator" element={<FeeCalculatorPage />} />
//             <Route path="/admission" element={<AdmissionPage />} />
//             <Route path="/faculty" element={<FacultyPage />} />
//             <Route path="/placements" element={<PlacementsPage />} />
//             <Route path="/campus" element={<CampusPage />} />
//             <Route path="/scholarships" element={<ScholarshipsPage />} />
//             <Route path="/testimonials" element={<TestimonialsPage />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   )
// }

// export default App

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
          </Routes>
        </main>
        <WhatsAppChat />
        <Footer />
      </div>
    </Router>
  )
}

export default App
