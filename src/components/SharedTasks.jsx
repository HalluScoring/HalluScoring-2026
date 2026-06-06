import './SharedTasks.css'

export default function SharedTasks() {
  return (
    <section className="shared-tasks reveal-on-scroll" id="shared-tasks">
      <div className="shared-container">
        <h2 className="section-heading">Shared tasks</h2>
        <h3 className="section-description">Two tracks, four subtasks</h3>
        <p className="section-kicker">Two distinct evaluation paths, each with its own rhythm and submission flow.</p>

        <div className="track">
          <div className="track-header">
            <h4 className="track-title">Track 1 — Hallucination Detection</h4>
          </div>

          <div className="objective">
            <em>Objective</em>
            <p>Detect hallucinations in Arabic question answering using only input–output pairs.</p>
            <p className="io-sentence">For each example, participants are given a question in Arabic, a gold answer (reference), and a model-generated answer from one of five LLMs; the system must predict a binary label indicating whether the model answer is hallucinated (1) or non-hallucinated (0).</p>
          </div>

          <div className="subtasks">
            <div className="subtask">
              <div className="subtask-title">Task 1.1 — Generalize across questions</div>
              <p>Systems must generalize across different questions drawn from the same set of LLMs. All model architectures appear in both training and test splits, but the questions are completely disjoint.</p>
              <div className="dataset-stats">
                <em>Dataset stats</em>
                <table className="subtask-table" role="table" aria-label="Task 1.1 dataset splits">
                <thead>
                  <tr>
                    <th>Split</th>
                    <th>Instances</th>
                    <th>Questions</th>
                    <th>Models</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Train</td>
                    <td>4,705</td>
                    <td>2,221</td>
                    <td>5 (Seen)</td>
                  </tr>
                  <tr>
                    <td>Dev</td>
                    <td>1,300</td>
                    <td>900</td>
                    <td>5 (Seen)</td>
                  </tr>
                  <tr>
                    <td>Test</td>
                    <td>1,030</td>
                    <td>206</td>
                    <td>5 (Seen)</td>
                  </tr>
                </tbody>
                </table>
              </div>
              <div className="evaluation-metrics">
                <em>Evaluation metrics</em>
                <table className="metrics-table" role="table" aria-label="Task 1.1 evaluation metrics">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Role</th>
                      <th>What It Measures</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AUC-ROC</td>
                      <td>Primary · Ranking</td>
                      <td>The model's ability to discriminate between hallucinated and non-hallucinated instances across all classification thresholds. Range: 0.5 (random) → 1.0 (perfect).</td>
                    </tr>
                    <tr>
                      <td>Macro F1-score</td>
                      <td>Secondary · Diagnostic</td>
                      <td>Unweighted average of F1 for each class. Treats both classes equally regardless of frequency — penalizes systems that ignore the minority class.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br></br>
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
                  <svg className="btn-icon" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M10 17l5-5-5-5v10z"/></svg>
                  Go to task
                </a>
              </div>
            </div>
            
            <div className="subtask">
              <div className="subtask-title">Task 1.2 — Generalize across models</div>
              <p>Systems are evaluated on their ability to generalize to entirely unseen LLM architectures, which do not appear in the training data.</p>
              <div className="dataset-stats">
                <em>Dataset stats</em>
                <table className="subtask-table" role="table" aria-label="Task 1.2 dataset splits">
                <thead>
                  <tr>
                    <th>Split</th>
                    <th>Instances</th>
                    <th>Questions</th>
                    <th>Models</th>
                    <th>Model Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Train</td>
                    <td>4,705</td>
                    <td>2,221</td>
                    <td>5</td>
                    <td>Seen</td>
                  </tr>
                  <tr>
                    <td>Dev</td>
                    <td>200</td>
                    <td>100</td>
                    <td>2</td>
                    <td>Unseen (different)</td>
                  </tr>
                  <tr>
                    <td>Test</td>
                    <td>412</td>
                    <td>206</td>
                    <td>2</td>
                    <td>Unseen (different)</td>
                  </tr>
                </tbody>
                </table>
              </div>
              <div className="evaluation-metrics">
                <em>Evaluation metrics</em>
                <table className="metrics-table" role="table" aria-label="Task 1.2 evaluation metrics">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Role</th>
                      <th>What It Measures</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AUC-ROC</td>
                      <td>Primary · Ranking</td>
                      <td>The model's ability to discriminate between hallucinated and non-hallucinated instances across all classification thresholds. Range: 0.5 (random) → 1.0 (perfect).</td>
                    </tr>
                    <tr>
                      <td>Macro F1-score</td>
                      <td>Secondary · Diagnostic</td>
                      <td>Unweighted average of F1 for each class. Treats both classes equally regardless of frequency — penalizes systems that ignore the minority class.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br></br>
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
                  <svg className="btn-icon" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M10 17l5-5-5-5v10z"/></svg>
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
            <h4 className="track-title">Track 2 — From Hallucination Detection to Truth</h4>
          </div>

          <div className="objective">
            <em>Objective</em>
            <p>Given a question and an LLM-generated answer, the model must decide whether the answer is hallucinated. Then, it must select the correct answer from six very similar options, written in the same style as the LLM-generated answer. The goal is to build models that can detect hallucinations and choose the correct answer among close and confusing options.</p>
            <p className="io-sentence">For each example, participants are given a question; an answer generated by a baseline LLM; and six candidate answers labeled from A to F. The system must complete one unified task through a two-step process: Step 1 — Hallucination Detection: decide whether the generated answer is reliable and should be labeled as no_hallucination, or whether it contains hallucinated, misleading, unsupported, or factually incorrect information and should be labeled as hallucination. Step 2 — Find the Truth: select the single correct answer from the six close and challenging candidate options.</p>
          </div>

          <div className="subtasks">
            <div className="subtask">
              <div className="subtask-title">Task 2.1 — Islamic Knowledge</div>
              <p>Questions related to Islamic knowledge, including beliefs, Islamic history, Islamic law, religious concepts, terminology, and authoritative Islamic sources.</p>
              <div className="dataset-stats">
                <em>Dataset stats</em>
                <table className="subtask-table" role="table" aria-label="Task 2.1 dataset splits">
                  <thead>
                    <tr>
                      <th>Split</th>
                      <th>Number of Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Train</td>
                      <td>400</td>
                    </tr>
                    <tr>
                      <td>Development (Dev)</td>
                      <td>200</td>
                    </tr>
                    <tr>
                      <td>Test</td>
                      <td>400</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>1,000 examples</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="evaluation-metrics">
                <em>Evaluation metrics</em>
                <table className="metrics-table" role="table" aria-label="Task 2.1 evaluation metrics">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Metric</th>
                      <th>Weight</th>
                      <th>What It Measures</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Step 1: Hallucination Detection</td>
                      <td>Macro F1-Score</td>
                      <td>0.4</td>
                      <td>Ability to classify answers as no-hallucinate or hallucination.</td>
                    </tr>
                    <tr>
                      <td>Step 2: Find the Truth</td>
                      <td>Accuracy</td>
                      <td>0.6</td>
                      <td>Ability to select the correct option from A–F.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                  href="https://www.codabench.org/competitions/16792/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="btn-icon" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M10 17l5-5-5-5v10z"/></svg>
                  Go to task
                </a>
              </div>
            </div>

            <div className="subtask">
              <div className="subtask-title">Task 2.2 — General Culture</div>
              <p>Questions covering broad general knowledge domains, including geography, science, history, and Islamic culture.</p>
              <div className="dataset-stats">
                <em>Dataset stats</em>
                <table className="subtask-table" role="table" aria-label="Task 2.2 dataset splits">
                  <thead>
                    <tr>
                      <th>Split</th>
                      <th>Number of Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Train</td>
                      <td>1600</td>
                    </tr>
                    <tr>
                      <td>Development (Dev)</td>
                      <td>800</td>
                    </tr>
                    <tr>
                      <td>Test</td>
                      <td>1600</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>4,000 examples</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="evaluation-metrics">
                <em>Evaluation metrics</em>
                <table className="metrics-table" role="table" aria-label="Task 2.2 evaluation metrics">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Metric</th>
                      <th>Weight</th>
                      <th>What It Measures</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Step 1: Hallucination Detection</td>
                      <td>Macro F1-Score</td>
                      <td>0.4</td>
                      <td>Ability to classify answers as no-hallucinate or hallucination.</td>
                    </tr>
                    <tr>
                      <td>Step 2: Find the Truth</td>
                      <td>Accuracy</td>
                      <td>0.6</td>
                      <td>Ability to select the correct option from A–F.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                >
                  <svg className="btn-icon" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M10 17l5-5-5-5v10z"/></svg>
                  Go to task
                </a>
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
