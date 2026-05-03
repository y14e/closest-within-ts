/**
 * closest-within.ts
 *
 * @version 1.0.0
 * @author Yusuke Kamiyamane
 * @license MIT
 * @copyright Copyright (c) 2026 Yusuke Kamiyamane
 * @see {@link https://github.com/y14e/closest-within-ts}
 */

// =============================================================================
// [APIs]
// =============================================================================

export function closestWithin(
  element: Element,
  selector: string,
  scope: Element = document.documentElement,
): Element | null {
  if (
    !(element instanceof Element) ||
    typeof selector !== 'string' ||
    !(scope instanceof Element)
  ) {
    return null;
  }

  if (element !== scope && !scope.contains(element)) {
    console.warn('Element not within scope');
    return null;
  }

  for (
    let current: Element | null = element;
    current && current !== scope;
    current = current.parentElement
  ) {
    if (current.matches(selector)) {
      return current;
    }
  }

  return scope.matches(selector) ? scope : null;
}
