# Images

Drop your project screenshots and photos here, for example:

- `project-application-portal.png`
- `project-dashboard.png`
- `project-food-dashboard.png`
- `project-hospital-ui.png`
- `project-job-portal.png`
- `project-ecommerce.png`
- `profile.jpg` (optional, for the About section)

Right now `ProjectCard` renders a gradient placeholder with the project's
initials instead of an image, so the site works out of the box with no
images required. Once you add real screenshots, import them in
`src/data/projects.js` and swap the `<div className={styles.imagePlaceholder}>`
block in `src/components/ProjectCard/ProjectCard.jsx` for an `<img>` tag.
