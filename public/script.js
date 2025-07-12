const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const nav = document.getElementById("nav");

// Only apply toggle behavior on small screens
function setupMenuToggle() {
    if (window.innerWidth <= 768) {
        nav.style.display = 'none';
        closeBtn.style.display = 'none';
        openBtn.style.display = 'flex';

        openBtn.addEventListener('click', () => {
            nav.style.display = 'flex';
            openBtn.style.display = 'none';
            closeBtn.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            nav.style.display = 'none';
            closeBtn.style.display = 'none';
            openBtn.style.display = 'flex';
        });
    } else {
        // Desktop mode — always show nav
        nav.style.display = 'flex';
        openBtn.style.display = 'none';
        closeBtn.style.display = 'none';
    }
}

// Run on load
setupMenuToggle();

// Run again on resize
window.addEventListener("resize", setupMenuToggle);