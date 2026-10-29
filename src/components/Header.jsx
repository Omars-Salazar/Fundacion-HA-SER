import { useEffect, useState } from 'react';

const LINKS = [['#nosotros', 'Nosotros'], ['#programas', 'Programas'], ['#impacto', 'Impacto'], ['#contacto', 'Contacto']];

export default function Header() {
  const [on, setOn] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setOn(window.scrollY > 8);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <header className={`hdr ${on || open ? 'on' : ''}`}>
      <div className="wrap hdr-row">
        <a className="brand" href="#top">HA—SER</a>
        <nav className="nav" aria-label="Principal">
          {LINKS.map(([h, l]) => <a key={h} href={h}>{l}</a>)}
        </nav>
        <div className="hdr-actions">
          <a className="btn btn-y" href="#sumate">Donar</a>
          <button className="menu-btn label" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </div>
      <nav className={`mnav ${open ? 'open' : ''}`} aria-label="Móvil">
        {LINKS.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
      </nav>
    </header>
  );
}
