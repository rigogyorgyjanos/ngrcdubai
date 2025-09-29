import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OwnersInvestors from "./components/OwnersInvestors"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Preloader from './components/Preloader';
import { useRef, useState } from "react"

function App() {
  const logoRef = useRef<HTMLImageElement>(null);

  const [loading, setLoading] = useState(true);


  return (
    <>
      {/* {loading && <Preloader navLogoRef={logoRef} onFinish={() => setLoading(false)} />} */}
      <Navbar logoRef={logoRef} />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="owners-investors">
          <OwnersInvestors />
        </section>
        <section id="testimonals">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App
