import AboutUs from "./Components/AboutUs/AboutUs"
import Contact from "./Components/Contact/Contact"
import FooterContent from "./Components/FooterContent/FooterContent"
import HeaderContent from "./Components/HeaderContent/HeaderContent"
import Hero from "./Components/HeroSection/Hero"
import Projects from "./Components/Projects/Projects"
import Skills from "./Components/Skills/Skills"

function App() {
  return (
    <>
     <div id="wrapper">
      <HeaderContent/>
      <Hero/>
      <AboutUs/>
      <Skills/>
      <Projects/>
      <Contact/>
      <FooterContent/>
     </div>
    </>
  )
}

export default App
