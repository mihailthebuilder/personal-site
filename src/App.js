import Typewriter from "./components/Typewriter";

import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Typewriter
        selectorTypewriter=".landing-title-role"
        typewriterText="FRONT-END DEVELOPER."
        ChildComponent={Landing}
      />
      <Typewriter
        selectorTypewriter="#about>.section-title"
        typewriterText="about."
        ChildComponent={About}
      />
      <Typewriter
        selectorTypewriter="#projects>.section-title"
        typewriterText="projects."
        ChildComponent={Projects}
      />
      <Typewriter
        selectorTypewriter="#contact>.section-title"
        typewriterText="contact."
        ChildComponent={Contact}
      />
    </div>
  );
}

export default App;
