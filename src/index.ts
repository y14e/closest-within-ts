const root = document.documentElement;

export function closestWithin(
  element: Element,
  selector: string,
  scope: Element = root,
): Element | null {
  if (!(element instanceof Element)) {
    console.warn('Invalid element');
    return null;
  }

  try {
    document.querySelector(selector);
  } catch {
    console.warn('Invalid selector');
    return null;
  }

  if (!(scope instanceof Element)) {
    console.warn(`Invalid scope element. Fallback: <${root.tagName.toLowerCase()}> element.`);
    scope = root;
  }

  if (element !== scope && !scope.contains(element)) {
    console.warn('Element not within the scope element');
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
