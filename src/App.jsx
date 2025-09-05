import AboutUs from "./Components/AboutUs/AboutUs"
import FooterContent from "./Components/FooterContent/FooterContent"
import HeaderContent from "./Components/HeaderContent/HeaderContent"
import Hero from "./Components/HeroSection/Hero"
import Skills from "./Components/Skills/Skills"

function App() {
  return (
    <>
     <div id="wrapper">
      <HeaderContent/>
      <Hero/>
      <AboutUs/>
      <Skills/>
      <FooterContent/>
     </div>
    </>
  )
}

export default App
