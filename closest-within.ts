export function closestWithin(selector: string, start: HTMLElement, end = document.documentElement): HTMLElement | null {
  for (let element: HTMLElement | null = start; element && element !== end; element = element.parentElement) {
    if (element.matches(selector)) {
      return element;
    }
  }
  return end.matches(selector) ? end : null;
}
