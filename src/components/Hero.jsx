import { Photo } from './ui';
import { MARQUEE } from '../data';

export default function Hero() {
  const words = [...MARQUEE, ...MARQUEE];
  return (
    <>
      <section className="hero" id="top">
        <div className="wrap">
          <h1 aria-label="Hacer es una forma de ser.">
            <span className="ln"><span>Hacer</span></span>
            <span className="ln"><span>es una forma</span></span>
            <span className="ln"><span>de <span className="hl">ser.</span></span></span>
          </h1>
          <div className="hero-b">
            <div>
              <p className="lead">Acompañamos a comunidades en educación, salud y cuidado del territorio. Decidimos con ellas, no en su lugar.</p>
              <div className="cta-row">
                <a className="btn btn-y" href="#sumate">Quiero ayudar</a>
                <a className="btn btn-line" href="#nosotros">Conocer la fundación</a>
              </div>
            </div>
            <div className="hero-photo">
              <Photo alt="Fotografía de una jornada comunitaria" caption="Fig. 1 — Jornada comunitaria (foto de ejemplo)" ratio="16 / 10" />
            </div>
          </div>
        </div>
      </section>
      <div className="mq" aria-hidden="true">
        <div className="mq-in">
          {[0, 1].map((k) => (
            <div key={k} style={{ display: 'inline-flex' }}>
              {words.map((w, i) => <span key={i}>{w}</span>)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
