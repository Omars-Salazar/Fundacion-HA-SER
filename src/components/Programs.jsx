import { useState } from 'react';
import { CATS, PROGRAMS } from '../data';
import { SectionHead } from './ui';

export default function Programs() {
  const [cat, setCat] = useState('Todos');
  const list = cat === 'Todos' ? PROGRAMS : PROGRAMS.filter((p) => p.cat === cat);
  return (
    <section id="programas" className="tight-top">
      <div className="wrap">
        <SectionHead n="03" label="Programas" title="En qué estamos trabajando" />
        <div className="tabs" role="tablist" aria-label="Filtrar por área">
          {CATS.map((c) => (
            <button key={c} type="button" role="tab" aria-selected={cat === c} className={`tab ${cat === c ? 'on' : ''}`} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="rows">
          {list.map((p, i) => (
            <article className="row" key={cat + p.title} style={{ animationDelay: `${i * 55}ms` }}>
              <div><h3>{p.title}</h3><p>{p.text}</p></div>
              <span className="label">{p.cat}</span>
              <span className="label">{p.lugar}</span>
              <span className="label st">{p.estado}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
