import './App.css'
import { useMemo, useState, useEffect } from 'react'
import hamzahImg from './assets/HamzahLuqman.jpeg'
import saadImg from './assets/saadEzzini.jpeg'
import ahmedImg from './assets/AhmedHasanaath.JPG'
import muhammadImg from './assets/MuhammadAbdulMageed.jpg'
import bouchImg from './assets/salah_bouch.jpg'
import aishaImg from './assets/aisha.jpeg'
import abdessalamImg from './assets/abdessalam.jpg'
import nadhirImg from './assets/nadhir.jpg'
import hichamImg from './assets/hicham.jpeg'
import abdennourImg from './assets/abdennour.png'

const sharedTaskDescriptionData = {
  tracks: [
    {
      trackLabel: 'Track 1',
      title: 'Hallucination Detection',
      description:
        'Model-agnostic hallucination detection for Arabic QA using only input-output signals and robust cross-model evaluation.',
      buttons: [
        { label: 'Starter Kit', href: 'https://github.com/HalluScoring/HalluScoring2026-Track1-StarterKit' , variant: 'starter' },
        { label: 'Task 1', href: '#', variant: 'task' },
        { label: 'Task 2', href: '#', variant: 'task' },
      ],
    },
    {
      trackLabel: 'Track 2',
      title: 'XXXX',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttons: [
        { label: 'Starter Kit', href: '#', variant: 'starter' },
        { label: 'Task', href: '#', variant: 'task' },
      ],
    },
  ],
}

const datasetDescriptionData = {
  tracks: [
    {
      trackLabel: 'Track 1',
      title: 'HalluScoring Dataset',
      description:
        'The HalluScore dataset is a structured Arabic QA benchmark with 827 curated QA pairs across health, science, finance, religion, and geography. Responses from 17 Arabic, multilingual, and reasoning LLMs are manually annotated with hallucination labels, verified evidence, answer explanations, and fine-grained metadata.',
      detailsLink: 'https://drive.google.com/drive/folders/1ElvlVJ8sz_ZwZhmyY-rrY2njzeejBWbk?usp=sharing',
    },
    {
      trackLabel: 'Track 2',
      title: 'ANDALUS Dataset',
      description:
        'The shared task dataset supports Arabic MCQ and QA evaluation with training and development splits plus a hidden test set for fair evaluation.',
    },
  ],
}

function useScrollReveal(dependency) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.content-section, .timeline-item, .organizer-card')
    elements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [dependency])
}

