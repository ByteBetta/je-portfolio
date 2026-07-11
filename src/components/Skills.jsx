import { resume } from '../data/resume'
import SectionHeader from './SectionHeader'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-inner">
        <SectionHeader
          label="07 — Skills"
          title="Toolkit"
          subtitle="Technologies and tools I work with daily"
        />

        <div className="skills__grid">
          {resume.skills.map((group) => (
            <article key={group.category} className="skills__card card-surface">
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__tags" aria-label={group.category}>
                {group.items.map((skill) => (
                  <li key={skill} className="skills__tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
