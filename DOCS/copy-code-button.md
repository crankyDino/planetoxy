# Copy Code Button

## Objective
Add a copy-to-clipboard button on the top-right corner of each `<pre>` code block in rendered blog articles.

## Implementation Notes
- Content is injected as raw HTML via `{@html data.content}` — Svelte components can't wrap blocks at render time.
- Use `onMount` to query `.prose pre` elements post-render and inject a button into each.
- Button uses `navigator.clipboard.writeText()` and shows brief "copied" feedback.

## To-Do
- [x] Create DOCS file
- [x] Add `.copy-code-btn` styles to `article.css`
- [x] Add `onMount` copy button injection to `+page.svelte`
