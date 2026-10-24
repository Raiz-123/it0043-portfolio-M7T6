# M5 Specification — Behaviour Specification Sprint

**Project:** M5-portfolio  
**Assessment:** Technical Assessment 4 — AI Pair Programming  
**Date:** October 24, 2026

## Feature 1: Navigation Toggle

### Trigger
The user clicks the navigation menu button.

### Expected DOM Change
- The navigation menu becomes visible when opened and hidden when closed.
- The button's `aria-expanded` attribute updates to reflect the menu's state.

### Edge Cases
- The user clicks the button repeatedly.
- The navigation button or menu element is missing.
- The user clicks a navigation link while the menu is open.
- The browser window changes from mobile to desktop width.

### Pseudocode
1. Find the navigation button and menu.
2. Check whether both elements exist.
3. If either element is missing, stop setting up the toggle.
4. Listen for clicks on the navigation button.
5. When clicked, toggle the menu between open and closed.
6. Update the button's expanded accessibility state.
7. Close the menu when a navigation link is selected, if appropriate.
8. Ensure the menu behaves correctly when the viewport changes.

## Feature 2: Dark Mode

### Trigger
The user clicks the theme toggle button.

### Expected DOM Change
- The page switches between light and dark themes.
- The background, text, and components use the appropriate theme styles.
- The button communicates the current theme or the action available.

### Edge Cases
- The user switches themes repeatedly.
- The theme button is missing.
- The page reloads after the theme changes.
- A saved theme preference is invalid.
- Browser storage is unavailable.

### Pseudocode
1. Find the theme button and page element used to control the theme.
2. Check whether the required elements exist.
3. Determine the initial theme from the chosen default and any valid saved preference.
4. Apply the initial theme.
5. Listen for clicks on the theme button.
6. When clicked, switch to the opposite theme.
7. Update the page's theme state and the button's accessible information.
8. Save the selected theme if persistence is implemented.
9. Handle invalid preferences or unavailable storage without breaking the page.

## Feature 3: Dynamic Content from an Array

### Trigger
The portfolio page loads and the project section is initialized.

### Expected DOM Change
- Project cards are generated from an array of project objects.
- Each card displays the project's title, description, and other available information.
- An empty-state message appears when there are no projects.

### Edge Cases
- The projects array is empty.
- A project is missing required information.
- A project field contains only whitespace.
- The project container is missing.
- A project description contains HTML-like characters.
- An image path is missing or invalid, if project images are used.

### Pseudocode
1. Find the project container.
2. If the container is missing, stop rendering projects.
3. Define an array of project objects.
4. Clear previously generated project content.
5. Check whether the array contains projects.
6. If it is empty, display an appropriate empty-state message.
7. Otherwise, use an array method to process each project.
8. Check that each project has its required information.
9. Create a project card from each valid project object.
10. Insert text safely into the card.
11. Add the card to the project container.
12. Verify that the rendered cards correspond to the valid project entries.

## Feature 4: Contact Form Validation

### Trigger
The user submits the contact form.

### Expected DOM Change
- The default form submission is prevented while validation runs.
- Each invalid field displays a specific error message beside it.
- Errors are cleared or updated when the user corrects invalid information and submits again.
- A success message appears when all validation checks pass, or the form follows its intended submission behaviour.

### Edge Cases
- All required fields are empty.
- A field contains only whitespace.
- The email address is invalid.
- Several fields are invalid at once.
- The user corrects an invalid field and submits again.
- The form or a required field is missing.
- The user submits the form repeatedly.

### Pseudocode
1. Find the contact form and its required fields.
2. Check whether the form and required fields exist.
3. If required elements are missing, stop setting up validation.
4. Listen for the form's submit event.
5. Prevent the default submission behaviour.
6. Clear errors from the previous submission.
7. Check each required field for a meaningful value.
8. Validate the email address.
9. Check any additional requirements specified for the fields.
10. Display a specific error beside every invalid field.
11. Associate error messages with their fields for accessibility.
12. If any field is invalid, let the user correct the errors.
13. If all fields are valid, display a success message or continue with the intended submission behaviour.
14. Ensure repeated submissions do not leave outdated error messages.

