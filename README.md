1. Project Overview - This portfolio website serves as my digital portfolio, where clients can view my projects, explore my work, and contact me through email. By creating this website, I aim to provide an easier and more organized way to showcase and present all of my projects in one accessible place.

2. Technologies Used

- **HTML5** – Used to create the structure and content of the website.
- **CSS3** – Used to design the website's appearance, layout, styling, and responsive behavior.
- **JavaScript** – Used to implement interactive features such as the navigation toggle, dark mode, dynamic project display, and contact form validation.
- **Local Storage** – Used to save website settings, including the selected theme and visitor information.
- **Git and GitHub** – Used for version control and project repository management.
- **InfinityFree** – Used as the web hosting platform to publish the portfolio online.

## 3. Features

- **Responsive Navigation** – Allows visitors to navigate through the website using a toggle menu.
- **Dark Mode** – Enables visitors to switch between light and dark themes.
- **Dynamic Project Display** – Displays portfolio projects dynamically using JavaScript.
- **Contact Form Validation** – Checks the information entered by visitors and provides validation feedback.
- **Visitor Information and Settings** – Uses Local Storage to save the selected theme, visitor name, and last visit information.
- **Responsive Layout** – Adjusts the website's layout to accommodate different screen sizes, including mobile, tablet, and desktop devices.

## 4. Project Structure

```text
M5-portfolio/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   ├── storage.js
│   └── theme-init.js
│
└── README.md
```

- **index.html** – Contains the main structure and content of the portfolio.
- **css/style.css** – Contains the website's styling and responsive layouts.
- **js/script.js** – Handles the website's interactive features and functionality.
- **js/storage.js** – Manages saved settings and visitor information using Local Storage.
- **js/theme-init.js** – Applies the saved theme when the website loads.

## 5. Local Setup

1. Download or clone the project repository from GitHub.
2. Open the project folder using Visual Studio Code.
3. Locate the `index.html` file.
4. Open `index.html` in a web browser to view the website.
5. Make sure the `css` and `js` folders remain in their correct locations so that the website's styling and functionality work properly.

No additional dependencies or installation of frameworks are required.

## 6. Deployment Information

The portfolio website was deployed using InfinityFree, a free web hosting platform.

The deployment process involved:

1. Creating an InfinityFree hosting account.
2. Using the provided domain for the portfolio website.
3. Uploading the `index.html` file into the `htdocs` directory.
4. Creating the `css` and `js` folders inside `htdocs`.
5. Uploading the corresponding CSS and JavaScript files into their respective folders.
6. Testing the deployed website to verify that its styling, functionality, and responsiveness work correctly.
7. Verifying that the website uses HTTPS and automatically redirects HTTP traffic to HTTPS.

## 7. Live Website

The deployed portfolio website can be accessed through the following link:

**Live URL:** https://jerichocruz123.ct.ws

The website was tested after deployment to verify its accessibility, interactive features, and responsive behavior across mobile, tablet, and desktop screen sizes.

## 8. Known Limitations

The portfolio website has a few limitations:

- **Contact Form:** The contact form currently performs client-side validation only. It does not send messages directly to my email because a backend or email service has not been connected.
- **Project Links:** Some project entries do not have demo or repository links configured yet.
- **Browser Compatibility:** The website was tested using Brave Browser, but compatibility with other browsers has not been fully verified.
- **Server-Side Functionality:** The website is a static HTML, CSS, and JavaScript project, so it does not include server-side processing or database functionality.