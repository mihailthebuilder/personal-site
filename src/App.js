import "./App.scss";
import fire from "./resources/fire.js";
import { useEffect } from "react";

import Landing from "./components/Landing";

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
      <div className="font-1">Testing this font</div>
      <div className="font-2">Testing another font</div>
      <div className="font-3">Testing 3rd font</div>
    </div>
  );
}

export default App;
