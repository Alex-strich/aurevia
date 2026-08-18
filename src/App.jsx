import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Problem from "./components/Problem"
import Solution from "./components/Solution"
import Platform from "./components/Platform"
import AutomationDemo from "./components/AutomationDemo"
import HowItWorks from "./components/HowItWorks"
import WhyAurevia from "./components/WhyAurevia"
import FinalCTA from "./components/FinalCTA"
import WhoWeServe from "./components/WhoWeServe"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#0B2E59]">
      <Navbar />

      <main>
        <Hero />
        <Problem/>
        <Solution/>
        <Platform/>
        <AutomationDemo/>
        <HowItWorks/>
        <WhyAurevia/>
        <WhoWeServe/>
        <FinalCTA/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
