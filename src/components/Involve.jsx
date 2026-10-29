import { SectionHead } from './ui';

const WAYS = [
  ['Donar', 'Cada aporte sostiene directamente uno de los programas activos.'],
  ['Ser voluntario', 'Manos en terreno o apoyo remoto en comunicación, diseño y formación.'],
  ['Ser aliado', 'Empresas y organizaciones que co-crean programas o aportan recursos.'],
];

export default function Involve() {
  return (
    <section id="sumate" className="tight-top">
      <div className="wrap">
        <SectionHead n="06" label="Súmate" title="Tres formas de aportar" />
        <div className="ways">
          {WAYS.map(([t, d]) => (
            <a className="way" href="#contacto" key={t}>
              <h3>{t}</h3><p>{d}</p><span className="ar" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
