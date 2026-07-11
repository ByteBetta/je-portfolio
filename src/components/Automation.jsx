import { resume } from '../data/resume'
import SectionHeader from './SectionHeader'
import InProgressNotice from './InProgressNotice'
import './Automation.css'

export default function Automation() {
  const { automation } = resume

  return (
    <section id="automation" className="section automation">
      <div className="section-inner">
        <SectionHeader
          label="05 — Automation"
          title={automation.title}
          subtitle={automation.subtitle}
        />

        <article className="auto-panel card-surface">
          <p className="auto-panel__summary">{automation.experience}</p>

          <div className="auto-panel__toolbar">
            <span className="auto-panel__label">Stack</span>
            <ul className="auto-panel__stack" aria-label="Automation stack">
              {automation.stack.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

          <div className="auto-panel__grid">
            {automation.useCases.map((item) => (
              <section key={item.title} className="auto-panel__case">
                <header className="auto-panel__case-head">
                  <h3>{item.title}</h3>
                  <span className="auto-panel__tool">{item.tool}</span>
                </header>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>

        <InProgressNotice message={automation.note} compact />
      </div>
    </section>
  )
}
