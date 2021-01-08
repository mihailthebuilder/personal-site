const sleep = (time) => {
  return new Promise((r) => setTimeout(r, time));
};

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

  // Partially visible elements return true:
  //const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

const startAnimationFunction = (
  animationBeforeEnded,
  setAnimationStart,
  elementSelector
) => {
  if (animationBeforeEnded) {
    const element = document.querySelector(elementSelector);
    if (isScrolledIntoView(element)) {
      setAnimationStart(true);
    } else {
      window.addEventListener("scroll", () => {
        if (isScrolledIntoView(element)) {
          setAnimationStart(true);
        }
      });
    }
  }
};

export { sleep, isScrolledIntoView, startAnimationFunction };
