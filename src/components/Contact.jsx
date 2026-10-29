import { useState } from 'react';
import { SectionHead } from './ui';

function Field({ id, label, error, children }) {
  return (
    <div className={`field ${error ? 'error' : ''}`}>
      <label className="label" htmlFor={id}>{label}</label>
      {children}
      {error && <div className="err-msg" id={`${id}-e`}>{error}</div>}
    </div>
  );
}

function ContactForm() {
  const [f, setF] = useState({ name: '', email: '', message: '' });
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!f.name.trim()) x.name = 'Cuéntanos tu nombre.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) x.email = 'Escribe un correo válido.';
    if (f.message.trim().length < 10) x.message = 'Cuéntanos un poco más (mínimo 10 caracteres).';
    setErr(x);
    if (!Object.keys(x).length) setSent(true);
  };

  if (sent) {
    return (
      <div className="form-ok" role="status">
        Formulario de demostración: el mensaje no se envió a ningún lado. Al conectarlo a un servicio como Formspree o a un backend propio, quedará funcional.
      </div>
    );
  }
  const a = (k) => ({ 'aria-invalid': !!err[k], 'aria-describedby': err[k] ? `${k}-e` : undefined });
  return (
    <form onSubmit={submit} noValidate>
      <Field id="name" label="Nombre" error={err.name}>
        <input id="name" autoComplete="name" value={f.name} onChange={set('name')} {...a('name')} />
      </Field>
      <Field id="email" label="Correo" error={err.email}>
        <input id="email" type="email" autoComplete="email" value={f.email} onChange={set('email')} {...a('email')} />
      </Field>
      <Field id="message" label="Mensaje" error={err.message}>
        <textarea id="message" rows="4" value={f.message} onChange={set('message')} {...a('message')} />
      </Field>
      <button className="btn btn-y" type="submit">Enviar mensaje →</button>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contacto" className="tight-top">
      <div className="wrap">
        <SectionHead n="07" label="Contacto" title="Hablemos" />
        <div className="cgrid">
          <dl>
            <dt className="label">Correo</dt><dd>contacto@ha-ser.org</dd>
            <dt className="label">Teléfono</dt><dd>+57 300 000 0000</dd>
            <dt className="label">Ubicación</dt><dd>Pasto, Nariño, Colombia</dd>
            <dt className="label">Redes</dt><dd>@fundacionhaser</dd>
          </dl>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
