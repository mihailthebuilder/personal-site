import "./App.scss";
import fire from "./resources/fire.js";
import { useEffect } from "react";

import TypeFadeToggler from "./components/TypeFadeToggler";

import Landing from "./components/Landing/Landing.jsx";

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
        ChildComponent={Landing}
      />
    </div>
  );
}

export default App;
