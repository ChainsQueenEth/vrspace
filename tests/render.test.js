import { describe, it, expect, beforeEach } from 'vitest';
import { renderNav, renderMobileNav, renderCreations, renderFooterMenu, renderSocialIcons } from '../js/render.js';
import { navItems, creations, socialIcons } from '../js/data.js';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.innerHTML = '';
  document.body.appendChild(container);
});

describe('render utils', () => {
  it('renders desktop nav items', () => {
    renderNav(container, navItems);
    // Each item is wrapped in a .group
    expect(container.children.length).toBe(navItems.length);
    expect(container.querySelectorAll('.group').length).toBe(navItems.length);
  });

  it('renders mobile nav items as links', () => {
    renderMobileNav(container, navItems);
    expect(container.querySelectorAll('a').length).toBe(navItems.length);
  });

  it('renders creations group', () => {
    renderCreations(container, creations[0]);
    // 4 items in first group
    expect(container.querySelectorAll('.group.item').length).toBe(creations[0].length);
    // each item should have an h5 title
    expect(container.querySelectorAll('h5').length).toBe(creations[0].length);
  });

  it('renders footer menu', () => {
    renderFooterMenu(container, navItems);
    expect(container.querySelectorAll('.group').length).toBe(navItems.length);
  });

  it('renders social icons', () => {
    renderSocialIcons(container, socialIcons);
    expect(container.querySelectorAll('img').length).toBe(socialIcons.length);
  });
});
