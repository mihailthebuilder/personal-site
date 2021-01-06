import { sleep, isScrolledIntoView } from "../../resources/functions.js";
import { useState, useEffect } from "react";
import "./TypeFadeToggler.scss";

const TypeFadeToggler = ({ sectionId, typewriterText, ChildComponent }) => {
  const [opacity, setOpacity] = useState("component-hide");

  const [{ content, carriage }, setContent] = useState({
    content: "",
    carriage: 0,
  });

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (sectionId === "landing") {
      setStartAnimation(true);
    } else {
      let sectionElem = document.getElementById(sectionId);
      sectionElem.addEventListener("scroll", () => {
        if (isScrolledIntoView(sectionElem)) {
          setStartAnimation(true);
        }
      });
    }
  }, [sectionId]);

  useEffect(() => {
    if (startAnimation) {
      let renderedText = typewriterText + " ";

      if (carriage === renderedText.length) {
        setTimeout(() => {
          setOpacity("component-show");
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

  return <ChildComponent typewriterText={content} opacity={opacity} />;
};

export default TypeFadeToggler;
