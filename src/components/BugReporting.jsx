import { useState } from 'react'
import { AlignLeft, Calendar, Flag, Paperclip } from 'lucide-react'
import { resume } from '../data/resume'
import SectionHeader from './SectionHeader'
import BugModal from './BugModal'
import './BugReporting.css'

const priorityFlag = {
  P0: 'flag--critical',
  P1: 'flag--high',
  P2: 'flag--medium',
}

const columnClass = {
  Open: 'bug-board__column--open',
  'In Progress': 'bug-board__column--progress',
  Resolved: 'bug-board__column--resolved',
}

export default function BugReporting() {
  const [selectedBug, setSelectedBug] = useState(null)

  const bugsByStatus = resume.bugBoardColumns.map((col) => ({
    ...col,
    bugs: resume.bugReportSamples.filter((b) => b.status === col.id),
  }))

  return (
    <section id="bug-reporting" className="section bug-reporting">
      <div className="section-inner">
        <SectionHeader
          label="04 — Bug Reporting"
          title="How I Document Defects"
          subtitle="Kanban-style bug board — click a card to view the full report"
        />

        <div className="bug-board card-surface" role="region" aria-label="Bug tracking board">
          <div className="bug-board__toolbar">
            <span className="bug-board__view">Board</span>
            <span className="bug-board__hint">Click a card to open the report</span>
          </div>

          <div className="bug-board__columns">
            {bugsByStatus.map((column) => (
              <div
                key={column.id}
                className={`bug-board__column ${columnClass[column.id]}`}
              >
                <header className="bug-board__header">
                  <span className="bug-board__label">{column.label}</span>
                  <span className="bug-board__count">{column.bugs.length}</span>
                </header>

                <div className="bug-board__cards">
                  {column.bugs.map((bug) => (
                    <button
                      key={bug.id}
                      type="button"
                      className="bug-card"
                      onClick={() => setSelectedBug(bug)}
                    >
                      <div
                        className={`bug-card__thumb bug-card__thumb--${bug.thumbnailVariant}`}
                        aria-hidden="true"
                      >
                        <span className="bug-card__thumb-label">Screenshot</span>
                      </div>

                      <p className="bug-card__title">{bug.boardTitle}</p>

                      <div className="bug-card__meta">
                        <AlignLeft size={13} aria-hidden="true" />
                        <span className="bug-card__tool">{bug.tool}</span>
                        <span className="bug-card__attachments">
                          <Paperclip size={13} aria-hidden="true" />
                          {bug.evidence.length}
                        </span>
                      </div>

                      <div className="bug-card__footer">
                        <span className="bug-card__avatar" aria-hidden="true">
                          {bug.assignee}
                        </span>
                        <Calendar size={13} aria-hidden="true" />
                        <Flag
                          size={13}
                          className={priorityFlag[bug.priority]}
                          aria-label={`Priority ${bug.priority}`}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="bug-reporting__disclaimer">
          Sample board based on real scenarios — details anonymized.
        </p>
      </div>

      {selectedBug && (
        <BugModal bug={selectedBug} onClose={() => setSelectedBug(null)} />
      )}
    </section>
  )
}
