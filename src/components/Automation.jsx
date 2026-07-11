import { resume } from '../data/resume'
import SectionHeader from './SectionHeader'
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

        <div className="automation__content card-surface">
          <p className="automation__experience">{automation.experience}</p>
          <p className="automation__note">{automation.note}</p>
        </div>
      </div>
    </section>
  )
}
