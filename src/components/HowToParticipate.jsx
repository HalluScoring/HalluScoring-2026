import './HowToParticipate.css'

export default function HowToParticipate() {
  return (
    <section className="how-participate reveal-on-scroll" id="how-to-participate">
      <div className="participate-container">
        <h2 className="section-heading">Participation Guidelines</h2>
        <h3 className="section-description">How to <em className="participate">participate</em></h3>

        <div className="participate-grid">
          <div className="card">
            <div className="card-top">
              <div className="card-number">1</div>
              <div className="card-title">Register your team</div>
            </div>
            <div className="card-body">Please register your team before submitting. All teams must register to receive evaluation details.</div>
            <div className="card-link">
              <a
                href="https://forms.gle/UiaYcR6rh98SruNu8"
                target="_blank"
                rel="noreferrer"
                className="link-underline"
              >
                Registration form
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-top">
              <div className="card-number">2</div>
              <div className="card-title">Build & submit</div>
            </div>
            <div className="card-body">Develop your detection system and submit predictions via CodaLab for evaluation.</div>
            <div className="card-link"><span className="link-underline">Submit via CodaLab</span></div>
          </div>

          <div className="card">
            <div className="card-top">
              <div className="card-number">3</div>
              <div className="card-title">Write your paper</div>
            </div>
            <div className="card-body">Prepare a short paper describing your approach. Submission guidelines will be released soon.</div>
            <div className="card-link"><a href="#" className="link-underline">guidelines TBA</a></div>
          </div>
        </div>

        <p className="contact">For questions, contact the organizers</p>
      </div>
    </section>
  )
}
