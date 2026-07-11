import { useEffect, useRef } from 'react'
import { X, Paperclip, AlertTriangle } from 'lucide-react'
import './BugModal.css'

const severityClass = {
  Critical: 'severity--critical',
  High: 'severity--high',
  Medium: 'severity--medium',
}

const statusClass = {
  Open: 'status--open',
  'In Progress': 'status--progress',
  Resolved: 'status--resolved',
}

export default function BugModal({ bug, onClose }) {
  const closeBtnRef = useRef(null)

  useEffect(() => {
    closeBtnRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!bug) return null

  return (
    <div className="bug-modal" role="presentation" onClick={onClose}>
      <div
        className="bug-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bug-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="bug-modal__header">
          <div className="bug-modal__header-left">
            <span className="bug-modal__tool">{bug.tool}</span>
            <span className="bug-modal__id">DEF-1042</span>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="bug-modal__close"
            aria-label="Close bug report"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </header>

        <div className="bug-modal__body">
          <h2 id="bug-modal-title" className="bug-modal__title">
            {bug.title}
          </h2>

          <div className="bug-modal__badges">
            <span className={`bug-modal__badge ${severityClass[bug.severity]}`}>
              <AlertTriangle size={12} aria-hidden="true" />
              {bug.severity}
            </span>
            <span className="bug-modal__badge">{bug.priority}</span>
            <span className={`bug-modal__badge ${statusClass[bug.status]}`}>
              {bug.status}
            </span>
          </div>

          <div className="bug-modal__section">
            <h3>Environment</h3>
            <p>{bug.environment}</p>
          </div>

          <div className="bug-modal__section">
            <h3>Steps to Reproduce</h3>
            <ol>
              {bug.steps.map((step, i) => (
                <li key={step}>
                  <span>{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="bug-modal__compare">
            <div className="bug-modal__compare-col bug-modal__compare-col--pass">
              <h3>Expected</h3>
              <p>{bug.expected}</p>
            </div>
            <div className="bug-modal__compare-col bug-modal__compare-col--fail">
              <h3>Actual</h3>
              <p>{bug.actual}</p>
            </div>
          </div>

          <div className="bug-modal__section">
            <h3>Evidence</h3>
            <ul className="bug-modal__evidence">
              {bug.evidence.map((item) => (
                <li key={item}>
                  <Paperclip size={12} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bug-modal__notes">
            <h3>QA Notes</h3>
            <p>{bug.notes}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
