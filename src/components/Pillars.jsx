import { useState } from 'react';
import { PILLARS } from '../data';
import { SectionHead } from './ui';

export default function Pillars() {
  const [open, setOpen] = useState(0);
  return (
    <section className="tight-top">
      <div className="wrap">
        <SectionHead n="02" label="Qué hacemos" title="Tres frentes, un mismo propósito" />
        <div className="acc">
          {PILLARS.map((p, i) => (
            <div key={p.name} className={`acc-item ${open === i ? 'open' : ''}`}>
              <button className="acc-btn" type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="n">0{i + 1}</span>
                <span className="t">{p.name}</span>
                <span className="pl" aria-hidden="true">+</span>
              </button>
              <div className="acc-panel"><div>
                <div className="acc-body">
                  <span className="tag label">{p.tag}</span>
                  <p>{p.text}</p>
                </div>
              </div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
