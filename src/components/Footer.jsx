import { resume } from '../data/resume'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__url">{resume.hero.siteUrl}</span>
        <span className="footer__copy">
          &copy; {year} {resume.name.toUpperCase()}
        </span>
        <span className="footer__meta">{resume.hero.footerMeta}</span>
      </div>
    </footer>
  )
}
