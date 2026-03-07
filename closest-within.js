export function closestWithin(selector, start, end = document.documentElement) {
  for (let element = start; element && element !== end; element = element.parentElement) {
    if (element.matches(selector)) {
      return element;
    }
  }
  return end.matches(selector) ? end : null;
}
