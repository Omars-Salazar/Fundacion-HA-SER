import { useRef } from 'react';
import { STATS } from '../data';
import { useCountUp, useReveal } from '../hooks';
import { SectionHead } from './ui';

function Stat({ s }) {
  const [ref, shown] = useReveal(0.5);
  const v = useCountUp(s.num, shown);
  return (
    <div className="stat" ref={ref}>
      <div className="num">{v.toLocaleString('es-CO')}{s.suffix}</div>
      <div className="l">{s.label}</div>
    </div>
  );
}

export default function Impact() {
  return (
    <section className="impact" id="impacto">
      <div className="wrap">
        <SectionHead n="04" label="Impacto" title="Lo que hemos construido juntos" />
        <div className="stats">{STATS.map((s) => <Stat key={s.label} s={s} />)}</div>
        <p className="note label">Cifras de ejemplo para esta plantilla</p>
      </div>
    </section>
  );
}
