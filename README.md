# Midterm Exam Project: Online Factorial Calculator

This repository implements the **Online Factorial Calculator** per the assignment brief. It uses **HTML5, CSS, SCSS, Bootstrap (no CDN), and JavaScript** and follows the required folder structure.

## 0) What you need (install these first)

- **Node.js (LTS)**: https://nodejs.org
- **Git**: https://git-scm.com/downloads
- **VS Code** (recommended): https://code.visualstudio.com
- Optional (Mac): Xcode CLT, Homebrew.
- Internet **only for installing packages**. No CDN is used in the HTML.

## 1) Get started

```bash
# In a terminal:
cd path/to/where/you/want/the/project
git clone <your-new-empty-github-repo-url> midterm
cd midterm

# If you didn't copy the files yet, drop them in this folder (midterm)
# then stage & commit:
git add .
git commit -m "Initial commit (before 12:30 PM)"
git push origin main   # or master
```

> **Important (Marking #2):** Make your **first commit by 12:30 PM** (even if incomplete).

## 2) Install packages (Bootstrap local, no CDN)

```bash
npm install
```

This adds `node_modules` locally (Bootstrap and Sass). We **link Bootstrap from `node_modules`** in `index.html` to satisfy **"No marks if you use a CDN"**.

## 3) SCSS -> CSS build

- The SCSS source lives in `scss/`.
- We **override `$primary: red`** and add an `h1` rule, then import Bootstrap’s SCSS.
- Build once:
```bash
npm run build
```
- Watch during development:
```bash
npm run dev
```

This compiles all SCSS into `css/` (e.g., `css/custom.css`). You will see the generated CSS file, showing it was compiled by the Sass compiler (Marking #6).

## 4) Open the page

Just open `index.html` in your browser. Because Bootstrap is local, make sure `node_modules` exists (after `npm install`).

## 5) GitHub submission

1. Create a new repo on GitHub (private or public as instructed).
2. Add **`.gitignore`** (already included) so **`node_modules/` is never pushed** (Marking #7).
3. Commit and push.
4. Copy your repository URL into the submission document.
5. Upload the assignment file to Dropbox (Brightspace) and email the repo URL to the TA as instructed.

## 6) Layout & features (checklist)

- Header with left **three links** (HTML5, JavaScript, CSS) and right **Dark/Light/Contact Me** buttons.
- Dark/Light mode buttons use `data-bs-theme-value="dark|light"` and toggle the page theme.
- Main grid with two rows:
  - Row 1: factorial message + **number input**.
  - Row 2: **Enter** button (runs factorial) + **output** screen.
- Footer has a copyright/message.
- JavaScript factorial logic in **`js/main.js`** (separate file). Example: if input is 3, output `3! = 6`.
- Fully responsive via Bootstrap grid/system.
- **No CDN** used.
- **SCSS with `$primary: red` and `h1` rule** (compiled to CSS).

## 7) Factorial usage

- Enter a **non‑negative integer** (0, 1, 2, 3, …).
- Click **Enter** or press **Enter** key to compute.
- Output appears in the **Output** panel as `n! = value`. Errors (like negative numbers or non‑integers) show a friendly message.

---

Good luck! If anything fails to load, run `npm install` and `npm run build` again.