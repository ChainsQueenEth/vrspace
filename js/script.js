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
    };
    btn.addEventListener('click', navToggle);
}
