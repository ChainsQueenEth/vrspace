import { describe, it, expect, beforeEach } from 'vitest';
import { setupMenuToggle } from '../js/script.js';

let button;
let menu;

beforeEach(() => {
  document.body.innerHTML = `
    <button id="menu-btn"></button>
    <nav id="menu" class="hidden"></nav>
  `;
  button = document.getElementById('menu-btn');
  menu = document.getElementById('menu');
});

describe('setupMenuToggle', () => {
  it('toggles classes on click', () => {
    setupMenuToggle('menu-btn', 'menu');
    expect(button.classList.contains('open')).toBe(false);
    expect(menu.classList.contains('hidden')).toBe(true);
    expect(menu.classList.contains('flex')).toBe(false);

    button.click();
    expect(button.classList.contains('open')).toBe(true);
    expect(menu.classList.contains('hidden')).toBe(false);
    expect(menu.classList.contains('flex')).toBe(true);

    button.click();
    expect(button.classList.contains('open')).toBe(false);
    expect(menu.classList.contains('hidden')).toBe(true);
    expect(menu.classList.contains('flex')).toBe(false);
  });
});
