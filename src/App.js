import "./App.scss";
import fire from "./resources/fire.js";
import { useEffect } from "react";

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
      <Landing />
      <About />
    </div>
  );
}

export default App;
