import { resume } from '../data/resume'
import SectionHeader from './SectionHeader'
import './About.css'

const traits = ['Detail-oriented', 'Developer-friendly', 'Evidence-driven']

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <SectionHeader
          label="01 — About"
          title="Who I Am"
          subtitle="What I bring to every release cycle"
        />

        <div className="about__grid">
          <aside className="about__profile card-surface">
            <div className="about__avatar" aria-hidden="true">
              JE
            </div>
            <h3 className="about__name">{resume.name}</h3>
            <p className="about__role">{resume.title}</p>
            <p className="about__tagline">{resume.tagline}</p>

            <ul className="about__traits" aria-label="Core strengths">
              {traits.map((trait) => (
                <li key={trait}>{trait}</li>
              ))}
            </ul>
          </aside>

          <div className="about__bio card-surface">
            <p className="about__lead">
              I help teams ship with confidence — catching defects before users do.
            </p>
            <p className="about__text">{resume.about}</p>
          </div>
        </div>

        <div className="about__stats" aria-label="Key highlights">
          {resume.highlights.map((item) => (
            <div key={item.label} className="about__stat card-surface">
              <span className="about__stat-value">{item.value}</span>
              <span className="about__stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
