import './SharedTasks.css'

export default function SharedTasks() {
  return (
    <section className="shared-tasks reveal-on-scroll" id="shared-tasks">
      <div className="shared-container">
        <h2 className="section-heading">Shared tasks</h2>
        <h3 className="section-description" style={{fontWeight: "lighter"}}>Two tracks, three subtasks</h3>

        <div className="track">
          <div className="track-header">
            <h4 className="track-title" style={{fontWeight: "lighter"}}>Track 1 — Hallucination Detection</h4>
          </div>

          <div className="objective">
            <em>Objective</em>
            <p>Detect hallucinations in Arabic question answering using only input–output pairs. No access to internal model states, logits, or generation metadata.</p>
          </div>

          <div className="subtasks">
            <div className="subtask">
              <div className="subtask-title">Track 1.1 — Generalize across questions</div>
              <p>Systems must generalize across different questions drawn from the same set of LLMs. All model architectures appear in both training and test splits, but the questions are completely disjoint.</p>
              <div className="subtask-actions">
                <a
                  className="st-btn"
                  href="https://github.com/HalluScoring/HalluScoring2026-Track1-StarterKit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="btn-icon" viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Starter Kit
                </a>
                <a
                  className="st-btn"
                  href="https://www.codabench.org/competitions/16496/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="btn-icon" viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M10 17l5-5-5-5v10z"/></svg>
                  Go to task
                </a>
              </div>
            </div>

            <div className="subtask">
              <div className="subtask-title">Track 1.2 — Generalize across models</div>
              <p>Systems are evaluated on their ability to generalize to entirely unseen LLM architectures, which do not appear in the training data.</p>
              <div className="subtask-actions">
                <a
                  className="st-btn"
                  href="https://github.com/HalluScoring/HalluScoring2026-Track1-StarterKit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="btn-icon" viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Starter Kit
                </a>
                <a
                  className="st-btn"
                  href="https://www.codabench.org/competitions/16501/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="btn-icon" viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M10 17l5-5-5-5v10z"/></svg>
                  Go to task
                </a>
              </div>
            </div>
          </div>

          <div className="dataset-section">
            <div className="dataset-title">Dataset Sources</div>
            <div className="dataset-tags">
              <span className="dataset-tag"><svg className="tag-icon" viewBox="0 0 8 8" width="12" height="12"><circle cx="4" cy="4" r="4" fill="#9d7e54"/></svg> HalluScore</span>
              <span className="dataset-tag"><svg className="tag-icon" viewBox="0 0 8 8" width="12" height="12"><circle cx="4" cy="4" r="4" fill="#9d7e54"/></svg> Andalus</span>
            </div>
          </div>

        </div>

        <hr className="divider" />

        <div className="track">
          <div className="track-header">
            <h4 className="track-title" style={{fontWeight: "lighter"}}>Track 2 — From Hallucination Detection to Truth</h4>
          </div>

          <div className="objective">
            <em>Objective</em>
            <p>Evaluate models that move beyond hallucination detection toward reliable factual reasoning across Islamic and general culture domains.</p>
          </div>

          <div className="subtasks">
            <div className="subtask">
              <div className="subtask-title">Track 2.1 — Two-step evaluation</div>
              <p>Step 1: Given a question and an LLM-generated answer, determine whether the answer contains a hallucination — a binary yes/no decision.
              <br />Step 2: Correct Answer Selection — select the correct answer from six closely written candidates.</p>
              <div className="subtask-actions">
                <a
                  className="st-btn"
                  href="https://github.com/zighemmohammedennadhir/Hallucination-Detection-Find-the-Truth"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="btn-icon" viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Starter Kit
                </a>
                <a
                  className="st-btn"
                  href="https://www.codabench.org/competitions/16390/"
                  target="_blank"
                  rel="noreferrer"
                ><svg className="btn-icon" viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M10 17l5-5-5-5v10z"/></svg> Go to task</a>
              </div>
            </div>
          </div>

          <div className="dataset-section">
            <div className="dataset-title">Dataset Sources</div>
            <div className="dataset-tags">
              <span className="dataset-tag"><svg className="tag-icon" viewBox="0 0 8 8" width="12" height="12"><circle cx="4" cy="4" r="4" fill="#9d7e54"/></svg> Andalus</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
