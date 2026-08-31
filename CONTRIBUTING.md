# Contributing to The Turing Club Website

## Workflow

1. **Sync `main` before starting anything**
   ```bash
   git checkout main
   git pull origin main
   ```
   Make sure your local `main` is up to date before branching off it.

2. **Create a new branch**
   Use one of these prefixes based on what you're doing:
   ```bash
   git checkout -b feat/short-description     # new feature or section
   git checkout -b fix/short-description       # bug fix
   git checkout -b style/short-description     # styling/UI only
   git checkout -b chore/short-description     # config, deps, cleanup
   ```
   Example: `git checkout -b feat/events-carousel`

3. **Make your changes**
   - Keep components inside `src/components/`, one component per file
   - Use the existing design tokens from `src/index.css` (`bg-bg`, `bg-surface`, `border-border`, `text-primary-light`, etc.) — don't hardcode hex colors
   - Match the existing spacing/typography scale used across sections
   - Test your section on both desktop and mobile before opening a PR

4. **Commit clearly**
   ```bash
   git add .
   git commit -m "feat: add events carousel to Events section"
   ```
   Use short, present-tense commit messages. Prefix with `feat:`, `fix:`, `style:`, `chore:`, or `docs:`.

5. **Push and open a PR**
   ```bash
   git push origin feat/short-description
   ```
   Open a PR against `main` on GitHub — the PR template will load automatically. Fill it out completely, including screenshots for any UI change.

6. **Before merging**
   - Run `npm run build` locally and make sure it passes with no errors
   - Resolve any merge conflicts by re-pulling `main` and rebasing/merging locally, not on GitHub's web editor
   - At least one review/approval before merging (if working in a team)

## Branch naming

| Prefix    | Use for                          |
|-----------|-----------------------------------|
| `feat/`   | New feature, section, or page     |
| `fix/`    | Bug fix                           |
| `style/`  | Visual/CSS-only changes           |
| `chore/`  | Config, tooling, dependency bumps |
| `docs/`   | README/documentation changes      |

## Keeping your branch up to date

If `main` has moved on while you're working:
```bash
git checkout main
git pull origin main
git checkout your-branch-name
git merge main
```
Resolve any conflicts locally, then push.

## Code style

- Functional React components only, no class components
- Tailwind utility classes only — no separate CSS files per component
- Keep components self-contained; shared data (like leader lists or event data) stays at the top of the file as a constant array unless it's reused across multiple components, in which case it moves to a shared `src/data/` file