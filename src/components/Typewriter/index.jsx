import { sleep, startAnimationFunction } from "../../resources/functions.js";
import { useState, useEffect } from "react";

const Typewriter = ({ selectorTypewriter, typewriterText, ChildComponent }) => {
  const [{ content, carriage }, setContent] = useState({
    content: "",
    carriage: 0,
  });

  const [startNextAnimation, setStartNextAnimation] = useState(false);

  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    if (animationStep === 0) {
      startAnimationFunction(selectorTypewriter, setAnimationStep);
    }
  }, [animationStep, selectorTypewriter]);

  useEffect(() => {
    if (animationStep === 1) {
      if (carriage === typewriterText.length) {
        setTimeout(() => {
          setStartNextAnimation(true);
        }, 200);

        return;
      }
      const delay = setTimeout(async () => {
        if (content === "") {
          await sleep(1200);
        }
        setContent({
          content: content + typewriterText[carriage],
          carriage: carriage + 1,
        });
        clearTimeout(delay);
      }, 70);
    }
  }, [content, carriage, typewriterText, animationStep]);

  return (
    <ChildComponent
      typewriterText={content}
      startAnimations={startNextAnimation}
    />
  );
};

export default Typewriter;
