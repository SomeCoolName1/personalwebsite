import { useState, useEffect, useRef } from "react";
import About from "./components/about";
import Contacts from "./components/contacts";
import Introduction from "./components/introduction";
import ParticlesBackground from "./components/particles";
import Projects from "./components/projects";

const Home = () => {
  // const [scrollProgress, setProgress] = useState(0);

  let navref;

  console.log(navref);

  // const handleScroll = () => {
  //   let rect = navRef.current.getBoundingClientRect();
  //   let height = rect.height; //5887.75
  //   let divTop = rect.top;

  //   // const winScroll = document.documentElement.scrollTop;
  //   // const height =
  //   //   document.documentElement.scrollHeight -
  //   //   document.documentElement.clientHeight;

  //   const scrolled = (divTop / height) * 100;

  //   console.log(scrolled);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollProgress]);
  return (
    <div>
      <div className="nav_bar_container">
        <div className="nav_bar_progress" />
        <div className="nav_bar_points" />
        <div className="nav_bar_points" />
        <div className="nav_bar_points" />
        <div className="nav_bar_points" />
      </div>
      <Introduction />
      <About />
      <Projects />
      <Contacts />
      <ParticlesBackground />
    </div>
  );
};

export default Home;
