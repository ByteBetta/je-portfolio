import { resume } from '../data/resume'
import SectionHeader from './SectionHeader'
import { Doodle, Note, Sparkle, Stroke, box, loop, useInView } from './doodle'
import './About.css'

const traits = ['Detail-oriented', 'Developer-friendly', 'Evidence-driven']
const delay = (s) => ({ '--d': `${s}s` })

// Small doodled icons for the resume facts (viewBox 0 0 48 48)
const ICONS = {
  calendar: `${box(6, 10, 36, 32)} M6 20 L42 20 M16 5 L16 14 M32 5 L32 14 M14 28 l0.1 0 M24 28 l0.1 0 M34 28 l0.1 0`,
  browser: `${box(4, 8, 40, 32)} M4 17 L44 17 M10 12.5 l0.1 0 M16 12.5 l0.1 0 M12 26 L28 26 M12 32 L22 32`,
  cloud: 'M14 38 C 3 38, 3 23, 14 23 C 14 10, 33 8, 35 21 C 45 19, 47 38, 36 38 Z M18 31 L30 31',
}

export default function About() {
  const [ref, wait] = useInView()

  return (
    <section id="about" ref={ref} className={`section about ${wait}`}>
      <div className="section-inner">
        <SectionHeader label="01 — About" title="Who I Am" subtitle="What I bring to every release cycle" />

        <div className="about__layout">
          <div className="about__side">
            <figure className="about__polaroid doodle-pop" style={delay(0)}>
              <Doodle viewBox="0 0 200 200" className="about__face">
                <Stroke delay={0.3} d={loop(100, 108, 56, 64)} />
                <Stroke delay={0.7} d="M50 92 C 50 44, 92 30, 124 40 C 152 48, 160 72, 152 96 M62 70 C 82 56, 112 52, 142 66" />
                <Stroke delay={1} d={`${loop(78, 106, 16, 14)} ${loop(122, 106, 16, 14)} M94 104 C 98 100, 102 100, 106 104`} />
                <g className="face-eyes">
                  <Stroke delay={1.2} className="doodle-thick" d="M78 107 l0.1 0 M122 107 l0.1 0" />
                </g>
                <Stroke delay={1.3} d="M82 142 C 92 154, 110 154, 120 142" />
                <Stroke delay={1.4} d="M72 168 C 72 180, 58 190, 36 198 M128 168 C 128 180, 142 190, 164 198" />
              </Doodle>
              <figcaption>{resume.name}</figcaption>
            </figure>

            <Doodle viewBox="0 0 170 70" className="about__pointer">
              <Stroke delay={1.6} className="doodle-accent" d="M70 52 C 46 54, 26 42, 20 12 M10 24 L20 8 L32 20" />
              <Note x={78} y={56} delay={1.9} size={24}>that&apos;s me!</Note>
            </Doodle>

            <ul className="about__stickies" aria-label="Core strengths">
              {traits.map((t, i) => (
                <li key={t} className="doodle-pop" style={delay(1 + i * 0.25)}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="about__main">
            <Doodle viewBox="0 0 120 80" className="about__corner">
              <Stroke delay={0.6} d="M30 44 C 10 44, 10 18, 30 18 C 54 18, 54 52, 26 54 C -6 56, -4 4, 36 4" />
              <Sparkle x={90} y={30} delay={0.9} accent />
            </Doodle>

            <p className="about__lead">
              I help teams <mark className="doodle-mark" style={delay(0.8)}>ship with confidence</mark> — catching
              defects before users do.
            </p>
            <p className="about__text">{resume.about}</p>

            <ul className="about__facts" aria-label="Key highlights">
              {resume.highlights.map((h, i) => (
                <li key={h.label} className="about__fact">
                  <Doodle viewBox="0 0 48 48" className="about__icon">
                    <Stroke delay={1.6 + i * 0.25} d={ICONS[h.icon]} />
                  </Doodle>
                  <span className="about__value doodle-pop" style={delay(1.8 + i * 0.25)}>{h.value}</span>
                  <span className="about__label">{h.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
