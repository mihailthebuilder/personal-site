import "./App.scss";
import fire from "./resources/fire.js";
import { useEffect } from "react";

import TypeFadeToggler from "./components/TypeFadeToggler";

import LandingContent from "./components/Landing/LandingContent";
import LandingTyped from "./components/Landing/LandingTyped";

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
      <TypeFadeToggler
        sectionId="landing-section"
        typewriterText="FRONT-END DEVELOPER."
        TitleComponent={LandingTyped}
        ContentComponent={LandingContent}
      />
    </div>
  );
}

export default App;
