import fire from "./resources/fire.js";
import { useEffect } from "react";

import Typewriter from "./components/Typewriter";

import Landing from "./components/Landing";
import About from "./components/About";

function App() {
  useEffect(() => {
    fire
      .firestore()
      .collection("testing")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
        });
      });
  }, []);

  return (
    <div>
      <Typewriter
        selectorTypewriter=".landing-title-role"
        typewriterText="FRONT-END DEVELOPER."
        ChildComponent={Landing}
      />
      <Typewriter
        selectorTypewriter=".about-image"
        typewriterText="about."
        ChildComponent={About}
      />
    </div>
  );
}

export default App;
