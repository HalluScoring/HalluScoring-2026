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

          {/* <div className="card">
            <div className="card-top">
              <div className="card-number">3</div>
              <div className="card-title">Write your paper</div>
            </div>
            <div className="card-body">Prepare a short paper describing your approach. Submission guidelines will be released soon.</div>
            <div className="card-link"><a href="#" className="link-underline">guidelines TBA</a></div>
          </div> */}
        </div>

        <div className="submission-rules">
          <h4 className="rules-heading">Submission Rules</h4>
          <ul className="rules-list">
            <li>All submissions must be based on a <strong>fine-tuned generative language model</strong>.</li>
            <li>The base model must be <strong>open source</strong> or openly available for research use.</li>
            <li>Submitted models must have <strong>no more than 13 billion parameters</strong>. This limit is used to keep the evaluation fair for all participants.</li>
            <li>The use of <strong>RAG</strong>, external search tools, knowledge bases, or retrieval-based systems is not allowed during evaluation. The only exception concerns <strong>Qur'anic verses</strong>: participants may use Qur'an ayaat when needed, but no additional external knowledge source is allowed.</li>
            <li>Participants are allowed to use external data for fine-tuning their models.</li>
          </ul>

          <h4 className="rules-heading">Model Submission</h4>
          <ul className="rules-list">
            <li>Participants must upload their fine-tuned model to a <strong>private Hugging Face repository</strong>.</li>
            <li>The final submission must include the <strong>Hugging Face repository ID</strong> and a <strong>read-only access token</strong>, so that the organizers can securely access and evaluate the model.</li>
          </ul>

          <h4 className="rules-heading">Test Phase Submission</h4>
          <ul className="rules-list">
            <li>The test data for HalluScoring 2026 will not be disclosed to participants.</li>
            <li>Participants must submit their best fine-tuned model checkpoint by <strong>July 25, 2026</strong>. The organizers will evaluate the submitted models locally on the hidden test set.</li>
            <li>The public leaderboard will be released on <strong>July 30, 2026</strong>.</li>
          </ul>
        </div>

        <p className="contact">For questions, contact the organizers</p>
      </div>
    </section>
  )
}
