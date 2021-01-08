const sleep = (time) => {
  return new Promise((r) => setTimeout(r, time));
};

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  //fully visible elements return true:
  //const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

  // Partially visible elements return true:
  //const isVisible = elemTop < window.innerHeight && elemBottom >= 0;

  const isVisible =
    elemBottom - elemTop > window.innerHeight / 3
      ? elemTop < window.innerHeight && elemBottom >= 0
      : elemTop >= 0 && elemBottom <= window.innerHeight;

  return isVisible;
}

const startAnimationFunction = (elementSelector, setAnimationStep) => {
  const element = document.querySelector(elementSelector);
  if (isScrolledIntoView(element)) {
    setAnimationStep((previousValue) => previousValue + 1);
  } else {
    window.addEventListener("scroll", function handler() {
      if (isScrolledIntoView(element)) {
        setTimeout(() => {
          setAnimationStep((previousValue) => previousValue + 1);
        }, 200);
        this.removeEventListener("scroll", handler);
      }
    });
  }
};

export { sleep, isScrolledIntoView, startAnimationFunction };
