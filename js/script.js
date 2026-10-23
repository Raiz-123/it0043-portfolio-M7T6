function setupNavigation() {
    const toggle = document.querySelector("#nav-toggle");
    const nav = document.querySelector("#primary-nav");

    if (!toggle || !nav) {
        return;
    }

    function closeMenu(returnFocus = false) {
        nav.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");

        if (returnFocus) {
            toggle.focus();
        }
    }

    function openMenu() {
        nav.hidden = false;
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Close navigation menu");
    }

    toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    nav.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            toggle.getAttribute("aria-expanded") === "true"
        ) {
            closeMenu(true);
        }
    });

    document.addEventListener("click", (event) => {
        if (
            toggle.getAttribute("aria-expanded") === "true" &&
            !nav.contains(event.target) &&
            !toggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });
}

setupNavigation();