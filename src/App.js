import React from "react";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Updown from "./Components/Updown/Updown";
import AnimatedCursor from "react-animated-cursor";
import {SkeletonTheme} from "react-loading-skeleton"

const App = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={6}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        outerStyle={{
          border: "1px solid #fff",
        }}
      />
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
        <Updown />
      </SkeletonTheme>
    </div>
  );
};

export default App;
