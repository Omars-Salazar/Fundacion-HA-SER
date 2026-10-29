import { Reveal, SectionHead } from './ui';

export default function About() {
  return (
    <section id="nosotros">
      <div className="wrap">
        <SectionHead n="01" label="Quiénes somos" />
        <Reveal className="about">
          <p>
            HA-SER nace de una idea sencilla: que <span className="m">hacer</span> y <span className="m">ser</span> no se separan.
            Trabajamos desde adentro de las comunidades, escuchando primero y decidiendo juntos, porque el cambio que dura es el que se construye con quienes lo viven.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
