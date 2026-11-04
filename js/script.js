// Keeps the navigation accessible and lets users open or dismiss the menu.
function setupNavigation() {
    const toggle = document.querySelector("#nav-toggle");
    const nav = document.querySelector("#primary-nav");

    if (!toggle || !nav) return;

    function closeMenu(returnFocus = false) {
        nav.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation menu");

        if (returnFocus) toggle.focus();
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
        if (event.target.closest("a")) closeMenu();
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
        if (window.innerWidth >= 768) closeMenu();
    });
}

setupNavigation();


// Stores the visitor's settings in one shared settings object.
let portfolioSettings = loadSettings();


// Lets visitors choose a theme and remembers their preference.
function setupDarkMode() {
    const toggle = document.querySelector("#theme-toggle");

    if (!toggle) return;

    function applyTheme(theme) {
        const isDark = theme === "dark";

        document.documentElement.classList.toggle("dark-mode", isDark);
        toggle.setAttribute("aria-pressed", String(isDark));
        toggle.textContent = isDark
            ? "Enable light mode"
            : "Enable dark mode";
    }

    applyTheme(portfolioSettings.theme);

    toggle.addEventListener("click", () => {
        const isDark = !document.documentElement.classList.contains("dark-mode");
        const newTheme = isDark ? "dark" : "light";

        portfolioSettings = {
            ...portfolioSettings,
            theme: newTheme
        };

        applyTheme(newTheme);
        saveSettings(portfolioSettings);
    });
}

setupDarkMode();


// Updates and displays the visitor's last-visit information.
function setupLastVisit() {
    const lastVisitElement = document.querySelector("#last-visit");

    const previousVisit = portfolioSettings.lastVisit;

    if (lastVisitElement) {
        lastVisitElement.textContent = previousVisit
            ? `Your previous visit: ${new Date(previousVisit).toLocaleString()}`
            : "Welcome! This is your first recorded visit.";
    }

    portfolioSettings = {
        ...portfolioSettings,
        lastVisit: new Date().toISOString()
    };

    saveSettings(portfolioSettings);
}

setupLastVisit();
function setupLastVisit() {
    portfolioSettings = {
        ...portfolioSettings,
        lastVisit: new Date().toISOString()
    };

    saveSettings(portfolioSettings);
}

setupLastVisit();


// Stores a visitor name when a visitor-name input is added to the page.
function setupVisitorName() {
    const nameInput = document.querySelector("#visitor-name");
    const saveButton = document.querySelector("#save-visitor-name");

    if (!nameInput || !saveButton) return;

    nameInput.value = portfolioSettings.visitorName;

    saveButton.addEventListener("click", () => {
        const visitorName = nameInput.value.trim();

        portfolioSettings = {
            ...portfolioSettings,
            visitorName
        };

        saveSettings(portfolioSettings);
    });
}

setupVisitorName();


const projects = [
    {
        title: "Portfolio Website",
        description: "A responsive website showcasing my skills and work.",
        category: "Web Design",
        demoUrl: "",
        repoUrl: ""
    },
    {
        title: "3D Modeling Project",
        description: "A 3D modeling project created for my coursework.",
        category: "3D Art",
        demoUrl: "",
        repoUrl: ""
    },
    {
        title: "Typography Design",
        description: "An original typography concept and visual design.",
        category: "Graphic Design",
        demoUrl: "",
        repoUrl: ""
    }
];


// Builds project cards from data so portfolio content can be updated without hard-coding each card.
function renderProjects(projectItems) {
    const container = document.querySelector("#project-list");

    if (!container) return;

    container.replaceChildren();

    projectItems.forEach((project) => {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const category = document.createElement("p");
        category.textContent = `Category: ${project.category}`;

        card.append(title, description, category);

        // Add optional links only when valid URLs are provided.
        [project.demoUrl, project.repoUrl].forEach((url, index) => {
            if (!url || !isValidHttpUrl(url)) return;

            const link = document.createElement("a");
            link.href = url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = index === 0 ? "Live Demo" : "Source Code";

            card.append(link);
        });

        container.append(card);
    });
}


// Prevents project cards from displaying links that use unsupported or unsafe URL protocols.
function isValidHttpUrl(value) {
    try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
}

renderProjects(projects);


// Validates contact details before submission and helps users locate and correct invalid fields.
function setupContactForm() {
    const form = document.querySelector("#contact-form");

    if (!form) return;

    const status = document.querySelector("#form-status");

    const fields = [
        {
            input: form.elements.name,
            error: document.querySelector("#name-error"),
            label: "Name",
            validate(value) {
                return value.trim()
                    ? ""
                    : "Please enter your name.";
            }
        },
        {
            input: form.elements.email,
            error: document.querySelector("#email-error"),
            label: "Email",
            validate(value) {
                if (!value.trim()) {
                    return "Please enter your email address.";
                }

                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
                    return "Please enter a valid email address.";
                }

                return "";
            }
        },
        {
            input: form.elements.message,
            error: document.querySelector("#message-error"),
            label: "Message",
            validate(value) {
                return value.trim()
                    ? ""
                    : "Please enter a message.";
            }
        }
    ];

    function validateField(field) {
        if (!field.input || !field.error) {
            console.error("Missing form element for:", field.label);
            return false;
        }

        const message = field.validate(field.input.value);

        field.error.textContent = message;

        if (message) {
            field.input.setAttribute("aria-invalid", "true");
        } else {
            field.input.removeAttribute("aria-invalid");
        }

        return !message;
    }

    fields.forEach((field) => {
        if (!field.input) return;

        field.input.addEventListener("input", () => {
            validateField(field);
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const invalidFields = fields.filter(
            (field) => !validateField(field)
        );

        if (invalidFields.length > 0) {
            if (status) {
                status.textContent =
                    "Please correct the highlighted fields.";
            }

            invalidFields[0].input.focus();
            return;
        }

        if (status) {
            status.textContent =
                "Form validation successful. No message was sent because this portfolio has no backend connected.";
        }
    });
}

setupContactForm();