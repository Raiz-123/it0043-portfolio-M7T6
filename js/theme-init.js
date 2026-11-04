(function initializeTheme() {
    const settings = loadSettings();

    // Apply the saved theme before the page is displayed.
    document.documentElement.classList.toggle(
        "dark-mode",
        settings.theme === "dark"
    );
})();