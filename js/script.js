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

function setupDarkMode() {
    const toggle = document.querySelector("#theme-toggle");

    if (!toggle) return;

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const useDarkMode = savedTheme
        ? savedTheme === "dark"
        : prefersDark;

    function applyTheme(isDark) {
        document.body.classList.toggle("dark-mode", isDark);
        toggle.setAttribute("aria-pressed", String(isDark));
        toggle.textContent = isDark
            ? "Enable light mode"
            : "Enable dark mode";
    }

    applyTheme(useDarkMode);

    toggle.addEventListener("click", () => {
        const isDark = !document.body.classList.contains("dark-mode");

        applyTheme(isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

setupDarkMode();