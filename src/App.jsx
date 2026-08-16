import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Problem from "./components/Problem"
import Solution from "./components/Solution"
import Platform from "./components/Platform"
import AutomationDemo from "./components/AutomationDemo"
import HowItWorks from "./components/HowItWorks"
import WhyAurevia from "./components/WhyAurevia"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#07111f]">
      <Navbar />

      <main>
        <Hero />
        <Problem/>
        <Solution/>
        <Platform/>
        <AutomationDemo/>
        <HowItWorks/>
        <WhyAurevia/>
        <FinalCTA/>
        <Footer/>
      </main>
    </div>
  )
}

export default App