import React, { useMemo } from 'react'
import './Timeline.css'

export default function Timeline() {
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
        date: 'October 24–29, 2026 ',
        compareDate: '2026-10-24',
      },
    ],
    [],
  )

  return (
    <section className="timeline reveal-on-scroll" id="timeline">
      <div className="timeline-container">
        <h2 className="section-heading">Timeline</h2>
        <h3 className="section-description">Important dates</h3>

        <div className="timeline-list">
          {importantDates.map((item) => (
            <div className="timeline-item" key={item.compareDate}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
