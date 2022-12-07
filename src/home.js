import About from "./components/about";
import Contacts from "./components/contacts";
import Introduction from "./components/introduction";
import Projects from "./components/projects";

const Home = () => {
  return (
    <div>
      <Introduction />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Home;
