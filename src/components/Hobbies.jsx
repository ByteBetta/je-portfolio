import { resume } from '../data/resume'
import SectionHeader from './SectionHeader'
import InProgressNotice from './InProgressNotice'
import './Hobbies.css'

export default function Hobbies() {
  const { hobbies } = resume

  return (
    <section id="hobbies" className="section hobbies">
      <div className="section-inner">
        <SectionHeader
          label="09 — Hobbies"
          title={hobbies.title}
          subtitle="What I build outside of testing"
        />

        <InProgressNotice message={hobbies.inProgressMessage} />
      </div>
    </section>
  )
}
