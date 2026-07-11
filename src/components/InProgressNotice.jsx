import { Clock } from 'lucide-react'
import './InProgressNotice.css'

export default function InProgressNotice({ message, compact = false }) {
  return (
    <div className={`in-progress card-surface${compact ? ' in-progress--compact' : ''}`} role="status">
      <span className="in-progress__badge">In progress</span>
      <div className="in-progress__body">
        <Clock size={18} className="in-progress__icon" aria-hidden="true" />
        <p className="in-progress__text">{message}</p>
      </div>
    </div>
  )
}
