import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import SharedTasks from './components/SharedTasks'
import HowToParticipate from './components/HowToParticipate'
import Timeline from './components/Timeline'
import Organizers from './components/Organizers'
import Footer from './components/Footer'
import { useEffect } from 'react'
import { initRevealOnScroll } from './utils/scrollEffects'

function App() {
  useEffect(() => {
    initRevealOnScroll()
  }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <SharedTasks />
      <HowToParticipate />
      <Timeline />
      <Organizers />
      <Footer />
    </>
  )
}

export default App
