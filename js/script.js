export function setupMenuToggle(buttonId = 'menu-btn', menuId = 'menu') {
    const btn = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);
    if (!btn || !menu) return;
    const navToggle = () => {
        btn.classList.toggle('open');
        menu.classList.toggle('flex');
        menu.classList.toggle('hidden');
        // Update ARIA attributes for accessibility
        const isOpen = btn.classList.contains('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        // Toggle a body state so we can adjust layout on mobile when menu is open
        document.body.classList.toggle('menu-open', isOpen);
    };
    btn.addEventListener('click', navToggle);
}
