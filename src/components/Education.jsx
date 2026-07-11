import { Award, GraduationCap } from 'lucide-react'
import { resume } from '../data/resume'
import SectionHeader from './SectionHeader'
import './Education.css'

export default function Education() {
  const { education } = resume

  return (
    <section id="education" className="section education">
      <div className="section-inner">
        <SectionHeader
          label="08 — Education"
          title="Background"
          subtitle="Academic foundation and achievements"
        />

        <article className="education__card card-surface">
          <div className="education__icon" aria-hidden="true">
            <GraduationCap size={22} />
          </div>
          <div className="education__body">
            <h3 className="education__degree">{education.degree}</h3>
            <p className="education__school">{education.school}</p>
            <time className="education__period">{education.period}</time>

            <div className="education__awards">
              <h4>
                <Award size={14} aria-hidden="true" />
                Awards
              </h4>
              <ul>
                {education.awards.map((award) => (
                  <li key={award}>{award}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
