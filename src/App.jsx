import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import Involve from './components/Involve';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Programs />
        <Impact />
        <Testimonials />
        <Involve />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
