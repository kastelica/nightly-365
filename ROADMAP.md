# Roadmap

v1 is a public page, night pages, and a few local files. These are next, not now.

## Sheets sync for questions

Pull the question bank from a Google Sheet so questions can be edited live without touching the files by hand.

- Keep `Episode` in `lib/types.ts` as the contract.
- Add a fetch path beside `lib/content.ts` (Sheet → same objects).
- Fall back to `content/schedule.json` if the sheet is unreachable.

## Event traffic and ticket sales

Each night can have a public page at `/events/[slug]`. Next: send people there, then offer tickets.

- Fill `ticketUrl` on an event when a real ticket link exists
- Special (not-every-night) gatherings that still use the same page
- Point the show and social posts at a night’s page
- Ticket checkout itself is later — not in v1

## OBS

A scene-ready layout (lower-third, next question, progress ticker) for the nightly stream. This site stays the public house; OBS is a second view, not a rewrite.

## Richer progress

Grow what came out of each night into a longer record without changing the homepage shape.

- Tags, who helped, a picture, “made during the night” vs follow-up
- A progress archive when the list is longer than a night

## Also later

- Sign-in, a separate editor, Zoom guest UI — out of scope until the ritual is steady.
