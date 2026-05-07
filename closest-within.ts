/**
 * closest-within.ts
 *
 * @version 1.0.4
 * @author Yusuke Kamiyamane
 * @license MIT
 * @copyright Copyright (c) Yusuke Kamiyamane
 * @see {@link https://github.com/y14e/closest-within-ts}
 */

// -----------------------------------------------------------------------------
// [APIs]
// -----------------------------------------------------------------------------

export function closestWithin(
  element: Element,
  selector: string,
  scope: Element = document.documentElement,
) {
  if (!(element instanceof Element)) {
    console.warn('Invalid element');
    return null;
  }

  if (typeof selector !== 'string') {
    console.warn('Invalid selector');
    return null;
  }

  if (!(scope instanceof Element)) {
    console.warn(
      `Invalid scope element. Fallback: <${document.documentElement.tagName.toLowerCase()}> element.`,
    );
    scope = document.documentElement;
  }

  if (element !== scope && !scope.contains(element)) {
    console.warn('Element not within scope');
    return null;
  }

  let current: Element | null = element;

  while (current) {
    if (current.matches(selector)) {
      return current;
    }

    if (current === scope) {
      break;
    }

    current = current.parentElement;
  }

  return null;
}
