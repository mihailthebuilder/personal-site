const sleep = (time) => {
  return new Promise((r) => setTimeout(r, time));
};

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  // Partially visible elements return true:
  const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

export { sleep, isScrolledIntoView };