function App() {
  const [activeItem, setActiveItem] = useState('Home')
  useScrollReveal(activeItem)
  const today = useMemo(() => {
    const current = new Date()
    current.setHours(0, 0, 0, 0)
    return current
  }, [])

  const getDateStatus = (compareDate) => {
    const eventDate = new Date(`${compareDate}T00:00:00`)

    if (eventDate < today) {
      return 'past'
    }

    if (eventDate > today) {
      return 'future'
    }

    return 'today'
  }

  const floatingParticles = useMemo(
    () =>
      Array.from({ length: 96 }, (_, index) => {
        const seed = index + 1

        return {
          left: `${(seed * 17) % 100}%`,
          top: `${(seed * 29) % 100}%`,
          size: 3 + (seed % 6),
          duration: 14 + (seed % 18),
          delay: -(seed % 22),
          driftX: `${((seed * 13) % 19) - 9}px`,
          driftY: `${((seed * 19) % 23) - 11}px`,
          opacity: 0.18 + (seed % 7) * 0.07,
        }
      }),
    [],
  )

  const navItems = useMemo(
    () => ['Home', 'Paper Submission Guidelines', 'Leaderboard'],
    [],
  )

  const organizers = useMemo(
    () => [
      {
        name: 'Hamzah Luqman',
        email: 'hluqman@kfupm.edu.sa',
        affiliation: 'KFUPM, Saudi Arabia',
        initials: 'HL',
        avatar: hamzahImg,
      },
      {
        name: 'Aisha Alansari',
        email: 'aisha.ansari@kfupm.edu.sa',
        affiliation: 'KFUPM, Saudi Arabia',
        initials: 'AA',
        avatar: aishaImg,
      },
      {
        name: 'Saad Ezzini',
        email: 'saad.ezzini@kfupm.edu.sa',
        affiliation: 'KFUPM, Saudi Arabia',
        initials: 'SE',
        avatar: saadImg,
      },
      {
        name: 'Ahmed Abul Hasanaath',
        email: 'g202302610@kfupm.edu.sa',
        affiliation: 'Saudi Aramco, Saudi Arabia',
        initials: 'AH',
        avatar: ahmedImg,
      },
      {
        name: 'Malak Alkhorasani',
        email: '2230009062@iau.edu.sa',
        affiliation: 'IAU, Saudi Arabia',
        initials: 'MA',
      },
      {
        name: 'Hend Al-Khalifa',
        email: 'hendk@ksu.edu.sa',
        affiliation: 'KSU, Saudi Arabia',
        initials: "HA",
      },
      {
        name: 'Muhammad Abdul-Mageed',
        email: 'muhammad.mageed@ubc.ca',
        affiliation: 'UBC, Canada',
        initials: 'MM',
        avatar: muhammadImg,
      },
    ],
    [],
  )

  const andalusOrganizers = useMemo(
    () => [
      {
        name: 'Pr. Abdenour Hadid',
        email: '',
        affiliation: 'Sorbonne University, UAE',
        avatar: abdennourImg,
      },
      {
        name: 'Dr. Salah Eddine Bekhouche',
        email: '',
        affiliation: 'University of the Basque Country, Spain',
        avatar: bouchImg,
      },
      {
        name: 'Dr. Abdessalam Bouchekif',
        email: '',
        affiliation: 'Hamad Bin Khalifa University, Qatar',
        avatar: abdessalamImg,
      },
      {
        name: 'Dr. Mohammed-En-Nadhir Zighem',
        email: 'mohammed.en.nadhir.zighem@qutwo.com',
        affiliation: 'Qutwo, Finland',
        avatar: nadhirImg,
      },
      {
        name: 'Dr. Hichem Telli',
        email: '',
        affiliation: 'Huawei, Finland',
        avatar: hichamImg,
      },
    ],
    [],
  )

  const allOrganizers = useMemo(
    () => [...organizers, ...andalusOrganizers],
    [organizers, andalusOrganizers],
  )

  const stayConnectedLinks = useMemo(
    () => [
      {
        label: 'Discord',
        href: 'https://discord.com/',
      },
      {
        label: 'Aisha Email',
        href: 'mailto:aisha.ansari@kfupm.edu.sa',
      },
      {
        label: 'Ahmed Email',
        href: 'mailto:g202302610@kfupm.edu.sa',
      },
    ],
    [],
  )

  const importantDates = useMemo(
    () => [
      {
        label: 'Release of Task Website, Training/Dev Data & Evaluation Scripts',
        date: 'May 16, 2026',
        compareDate: '2026-05-16',
      },
      {
        label: 'Registration Deadline & Blind Test Data Release',
        date: 'July 20, 2026',
        compareDate: '2026-07-20',
      },
      { label: 'Final Results Released', date: 'July 30, 2026', compareDate: '2026-07-30' },
      {
        label: 'Camera-ready System Description Papers Due',
        date: 'August 22, 2026',
        compareDate: '2026-08-22',
      },
      {
        label: 'Shared Task Overview Papers Due',
        date: 'September 1, 2026',
        compareDate: '2026-09-01',
      },
      {
        label: 'Conference Camera-ready Deadline',
        date: 'September 10, 2026',
        compareDate: '2026-09-10',
      },
      {
        label: 'ArabicNLP 2026 / EMNLP 2026',
        date: 'October 24–29, 2026 (Budapest, Hungary)',
        compareDate: '2026-10-24',
      },
    ],
    [],
  )

  const renderHomeContent = () => (
    <>
      <section className="content-section content-section--hero" aria-label="HalluScoring introduction">
        <div className="hero__inner">
          <p className="hero__eyebrow">ArabicNLP 2026  ·  EMNLP  ·  Budapest, Hungary  ·  Oct 24–29, 2026</p>
          <h1 className="hero__title section-heading">LLM Hallucination Detection in Arabic QA</h1>
          <button className="register-btn" onClick={() => window.open('https://forms.gle/UiaYcR6rh98SruNu8', '_blank')}>
            Register Now!
            <svg className="register-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </section>


      <section className="content-section content-section--centered" aria-labelledby="intro-title">
        <h2 id="intro-title" className="section-heading">Overview</h2>
        <p>
          The rapid adoption of large language models (LLMs), such as GPT and Claude, has led to increasing reliance on their outputs for tasks including question answering, content generation, and decision support. Despite their impressive abilities, LLMs are prone to hallucinations, producing fluent but factually incorrect, fabricated, or ungrounded information. This is particularly concerning in high-stakes domains such as healthcare, education, and law, where hallucinations can result in inaccurate conclusions, misinformation, and potentially harmful outcomes.
        </p>
        <p style={{ marginTop: '0.8rem' }}>
          HalluScoring aims to develop model-agnostic and cross-model hallucination detection techniques for LLMs in Arabic question answering. Participants are encouraged to propose methods that operate solely on input–output signals, such as self-consistency, prompting strategies, and external verification, without requiring access to model internals. A key objective is to design approaches that generalize across different LLMs and can effectively handle adversarial questions, historically grounded content, and reasoning-based queries.
        </p>
      </section>

      <section className="content-section content-section--centered" aria-labelledby="shared-task-title">
        <h2 id="shared-task-title" className="section-heading">Shared Task Description</h2>
        <div className="shared-task-grid">
          {sharedTaskDescriptionData.tracks.map((track) => (
            <article className="shared-task-panel" key={track.title}>
              <span className="shared-task-panel__eyebrow">{track.trackLabel}</span>
              <h3 className="shared-task-panel__title">{track.title}</h3>
              <p className="shared-task-panel__description">{track.description}</p>
              <div className="shared-task-panel__actions">
                {track.buttons.map((button) => (
                  <a
                    key={button.label}
                    href={button.href}
                    className={`shared-task-action shared-task-action--${button.variant}`}
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section content-section--centered" aria-labelledby="dataset-title">
        <h2 id="dataset-title" className="section-heading">Dataset</h2>
        <div className="shared-task-grid">
          {datasetDescriptionData.tracks.map((track) => (
            <article className="shared-task-panel" key={track.title}>
              <span className="shared-task-panel__eyebrow">{track.trackLabel}</span>
              <h3 className="shared-task-panel__title">{track.title}</h3>
              <p className="shared-task-panel__description">{track.description}</p>
              {/* {track.detailsLink && (
                <a className="dataset-link" href={track.detailsLink} target="_blank" rel="noreferrer">
                  Google Drive folder
                </a>
              )} */}
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" aria-labelledby="dates-title">
        <h2 id="dates-title" className="centered section-heading heading-center-fix">Important Dates</h2>
        <ul className="timeline">
          {importantDates.map((item) => (
            <li key={item.label} className={`timeline-item timeline-item--${getDateStatus(item.compareDate)}`}>
              <span className="timeline-item__marker" aria-hidden="true" />
              <div className="timeline-item__content">
                <span className="timeline-item__label">{item.label}</span>
                <span className="timeline-item__date">{item.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="content-section" aria-labelledby="organizers-title">
        <h2 id="organizers-title" className="centered section-heading heading-center-fix">Organizers</h2>
        <div className="organizers-grid">
          {allOrganizers.map((organizer) => (
            <article className="organizer-card" key={organizer.name}>
              {organizer.avatar ? (
                <img
                  src={organizer.avatar}
                  alt={`${organizer.name} avatar`}
                  className="organizer-avatar-img"
                />
              ) : (
                <div className="organizer-avatar" aria-hidden="true">
                  {organizer.initials}
                </div>
              )}
              <h3>{organizer.name}</h3>
              <p className="organizer-affiliation">{organizer.affiliation}</p>
              {organizer.email && (
                <a href={`mailto:${organizer.email}`} className="organizer-email">
                  {organizer.email}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* <section className="content-section content-section--centered stay-connected" aria-labelledby="stay-connected-title">
        <h2 id="stay-connected-title" className="section-heading">Stay Connected</h2>
        <article className="stay-connected__panel">
          <p className="stay-connected__description">
            Reach out through the community channel or email the organizers directly.
          </p>
          <div className="stay-connected__actions">
            {stayConnectedLinks.map((link) => (
              <a key={link.label} href={link.href} className="shared-task-action shared-task-action--starter">
                {link.label}
              </a>
            ))}
          </div>
        </article>
      </section> */}
    </>
  )

  const renderPlaceholder = (title, description) => (
    <section className="content-section" aria-labelledby="placeholder-title">
    <h2 id="placeholder-title" className="section-heading">{title}</h2>
      <article className="placeholder-card">
        <p>{description}</p>
        <p className="placeholder-note">
          This section is reserved and will be populated in the next update.
        </p>
      </article>
    </section>
  )

  const renderMainContent = () => {
    if (activeItem === 'Paper Submission Guidelines') {
      return renderPlaceholder(
        'Paper Submission Guidelines',
        'Submission format, templates, and policy details will be published here.',
      )
    }

    if (activeItem === 'Leaderboard') {
      return renderPlaceholder(
        'Leaderboard',
        'Live rankings and team-level performance tracking will appear in this panel.',
      )
    }

    return renderHomeContent()
  }

  return (
    <div className="app-shell">
      <div className="app-shell__particles" aria-hidden="true">
        {floatingParticles.map((particle, index) => (
          <span
            key={`${particle.left}-${particle.top}-${index}`}
            className="app-shell__particle"
            style={{
              '--particle-left': particle.left,
              '--particle-top': particle.top,
              '--particle-size': `${particle.size}px`,
              '--particle-duration': `${particle.duration}s`,
              '--particle-delay': `${particle.delay}s`,
              '--particle-drift-x': particle.driftX,
              '--particle-drift-y': particle.driftY,
              '--particle-opacity': particle.opacity,
            }}
          />
        ))}
      </div>
      <header className="topbar" aria-label="Primary navigation">
        <div className="topbar__brand-wrap">
          {/* <img src={logoImg} alt="HalluScoring logo" className="topbar__logo" /> */}
          <h1 className="topbar__brand">HalluScoring</h1>
        </div>
        <nav>
          <ul className="topbar__menu">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => setActiveItem(item)}
                  className={activeItem === item ? 'is-active' : ''}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="main-content">{renderMainContent()}</main>

      <footer className="site-footer">
        <p>HalluScoring 2026 • ArabicNLP 2026 @ EMNLP 2026</p>
      </footer>
    </div>
  )
}

export default App
