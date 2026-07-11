export default function SectionHeader({ label, title, subtitle }) {
  return (
    <header className="section-header">
      <span className="section-header__eyebrow">
        <span className="section-header__square" aria-hidden="true" />
        {label}
      </span>
      {title && <h2 className="section-header__title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  )
}
