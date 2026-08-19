---
title: 'Hello world'
date: 2026-08-11
description: 'A placeholder post that doubles as a formatting reference.'
draft: true
---

This is a placeholder post. Delete it, or edit it into something real — it lives at
`src/content/blog/hello-world.md`, and the filename is the URL slug.

To publish a new post, add a `.md` file to `src/content/blog/` with frontmatter:

```yaml
---
title: 'Your title'
date: 2026-08-11
description: 'Optional. Shows up in the post list and the RSS feed.'
draft: false
---
```

Set `draft: true` to keep a post out of the build until it's ready.

## Formatting

Standard markdown works. Headings, **bold**, *italic*, `inline code`, and
[links](https://example.com).

Code blocks are syntax-highlighted at build time, so they cost no client-side
JavaScript:

```python
def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```

> Blockquotes look like this.

- Bullet lists
- work as expected
- with nesting:
  - like so

That's the whole system. No plugins, no database, no admin panel — a file in a
folder is a post.