## AI Review and Revisions

### Required Prompt
"Here is my pseudocode. Do not write code. Ask me what happens in cases I have not covered."

### Revision Log
This section will be completed after the AI review.

| Feature | Question or missing case | My decision and specification change |
|---|---|---|
| Navigation toggle | Pending AI review | Pending |
| Dark mode | Pending AI review | Pending |
| Dynamic content | Pending AI review | Pending |
| Contact form validation | Pending AI review | Pending |

## Implementation Constraints
1. Use `addEventListener` for event listeners.
2. Do not use inline `onclick` attributes in HTML.
3. Generate dynamic project content from an array of objects using an array method.
4. Validate the contact form on submission and prevent the default behaviour.
5. Display a specific error message next to each invalid field.
6. Commit each feature separately.
7. Test the implementation using adversarial test cases.

**Status:** Initial draft. AI review and specification revisions are required before JavaScript implementation.



## AI Review — Questions, Decisions, and Revisions

### Feature 1: Navigation Toggle

**Question 1: What happens when the user presses Escape?**

**Decision:** Pressing Escape while the navigation menu is open closes the menu and returns keyboard focus to the navigation toggle button.

**Specification revision:** Add an Escape-key event listener while the menu is open. When Escape is pressed, close the menu, update the button's `aria-expanded` state, and return focus to the button.

**Question 2: What happens when the user clicks outside the open menu?**

**Decision:** Clicking outside both the navigation menu and its toggle button closes the menu.

**Specification revision:** Detect clicks outside the menu and toggle button. Close the menu without interfering with clicks inside the navigation menu. Ensure the toggle button continues to work normally.

### Feature 2: Dark Mode

**Question 3: What happens when no theme preference is saved?**

**Decision:** Use a valid saved theme preference if available. Otherwise, follow the operating system's preferred color scheme, using light mode if no preference is available.

**Specification revision:** Check the saved preference before selecting the initial theme. If no valid preference exists, check the system preference and use light mode as the fallback.

**Question 4: How will the website prevent a flash of the wrong theme?**

**Decision:** Apply the initial theme as early as practical during page loading.

**Specification revision:** Plan for the initial theme to be applied before the page's main content is displayed where practical. Coordinate the HTML, CSS, and JavaScript so the saved or selected initial theme is applied consistently. If the saved preference cannot be accessed, use the defined fallback.

### Feature 3: Dynamic Portfolio Content

**Question 5: What happens when a project has no optional links?**

**Decision:** Do not render a live demo or repository link when its URL is missing or invalid.

**Specification revision:** Check each optional link before creating its link element. Render only valid links with meaningful labels and destinations. Do not leave empty anchors or broken links.

**Question 6: What happens when project image alt text is missing?**

**Decision:** Meaningful project images must have appropriate alternative text. Decorative images may use empty alternative text.

**Specification revision:** Check image data before rendering each project card. Ensure meaningful images have suitable alt text. Use empty alternative text only for decorative images. Handle missing image information without creating inaccessible or broken image elements.

### Feature 4: Contact Form Validation

**Question 7: Where should focus go when validation fails?**

**Decision:** Move keyboard focus to the first invalid field and make its specific error message available to assistive technology.

**Specification revision:** After checking all fields, identify the first invalid field. Focus that field and ensure its error message is associated with it. Display errors for all invalid fields rather than only the first one.

**Question 8: When should a validation error disappear?**

**Decision:** Clear or update a field's error when the user corrects that field. Validate the entire form again on submission.

**Specification revision:** Attach appropriate input event listeners to clear or update errors as the user corrects their entries. Keep submission validation in place so all fields are checked before the form is accepted.

### Review Status

The initial pseudocode has been reviewed by AI. The eight questions have proposed behavioural decisions and corresponding specification revisions. The updated pseudocode must include these decisions before JavaScript implementation begins.