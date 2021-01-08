import { sleep, startAnimationFunction } from "../../resources/functions.js";
import { useState, useEffect } from "react";
import "./TypeFadeToggler.scss";

const TypeFadeToggler = ({
  selectorTypewriter,
  typewriterText,
  ChildComponent,
}) => {
  const [{ content, carriage }, setContent] = useState({
    content: "",
    carriage: 0,
  });

  const [startTypewriter, setStartTypewriter] = useState(false);

  const [startNextAnimation, setStartNextAnimation] = useState(false);

  useEffect(() => {
    startAnimationFunction(true, setStartTypewriter, selectorTypewriter);
  }, [selectorTypewriter]);

  useEffect(() => {
    if (startTypewriter) {
      if (carriage === typewriterText.length) {
        setTimeout(() => {
          setStartNextAnimation(true);
        }, 300);

        return;
      }
      const delay = setTimeout(async () => {
        if (content === "") {
          await sleep(2000);
        }
        setContent({
          content: content + typewriterText[carriage],
          carriage: carriage + 1,
        });
        clearTimeout(delay);
      }, 70);
    }
  }, [content, carriage, typewriterText, startTypewriter]);

  return (
    <ChildComponent
      typewriterText={content}
      startAnimations={startNextAnimation}
    />
  );
};

export default TypeFadeToggler;
