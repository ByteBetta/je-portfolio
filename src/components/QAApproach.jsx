import {
  Search,
  ClipboardList,
  Play,
  Bug,
  RotateCcw,
  ShieldCheck,
  Clipboard,
  ListChecks,
  FileWarning,
  Code2,
  Shield,
  BookOpen,
} from 'lucide-react'
import { resume } from '../data/resume'
import SectionHeader from './SectionHeader'
import './QAApproach.css'

const stepIcons = [Search, ClipboardList, Play, Bug, RotateCcw, ShieldCheck]

const deliverableIcons = {
  clipboard: Clipboard,
  checklist: ListChecks,
  bug: FileWarning,
  code: Code2,
  shield: Shield,
  book: BookOpen,
}

export default function QAApproach() {
  return (
    <section id="qa-approach" className="section qa-approach">
      <div className="section-inner">
        <SectionHeader
          label="02 — QA Approach"
          title="How I Work"
          subtitle="Plan, test, report, and validate every release"
        />

        <div className="workflow">
          <h3 className="qa-block-label">Testing workflow</h3>
          <ol className="workflow__timeline">
            {resume.qaProcess.map((item, index) => {
              const Icon = stepIcons[index]
              const isLast = index === resume.qaProcess.length - 1
              return (
                <li key={item.step} className="workflow__step">
                  <div className="workflow__rail" aria-hidden="true">
                    <span className="workflow__num">
                      {String(item.step).padStart(2, '0')}
                    </span>
                    {!isLast && <span className="workflow__line" />}
                  </div>
                  <article className="workflow__card card-surface">
                    <div className="workflow__card-head">
                      <span className="workflow__icon" aria-hidden="true">
                        <Icon size={16} />
                      </span>
                      <h4>{item.title}</h4>
                    </div>
                    <p>{item.description}</p>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="deliverables">
          <h3 className="qa-block-label">What I deliver</h3>
          <div className="deliverables__bento">
            {resume.deliverables.map((item, index) => {
              const Icon = deliverableIcons[item.icon]
              return (
                <article
                  key={item.title}
                  className={`deliverables__tile card-surface deliverables__tile--${index + 1}`}
                >
                  <span className="deliverables__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="deliverables__icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="domains">
          <h3 className="qa-block-label">Testing domains</h3>
          <div className="domains__stack">
            {resume.testingDomains.map((domain, i) => (
              <article key={domain.title} className="domains__card card-surface">
                <header className="domains__header">
                  <span className="domains__num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4>{domain.title}</h4>
                </header>
                <ul>
                  {domain.items.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
