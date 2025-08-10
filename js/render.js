import { el, empty } from './dom-utils.js';

// Render desktop nav items into a container
export function renderNav(container, items, itemClass = 'nav-link') {
  if (!container) return;
  empty(container);
  items.forEach(({ label, href }) => {
    const group = el('div', { className: 'group' });
    const link = el('a', { className: itemClass, text: label, attrs: { href } });
    const underline = el('div', { className: 'underline-hover-desktop' });
    group.appendChild(link);
    group.appendChild(underline);
    container.appendChild(group);
  });
}

// Render mobile nav items (simple links)
export function renderMobileNav(container, items, itemClass = 'mob-nav-link') {
  if (!container) return;
  empty(container);
  items.forEach(({ label, href }) => {
    const link = el('a', { className: itemClass, text: label, attrs: { href } });
    container.appendChild(link);
  });
}

// Render a single creation card
function creationCard({ title, desktopSrc, mobileSrc }) {
  const wrapper = el('div', { className: 'group item' });
  const desktopImg = el('img', {
    className: 'hidden w-full duration-200 md:block group-hover:scale-110',
    attrs: { src: desktopSrc, alt: '' },
  });
  const mobileImg = el('img', { className: 'w-full md:hidden', attrs: { src: mobileSrc, alt: '' } });
  const gradient = el('div', { className: 'item-gradient' });
  const heading = el('h5', { text: title });
  wrapper.appendChild(desktopImg);
  wrapper.appendChild(mobileImg);
  wrapper.appendChild(gradient);
  wrapper.appendChild(heading);
  return wrapper;
}

// Render creations group into a container
export function renderCreations(container, items) {
  if (!container) return;
  empty(container);
  container.classList.add('item-container');
  items.forEach((item) => container.appendChild(creationCard(item)));
}

// Render footer menu items
export function renderFooterMenu(container, items) {
  if (!container) return;
  empty(container);
  container.className = 'flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3';
  items.forEach(({ label, href }) => {
    const group = el('div', { className: 'h-10 group' });
    const link = el('a', { text: label, attrs: { href } });
    const underline = el('div', { className: 'underline-hover-footer' });
    group.appendChild(link);
    group.appendChild(underline);
    container.appendChild(group);
  });
}

// Render social icons
export function renderSocialIcons(container, icons) {
  if (!container) return;
  empty(container);
  container.className = 'flex item-center justify-center mx-auto space-x-4 md:justify-end md:mx-0';
  icons.forEach(({ alt, src, href }) => {
    const group = el('div', { className: 'h-8 group' });
    const a = el('a', { attrs: { href } });
    const img = el('img', { className: 'h-6 w-6 object-contain', attrs: { src, alt } });
    a.appendChild(img);
    group.appendChild(a);
    container.appendChild(group);
  });
}
