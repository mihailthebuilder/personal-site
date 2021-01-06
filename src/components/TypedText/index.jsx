import { useState, useEffect } from "react";

const TypedText = ({ text }) => {
  const [{ content, carriage }, setContent] = useState({
    content: "",
    carriage: 0,
  });

  useEffect(() => {
    let renderedText = text + " ";

    if (carriage === renderedText.length) return;
    const delay = setTimeout(() => {
      setContent({
        content: content + renderedText[carriage],
        carriage: carriage + 1,
      });
      clearTimeout(delay);
    }, 70);
  }, [content, text, carriage]);

  return <span>{content}</span>;
};

export default TypedText;
