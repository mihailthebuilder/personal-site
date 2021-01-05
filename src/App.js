import "./App.scss";
import fire from "./resources/fire.js";
import { useState, useEffect } from "react";

import Landing from "./components/Landing";

function App() {
  const [items, setItems] = useState([]);

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
    </div>
  );
}

export default App;
