import { useState } from 'react';
import { QUOTES } from '../data';
import { SectionHead } from './ui';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = QUOTES.length;
  return (
    <section>
      <div className="wrap">
        <SectionHead n="05" label="Voces" />
        <div className="qgrid">
          <div />
          <div>
            <figure className="q" key={i}>
              <blockquote>“{QUOTES[i].text}”</blockquote>
              <figcaption className="label q-who">{QUOTES[i].who}</figcaption>
            </figure>
            <div className="ctl">
              <button type="button" className="label lnk" onClick={() => setI((i - 1 + n) % n)}>← Anterior</button>
              <span className="label">{i + 1} / {n}</span>
              <button type="button" className="label lnk" onClick={() => setI((i + 1) % n)}>Siguiente →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
