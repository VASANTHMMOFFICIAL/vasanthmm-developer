# Images

Each project already has a generated cover image in this folder
(`project-application-portal.svg`, `project-dashboard.svg`, etc.) —
a gradient card with the project name, used both on the project card
and in the click-to-expand lightbox.

`profile-placeholder.svg` is used for the Hero photo.

To use your own screenshots or photo instead:

1. Add your image file here (png/jpg/svg all work).
2. Update the matching `import` and `image` field in
   `src/data/projects.js` (for a project) or the import in
   `src/components/Hero/Hero.jsx` (for the profile photo).

No other code changes are needed — cards, the lightbox, and the hero
all just render whatever `image` points to.
