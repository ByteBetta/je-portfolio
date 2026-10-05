// Shared hand-drawn SVG pieces. Every stroke uses pathLength="1" so the draw-on CSS
// (doodle.css) works for any path; --d staggers when it starts.
import { useEffect, useRef, useState } from 'react'

export const star = (x, y, s = 1) =>
  `M${x} ${y - 14 * s} Q${x + 2 * s} ${y - 2 * s} ${x + 14 * s} ${y} Q${x + 2 * s} ${y + 2 * s} ${x} ${y + 14 * s} Q${x - 2 * s} ${y + 2 * s} ${x - 14 * s} ${y} Q${x - 2 * s} ${y - 2 * s} ${x} ${y - 14 * s}`

export const box = (x, y, w, h) =>
  `M${x + 4} ${y} C ${x + w * 0.4} ${y - 4}, ${x + w * 0.7} ${y + 3}, ${x + w} ${y + 2} C ${x + w + 3} ${y + h * 0.4}, ${x + w - 2} ${y + h * 0.7}, ${x + w + 1} ${y + h} C ${x + w * 0.6} ${y + h + 3}, ${x + w * 0.3} ${y + h - 2}, ${x} ${y + h + 1} C ${x - 3} ${y + h * 0.6}, ${x + 2} ${y + h * 0.3}, ${x + 7} ${y - 3}`

// Loose ellipse that overshoots its start, like a pen circling something
export const loop = (cx, cy, rx, ry) =>
  `M${cx + rx * 0.1} ${cy - ry} C ${cx + rx * 1.1} ${cy - ry * 1.05}, ${cx + rx * 1.05} ${cy + ry}, ${cx} ${cy + ry} C ${cx - rx * 1.1} ${cy + ry * 1.02}, ${cx - rx * 1.05} ${cy - ry * 0.95}, ${cx + rx * 0.35} ${cy - ry * 1.1}`

export const tick = (x, y, s = 1) =>
  `M${x} ${y} C ${x + 5 * s} ${y + 3 * s}, ${x + 9 * s} ${y + 9 * s}, ${x + 11 * s} ${y + 14 * s} C ${x + 18 * s} ${y - 2 * s}, ${x + 28 * s} ${y - 14 * s}, ${x + 40 * s} ${y - 24 * s}`

export const Stroke = ({ d, delay = 0, className = '' }) => (
  <path d={d} pathLength="1" className={`doodle-draw ${className}`} style={{ '--d': `${delay}s` }} />
)

export const Note = ({ x, y, delay, color = 'var(--color-accent)', size = 34, anchor = 'start', children }) => (
  <text x={x} y={y} textAnchor={anchor} className="doodle-note" style={{ '--d': `${delay}s`, fill: color, fontSize: size }}>
    {children}
  </text>
)

export const Sparkle = ({ x, y, s, delay, t = 0, accent }) => (
  <g className="doodle-twinkle" style={{ '--t': `${t}s` }}>
    <Stroke delay={delay} className={accent ? 'doodle-accent' : ''} d={star(x, y, s)} />
  </g>
)

// Inline SVG with the ink styles and sketch "boil" applied
export const Doodle = ({ viewBox, className = '', children }) => (
  <svg className={`doodle-ink ${className}`} viewBox={viewBox} aria-hidden="true" focusable="false">
    <g filter="url(#doodle-boil)">{children}</g>
  </svg>
)

// Rendered once in App; every Doodle references it by id
export const BoilFilter = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
    <filter id="doodle-boil">
      <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="1">
        <animate attributeName="seed" values="1;3;5;2" dur="0.6s" calcMode="discrete" repeatCount="indefinite" />
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" scale="3" />
    </filter>
  </svg>
)

// Holds animations paused (via .doodle-wait) until the element scrolls into view
export function useInView() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -20% 0px' },
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return [ref, `doodle-wait${seen ? ' is-seen' : ''}`]
}
