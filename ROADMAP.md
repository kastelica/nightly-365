# Roadmap

v1 is a public page plus two local files. These are next, not now.

## Sheets sync for questions

Pull the question bank from a Google Sheet so Aaron can edit live without a git commit.

- Keep `Episode` in `lib/types.ts` as the contract.
- Add a fetch path beside `lib/content.ts` (Sheet → same objects).
- Fall back to `content/schedule.json` if the sheet is unreachable.

## OBS

A scene-ready layout (lower-third, next question, ship ticker) for the nightly stream. This site stays the public house; OBS is a second view, not a rewrite.

## Richer ship tracking

Grow `content/ships.json` into an API or small database without changing the homepage shape (`Ship` in `lib/types.ts`).

- Tags, authors, screenshot, “built on air” vs follow-up
- A `/ships` archive when the log is longer than a night
- Optional PR / deploy webhooks

## Also later

- Auth, CMS, Zoom guest UI — out of scope until the ritual is steady.
