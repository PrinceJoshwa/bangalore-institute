import Header from "./components/Header"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import About from "./components/About"
import Courses from "./components/Courses"
import CampusLife from "./components/CampusLife"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Courses />
        <CampusLife />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
