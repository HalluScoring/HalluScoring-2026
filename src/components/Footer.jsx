import { useMemo } from 'react'
import './Footer.css'

export default function Footer() {
  const stayConnectedLinks = useMemo(
    () => [
      {
        label: 'Discord',
        href: 'https://discord.com/invite/G7s48MRdTq',
        icon: 'discord',
      },
      {
        label: 'Aisha - Track 1',
        href: 'mailto:aisha.ansari@kfupm.edu.sa',
        icon: 'email',
      },
      {
        label: 'Hichem - Track 2',
        href: 'mailto:halluscoring@gmail.com',
        icon: 'email',
      },
    ],
    [],
  )

  const renderIcon = (icon) => {
    if (icon === 'discord') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="stay-connected__icon">
          <path
            d="M20.32 4.37a19.8 19.8 0 0 0-4.95-1.52.07.07 0 0 0-.07.03c-.21.38-.45.88-.62 1.27a18.5 18.5 0 0 0-5.37 0c-.17-.4-.41-.9-.63-1.27a.08.08 0 0 0-.07-.03 19.74 19.74 0 0 0-4.95 1.52.07.07 0 0 0-.03.03C.53 11.67-.32 18.77.1 25.79c0 .03.02.06.05.07a20.05 20.05 0 0 0 6.07 3.07.08.08 0 0 0 .09-.03c.47-.65.88-1.34 1.24-2.05a.08.08 0 0 0-.04-.1 13.14 13.14 0 0 1-1.9-.91.08.08 0 0 1-.01-.13c.13-.1.26-.2.39-.3a.08.08 0 0 1 .08-.01c3.99 1.82 8.31 1.82 12.25 0a.08.08 0 0 1 .08 0l.4.31a.08.08 0 0 1-.01.13c-.6.36-1.24.66-1.9.9a.08.08 0 0 0-.04.1c.36.71.78 1.4 1.24 2.06a.08.08 0 0 0 .09.03 20.01 20.01 0 0 0 6.08-3.07.08.08 0 0 0 .04-.07c.5-8.12-.84-15.16-3.55-21.42a.06.06 0 0 0-.03-.03zM8.02 20.77c-1.2 0-2.18-1.1-2.18-2.44 0-1.35.96-2.44 2.18-2.44 1.22 0 2.2 1.1 2.18 2.44 0 1.35-.96 2.44-2.18 2.44zm7.96 0c-1.2 0-2.18-1.1-2.18-2.44 0-1.35.96-2.44 2.18-2.44 1.22 0 2.2 1.1 2.18 2.44 0 1.35-.96 2.44-2.18 2.44z"
            fill="currentColor"
            transform="scale(0.8) translate(3 3)"
          />
        </svg>
      )
    }

    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="stay-connected__icon">
        <path
          d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75zm2.17-.25 6.48 5.18a.55.55 0 0 0 .7 0l6.48-5.18H5.17zm13.58 1.73-5.7 4.56a1.65 1.65 0 0 1-2.1 0l-5.7-4.56v9.02c0 .3.24.55.55.55h12.4c.3 0 .55-.24.55-.55V8.23z"
          fill="currentColor"
        />
      </svg>
    )
  }

  return (
    <footer className="site-footer reveal-on-scroll" id="contact">
      <div className="stay-connected__panel">
        <p className="stay-connected__description">Stay Connected</p>
        <div className="stay-connected__actions">
          {stayConnectedLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="stay-connected__button"
              aria-label={link.label}
            >
              {renderIcon(link.icon)}
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="site-footer__copyright">HalluScoring 2026 • ArabicNLP 2026 @ EMNLP 2026</p>
    </footer>
  )
}
