import { describe, it, expect } from 'vitest';
import { el, empty } from '../js/dom-utils.js';

describe('dom-utils', () => {
  it('el() creates element with class, text, attrs, and children', () => {
    const child = el('span', { text: 'child' });
    const node = el('div', {
      className: 'foo bar',
      text: 'hello',
      attrs: { id: 'root', 'data-x': '1' },
      children: [child],
    });
    expect(node.tagName).toBe('DIV');
    expect(node.className).toBe('foo bar');
    expect(node.textContent).toContain('hello');
    expect(node.getAttribute('id')).toBe('root');
    expect(node.getAttribute('data-x')).toBe('1');
    expect(node.firstChild.tagName).toBe('SPAN');
    expect(node.firstChild.textContent).toBe('child');
  });

  it('empty() removes all children', () => {
    const node = el('div', { children: [el('span'), el('span')] });
    expect(node.childNodes.length).toBe(2);
    empty(node);
    expect(node.childNodes.length).toBe(0);
  });
});
