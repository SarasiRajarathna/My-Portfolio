import BodyContent from "./Components/BodyContent/BodyContent"
import FooterContent from "./Components/FooterContent/FooterContent"
import HeaderContent from "./Components/HeaderContent/HeaderContent"
import Hero from "./Components/HeroSection/Hero"

function App() {
  return (
    <>
     <div id="wrapper">
      <HeaderContent/>
      <Hero/>
      <BodyContent/>
      <FooterContent/>
     </div>
    </>
  )
}

export default App
