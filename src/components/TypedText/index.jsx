import "./TypedText.scss";
import { sleep } from "../../resources/functions.js";

import { useState, useEffect } from "react";

const TypedText = ({ text }) => {
  const [{ content, carriage }, setContent] = useState({
    content: "",
    carriage: 0,
  });

  useEffect(() => {
    let renderedText = text + " ";

    if (carriage === renderedText.length) return;
    const delay = setTimeout(async () => {
      if (content === "") {
        await sleep(2000);
      }
      setContent({
        content: content + renderedText[carriage],
        carriage: carriage + 1,
      });
      clearTimeout(delay);
    }, 70);
  }, [content, text, carriage]);

  return (
    <div>
      <span>{content}</span>
      <span className="typewriter-cursor">|</span>
    </div>
  );
};

export default TypedText;
