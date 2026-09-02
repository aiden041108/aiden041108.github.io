# Portfolio content editing guide

The portfolio is published at <https://aiden041108.github.io/>.

## Where to edit text

Edit only [`app/page.tsx`](app/page.tsx) when changing portfolio copy. The design is stored separately in `app/globals.css`, so text edits do not require touching the stylesheet.

Search for these comments in `app/page.tsx`:

1. `EDIT 1` - name, school, contact, and research interest
2. `EDIT 2` - biography
3. `EDIT 3` - education, research, work, activities, awards, and skills
4. `EDIT 4` - Project GENIUS and KFAC Quant Research

Change only the text between JSX tags. For example:

```tsx
<p>Current sentence.</p>
```

can be changed to:

```tsx
<p>New sentence.</p>
```

For dates, edit the text inside `<time>...</time>`. For organization or project names, edit the text inside `<strong>...</strong>` or `<h3>...</h3>`.

Keep tags such as `<p>`, `<strong>`, `<section>`, and their matching closing tags intact.

## Preview locally

Run these commands from the project folder:

```bash
npm install
npm run dev
```

Then open <http://localhost:3000/>.

## Publish changes

```bash
git add app/page.tsx
git commit -m "Update portfolio content"
git push origin main
```

GitHub Pages will deploy the updated site automatically.

## Other files

- `app/globals.css` - visual design; leave unchanged for text-only edits
- `app/layout.tsx` - browser title and social preview metadata
- `public/junyoung-yang-cv-public.pdf` - downloadable public CV

Do not replace the public CV with a file containing private contact information.
