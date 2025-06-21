import { useLocation, BrowserRouter } from "react-router-dom";
import { Navbar, NavbarMobile, NavbarOpen } from "./components/Navbar";
import { HeroScreen, HeroTab } from "./components/Hero";
import { Aim } from "./components/Aim";
import { Features, FeatureShow } from "./components/Features";
import { FeatureProvider } from "./context/FeatureContext";
import { Download, Extensions } from "./components/Downloads";
import { Accordians, Faqs } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";


export const App = () => {

  
  const isMediumDevice = useMediaQuery(
    "(max-width:992px)"
  );

  const ScrollToSection = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if(hash){
          const section = document.querySelector(hash);
          if(section){
            section.scrollIntoView({behavior : "smooth"});
          }
        }
    },[hash])
  }

  return <div className="overflow-x-hidden">
  <BrowserRouter basename="/bookmark">
      <ScrollToSection/>

        <FeatureProvider>
          <NavbarOpen/>
          <div id="home">
            {!isMediumDevice ?<Navbar/>      : <NavbarMobile/>}
            {!isMediumDevice ? <HeroScreen/> : <HeroTab/>}
          </div>
          
          <div id="features">
            <Aim/>
            <Features/>
          </div>
          <FeatureShow/>
          <div id="downloads">
          <Download/>
          </div>
          <Extensions/>
          <div id="faqs">
            <Faqs/>
          </div>
          <Accordians/>
          <Contact/>
          <Footer/> 
      </FeatureProvider>
    
    
  </BrowserRouter>
  
   
  </div>
}


export default App;