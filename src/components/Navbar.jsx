import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [activeButton, setActiveButton] = useState(null)

  const navItems = [
    { label: 'Overview', targetId: 'overview' },
    { label: 'Shared Tasks', targetId: 'shared-tasks' },
    { label: 'How to Participate', targetId: 'how-to-participate' },
    { label: 'Timeline', targetId: 'timeline' },
    { label: 'Organizers', targetId: 'organizers' },
    { label: 'Contact', targetId: 'contact' },
  ]

  const handleNavClick = (item) => {
    setActiveButton(item.label)

    const targetElement = document.getElementById(item.targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -30% 0px',
      threshold: [0.15, 0.4, 0.75],
    }

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible.length > 0) {
        const id = visible[0].target.id
        const match = navItems.find((n) => n.targetId === id)
        if (match) setActiveButton(match.label)
      }
    }, observerOptions)

    navItems.forEach((item) => {
      const el = document.getElementById(item.targetId)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="navbar-title">HalluScoring</h1>
        </div>
        <div className="navbar-right">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-button ${activeButton === item.label ? 'active' : ''}`}
              onClick={() => handleNavClick(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
