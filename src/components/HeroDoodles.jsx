// Hand-drawn motion layer for the hero: strokes draw themselves in, then "boil" like a sketch.
import { Doodle, Note, Sparkle, Stroke, box } from './doodle'

// Browser wireframe: page sketch, cursor clicks a button, bug circled in red
const Wireframe = () => (
  <>
    <Stroke delay={0.2} d="M80 110 C 220 104, 400 106, 540 112 C 544 220, 542 330, 538 420 C 400 426, 220 424, 84 418 C 80 320, 78 220, 82 104" />
    <Stroke delay={0.7} d="M82 152 C 220 146, 400 150, 540 148" />
    <Stroke delay={0.9} d="M104 124 a8 8 0 1 0 0.1 0 M130 124 a8 8 0 1 0 0.1 0 M156 124 a8 8 0 1 0 0.1 0" />
    <Stroke delay={1} className="doodle-muted" d={box(190, 120, 320, 20)} />
    <Stroke delay={1.2} className="doodle-thick" d="M110 192 C 160 186, 200 196, 262 190" />
    <Stroke delay={1.3} d="M110 222 L290 218 L292 332 L112 336 Z M110 222 L292 332 M290 218 L112 336" />
    <Stroke delay={1.5} className="doodle-muted" d="M320 226 C 380 221, 440 229, 510 223 M320 252 C 370 248, 430 256, 490 250 M320 278 C 380 273, 420 281, 470 276" />
    <Stroke delay={1.7} d={box(322, 308, 118, 36)} />
    <Stroke delay={1.6} className="doodle-muted" d="M110 370 C 220 364, 380 372, 510 366 M110 392 C 200 388, 300 394, 400 390" />
    <g className="doodle-click">
      <Stroke delay={2.1} className="doodle-fill" d="M408 330 l0 34 l9 -8 l7 15 l6 -3 l-7 -14 l12 0 Z" />
    </g>
    <Stroke delay={2.7} className="doodle-danger" d="M300 326 C 298 290, 466 288, 464 326 C 462 366, 300 372, 310 322" />
    <Stroke delay={3.1} className="doodle-danger" d="M462 360 C 500 400, 520 430, 530 462 M514 452 L530 464 L538 444" />
    <Note x={575} y={505} delay={3.5} color="var(--color-danger)" anchor="end">bug: off by 2px!</Note>
    <Sparkle x={560} y={70} s={0.7} delay={3.3} accent />
  </>
)

export default function HeroDoodles() {
  return (
    <Doodle className="hero__doodles" viewBox="60 45 530 470">
      <Wireframe />
    </Doodle>
  )
}
