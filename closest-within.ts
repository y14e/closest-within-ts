export function closestWithin(
  element: HTMLElement,
  selector: string,
  scope: HTMLElement = document.documentElement,
): HTMLElement | null {
  if (!element || !scope) {
    return null;
  }

  if (element !== scope && !scope.contains(element)) {
    console.warn('Element not within scope.');
    return null;
  }

  for (
    let current: HTMLElement | null = element;
    current && current !== scope;
    current = current.parentElement
  ) {
    if (current.matches(selector)) {
      return current;
    }
  }

  return scope.matches(selector) ? scope : null;
}
