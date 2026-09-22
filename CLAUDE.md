# web-page (flipmimueble)

## Project context

- A web page for a furniture-flipping business.
- Stack: TBD — fill this in once decided (plain HTML/CSS, Next.js, etc).

## How to work in this repo

- **Plan in the main loop.** Layout, page structure, and any data/backend decisions are made here, not delegated. Model switches to Opus automatically in plan mode; back to Sonnet once a plan is approved.
- **Delegate implementation.** For any multi-file or non-trivial task, spawn the `implementer` agent with a clear spec (what to build, which files/areas, what "done" means).
- **Review before committing.** After the implementer reports back, run the `reviewer` agent on the diff before committing.
- Trivial edits (one file, a few lines) skip the ceremony — just do them in the main loop.
