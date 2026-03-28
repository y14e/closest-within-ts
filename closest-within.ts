export function closestWithin(selector: string, element: HTMLElement, scope = document.documentElement): HTMLElement | null {
  for (let current: HTMLElement | null = element; current && current !== scope; current = current.parentElement) {
    if (current.matches(selector)) return current;
  }
  return scope.matches(selector) ? scope : null;
}
