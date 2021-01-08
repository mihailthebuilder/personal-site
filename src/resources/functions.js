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
  setNextAnimationStart,
  elementSelector,
  animationStart = true
) => {
  if (animationStart) {
    const element = document.querySelector(elementSelector);
    if (isScrolledIntoView(element)) {
      setNextAnimationStart(true);
    } else {
      window.addEventListener("scroll", function handler() {
        if (isScrolledIntoView(element)) {
          setNextAnimationStart(true);
          this.removeEventListener("scroll", handler);
        }
      });
    }
  }
};

export { sleep, isScrolledIntoView, startAnimationFunction };
