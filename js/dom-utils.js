// Small DOM helpers to keep render logic tidy
export function el(tag, options = {}) {
  const node = document.createElement(tag);
  const { className, text, attrs = {}, children = [] } = options;
  if (className) node.className = className;
  Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
  // Append children first so firstChild refers to the first element child
  children.forEach((child) => node.appendChild(child));
  // If text is provided, append as a text node to preserve existing children
  if (typeof text === 'string' && text.length > 0) {
    node.appendChild(document.createTextNode(text));
  }
  return node;
}

export function empty(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}
