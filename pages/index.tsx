
import HomeMauro from "../src/components/home/home";
import AboutMe from "../src/components/aboutMe/AboutMe";
import Portfolio from "../src/components/portfolio/Portfolio";
import Technologies from "../src/components/technologies/Technologies";
import Footer from "../src/components/footer/footer";
import Certifications from "../src/components/certifications/Certifications";
import { SpeedInsights } from "@vercel/speed-insights/next";

function Home() {

  return (
      <>

      <HomeMauro/>
      <Technologies/>
      <Portfolio/>
      <Certifications/>
      <Footer/>
      <SpeedInsights/>
      </>
  );
}

export default Home