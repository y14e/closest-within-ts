export function closestWithin(selector, element, scope = document.documentElement) {
  if (!element || !scope) return null;
  for (let current = element; current && current !== scope; current = current.parentElement) {
    if (current.matches(selector)) return current;
  }
  return scope.matches(selector) ? scope : null;
}
