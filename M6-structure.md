M6 — Project Structure Documentation

1. Before Reorganization

The project originally used a simpler structure, with most JavaScript functionality placed in a single script file.

M5-portfolio/
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js

The JavaScript file handled multiple responsibilities, including navigation, dark mode, visitor information, project rendering, and contact form validation.

2. After Reorganization

The project was reorganized by separating JavaScript responsibilities and placing documentation in its own folder.

M5-portfolio/
├── .git/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   ├── storage.js
│   └── theme-init.js
└── docs/
    ├── M6T5-audit-log.md
    └── M6T5-corruption-drill.md

3. Reasons for the Changes

File or folder

Reason for organization

index.html

Keeps the website's HTML structure separate from its styling and JavaScript.

css/style.css

Contains the website's visual styling and layout rules.

js/script.js

Handles the website's interactive features, such as navigation, dark mode controls, project rendering, and form validation.

js/storage.js

Separates Local Storage operations, including saving settings, loading settings, and handling corrupted data.

js/theme-init.js

Applies the saved theme early during page loading to reduce the possibility of a visible theme flash.

docs/

Keeps project audit and corruption drill documentation separate from the website source files.

.git/

Preserves the project's Git repository and commit history.

4. Benefits of the New Structure

The reorganized structure makes the project easier to understand, maintain, and troubleshoot. Separating Local Storage functionality from the main script reduces the number of responsibilities handled by a single file.

The separate theme initialization script also allows the saved theme to be applied earlier during page loading.

Overall, the new organization improves code readability, separates responsibilities, and makes future updates easier to manage.