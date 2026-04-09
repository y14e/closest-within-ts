export function closestWithin(element, selector, scope = document.documentElement) {
  if (!element || !scope) {
    return null;
  }
  if (element !== scope && !scope.contains(element)) {
    console.warn('Element not within scope:', element, scope);
    return null;
  }
  for (let current = element; current && current !== scope; current = current.parentElement) {
    if (current.matches(selector)) {
      return current;
    }
  }
  return scope.matches(selector) ? scope : null;
}
