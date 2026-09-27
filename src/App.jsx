import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/HeroSection/Hero';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Achievements from './Components/Achievements/Achievements';
import Contact from './Components/Contact/Contact';
import Footer from './Components/FooterContent/FooterContent';

function App() {
  return (
    <>
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
        className="skip-link"
        onFocus={(e) => {
          e.target.style.left = '1rem';
          e.target.style.top = '1rem';
          e.target.style.width = 'auto';
          e.target.style.height = 'auto';
        }}
        onBlur={(e) => {
          e.target.style.left = '-9999px';
        }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
