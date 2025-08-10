import { navItems, creations, socialIcons } from './data.js';
import { renderNav, renderMobileNav, renderCreations, renderFooterMenu, renderSocialIcons } from './render.js';
import { setupMenuToggle } from './script.js';

// Bootstrap rendering after DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  // Desktop nav
  const desktopMenu = document.getElementById('desktop-menu');
  renderNav(desktopMenu, navItems);

  // Mobile menu
  const mobileMenu = document.getElementById('menu');
  renderMobileNav(mobileMenu, navItems);
  setupMenuToggle('menu-btn', 'menu');

  // Creations
  const group1 = document.getElementById('creations-group-1');
  const group2 = document.getElementById('creations-group-2');
  if (Array.isArray(creations) && creations.length >= 2) {
    renderCreations(group1, creations[0]);
    renderCreations(group2, creations[1]);
  }

  // Footer
  const footerMenu = document.getElementById('footer-menu');
  const social = document.getElementById('social-icons');
  renderFooterMenu(footerMenu, navItems);
  renderSocialIcons(social, socialIcons);
});
