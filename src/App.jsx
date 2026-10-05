import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import QAApproach from './components/QAApproach'
import TestPlan from './components/TestPlan'
import BugReporting from './components/BugReporting'
import Automation from './components/Automation'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BoilFilter } from './components/doodle'

export default function App() {
  return (
    <>
      <BoilFilter />
      <Navbar />
      <Hero />
      <main>
        <About />
        <QAApproach />
        <TestPlan />
        <BugReporting />
        <Automation />
        <Projects />
        <Skills />
        <Education />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
