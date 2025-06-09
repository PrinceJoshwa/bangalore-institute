import Header from "./components/Header"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import About from "./components/About"
import Courses from "./components/Courses"
import FeeCalculator from "./components/FeeCalculator" // Import the new component
import CampusLife from "./components/CampusLife"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Placements from "./components/Placements"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Courses />
        <FeeCalculator /> {/* Add the new component here */}
        <Placements />
        <CampusLife />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
