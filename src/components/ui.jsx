import { useReveal } from '../hooks';

export function Reveal({ children, className = '', delay = 0 }) {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} className={`rv ${shown ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Photo({ src, alt, caption, ratio = '4 / 3' }) {
  return (
    <figure className="photo">
      {src ? (
        <img src={src} alt={alt} loading="lazy" style={{ aspectRatio: ratio }} />
      ) : (
        <div className="photo-ph" style={{ aspectRatio: ratio }} role="img" aria-label={alt}>
          <span>Espacio para foto</span>
        </div>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function SectionHead({ n, label, title }) {
  return (
    <Reveal className="shead">
      <div className="label"><span>{n}</span>{label}</div>
      {title && <h2>{title}</h2>}
    </Reveal>
  );
}
