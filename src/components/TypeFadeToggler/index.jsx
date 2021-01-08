import {
  sleep,
  isScrolledIntoView,
  startAnimationFunction,
} from "../../resources/functions.js";
import { useState, useEffect } from "react";
import "./TypeFadeToggler.scss";

const TypeFadeToggler = ({
  selectorAnimationListen,
  typewriterText,
  ChildComponent,
}) => {
  const [{ content, carriage }, setContent] = useState({
    content: "",
    carriage: 0,
  });

  const [startAnimation, setStartAnimation] = useState(false);

  const [startCompAnim, setStartCompAnim] = useState(false);

  useEffect(() => {
    startAnimationFunction(true, setStartAnimation, selectorAnimationListen);
  }, [selectorAnimationListen]);

  useEffect(() => {
    if (startAnimation) {
      let renderedText = typewriterText;

      if (carriage === renderedText.length) {
        setTimeout(() => {
          setStartCompAnim(true);
        }, 300);

        return;
      }
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
    }
  }, [content, carriage, typewriterText, startAnimation]);

  return (
    <ChildComponent typewriterText={content} startCompAnim={startCompAnim} />
  );
};

export default TypeFadeToggler;
