import { resume } from '../data/resume'
import './Hero.css'

export default function Hero() {
  const { hero } = resume

  return (
    <section id="home" className="hero">
      <div className="hero__main">
        <div className="hero__badge">
          <span className="hero__badge-dot" aria-hidden="true" />
          {hero.status}
        </div>

        <p className="hero__eyebrow">
          <span className="hero__eyebrow-square" aria-hidden="true" />
          {hero.eyebrow}
        </p>

        <h1 className="hero__headline">
          {hero.headline.map((line) => (
            <span key={line} className="hero__headline-line">
              {line}
            </span>
          ))}
        </h1>

        <p className="hero__highlight">{hero.highlight}</p>
      </div>

      <footer className="hero__bottom">
        <span className="hero__url">{hero.siteUrl}</span>
        <span className="hero__meta">{hero.footerMeta}</span>
      </footer>
    </section>
  )
}
