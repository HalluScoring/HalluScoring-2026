import './Hero.css'

export default function Hero() {
  const handleSeeSharedTasks = () => {
    const sharedTasksSection = document.getElementById('shared-tasks')
    if (sharedTasksSection) {
      sharedTasksSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero reveal-on-scroll" id="hero">
      <div className="hero-container">
        <div className="hero-tag-box">
          ArabicNLP 2026 · EMNLP · Budapest, Hungary · Oct 24–29, 2026
        </div>

        <h1 className="hero-title">LLM Hallucination Detection in Arabic QA</h1>

        <div className="hero-buttons">
          <a
            className="btn btn-primary"
            href="https://forms.gle/UiaYcR6rh98SruNu8"
            target="_blank"
            rel="noreferrer"
          >
            Register Now
          </a>
          <button className="btn btn-secondary" onClick={handleSeeSharedTasks}>
            See Shared Tasks
          </button>
        </div>

        <div className="hero-info-grid">
          <div className="info-item">
            <div className="info-label">Conference</div>
            <div className="info-value">EMNLP 2026</div>
          </div>
          <div className="info-item">
            <div className="info-label">Dates</div>
            <div className="info-value">Oct 24-29</div>
          </div>
          <div className="info-item">
            <div className="info-label">Location</div>
            <div className="info-value">Budapest</div>
          </div>
          <div className="info-item">
            <div className="info-label">Submissions</div>
            <div className="info-value">Open</div>
          </div>
        </div>
      </div>
    </section>
  )
}
