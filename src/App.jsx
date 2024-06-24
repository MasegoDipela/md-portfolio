import ButtonGradient from "./assets/svg/ButtonGradient";
import Education from "./components/Education";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem]  lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Education />
        <Skills />
        <Projects />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
