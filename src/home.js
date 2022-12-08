import About from "./components/about";
import Contacts from "./components/contacts";
import Introduction from "./components/introduction";
import Projects from "./components/projects";
import ParticlesBackground from "./components/displays/particles";

const Home = () => {
  return (
    <div className="home_container">
      <ParticlesBackground />
      <Introduction />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Home;
