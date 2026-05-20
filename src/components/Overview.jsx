import './Overview.css'

export default function Overview() {
  return (
    <section className="overview reveal-on-scroll" id="overview">
      <div className="overview-container">
        <h2 className="section-heading">Overview</h2>
        
        <h3 className="section-description">Why Arabic Hallucination Detection Matters</h3>
        
        <div className="section-body">
          <p>
            Large language models increasingly generate fluent yet unreliable responses, making hallucination detection a critical challenge for trustworthy AI deployment, particularly in underrepresented languages such as Arabic. While substantial progress has been made for English, Arabic hallucination detection remains limited by the lack of dedicated benchmarks and shared evaluation settings.
          </p>
          
          <p>
            To address this gap, HalluScoring introduces shared tasks focused on Arabic hallucination detection in question answering. Participants are challenged to develop systems that detect hallucinated responses using only observable input–output signals, without relying on model internals, or using external verification techniques.
          </p>
        </div>
      </div>
    </section>
  )
}
