import { Mail, Phone } from 'lucide-react'
import { resume } from '../data/resume'
import SectionHeader from './SectionHeader'
import './Contact.css'

export default function Contact() {
  const { contact } = resume

  return (
    <section id="contact" className="section contact">
      <div className="section-inner contact__layout">
        <SectionHeader
          label="10 — Contact"
          title="Let's Talk"
          subtitle="Open to QA roles, freelance testing, and collaboration"
        />

        <div className="contact__grid">
          <a href={`mailto:${contact.email}`} className="contact__card card-surface">
            <Mail size={20} aria-hidden="true" />
            <span className="contact__label">Email</span>
            <span className="contact__value">{contact.email}</span>
          </a>

          <a href={`tel:${contact.phone}`} className="contact__card card-surface">
            <Phone size={20} aria-hidden="true" />
            <span className="contact__label">Phone</span>
            <span className="contact__value">{contact.phone}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
