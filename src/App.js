import Typewriter from "./components/Typewriter";

import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";

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
    </div>
  );
}

export default App;
