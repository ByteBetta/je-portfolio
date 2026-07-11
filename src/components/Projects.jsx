import { resume } from '../data/resume'
import SectionHeader from './SectionHeader'
import InProgressNotice from './InProgressNotice'
import './Projects.css'

export default function Projects() {
  const { projectsMeta } = resume

  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <SectionHeader
          label="06 — Projects"
          title="My Work"
          subtitle="QA projects, automation repos, and tools I've built or contributed to"
        />

        <InProgressNotice message={projectsMeta.inProgressMessage} />

        <div className="coming-soon card-surface">
          <h3 className="coming-soon__title">GitHub repos coming soon</h3>
          <p className="coming-soon__text">{projectsMeta.comingSoonNote}</p>
        </div>
      </div>
    </section>
  )
}
