# Nightly 365

A collaborative YouTube livestream every night at **6:00 PM PT / 9:00 PM ET**.

One hard question. Chat, callers, AI, and the community think it through. Join in, help, and follow along as ideas move forward.

This page is the public house: the live stream, the questions coming up, and what came out of each night.

Tone: good and benevolent.

## Preview on your computer

```bash
npm install
cp .env.example .env.local   # optional — see YouTube below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm start        # serve the build
npm run lint
```

## Point the live picture at YouTube

The Live section needs a channel or a video/live URL. **Do not invent a channel id.** If nothing is set, the page shows:

> Going live soon · every night at 6pm PT

The show’s YouTube is [@Nightly365](https://www.youtube.com/@Nightly365) (channel id `UCOUzJ_pTutd43MKGP2Jsb5g`).

Copy `.env.example` to `.env.local` and set **one** of:

```bash
# Recurring nightly livestream (preferred)
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=UCxxxxxxxxxxxxxxxxxxxxxx

# Or any watch / live / embed URL, or a video id
NEXT_PUBLIC_YOUTUBE_LIVE_URL=https://www.youtube.com/watch?v=XXXXXXXXXXX
```

How to find a channel id: open the YouTube channel → Share → copy the channel ID (it usually starts with `UC`).

A channel id becomes the standard live embed:

`https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID`

Where the site is hosted, add the same variable in the project’s environment settings, then refresh the live site.

## Update questions, progress, and nights

The homepage and each night’s page read from a few content files. Change a file when the show needs an update. Details and examples are in [`content/README.md`](content/README.md).

| File | What it is |
| --- | --- |
| [`content/schedule.json`](content/schedule.json) | Upcoming nights: date (PT), question, `next` / `queued` / `aired`, optional notes, optional `slug` |
| [`content/events.json`](content/events.json) | Night pages at `/events/[slug]`: question, blurb, pocket doors, how to join, optional agenda and ticket link |
| [`content/ships.json`](content/ships.json) | What came out of a night: date, question, title, link, note |

1. Edit the file.
2. Save the change so the public page can refresh.
3. Keep one episode as `next`. After the night, mark it `aired` and make tomorrow `next`.

A night in the upcoming list links to its page when it has a `slug` that matches `content/events.json`.

## Put the page online

1. Import this project in your host (Next.js is detected).
2. Add `NEXT_PUBLIC_YOUTUBE_CHANNEL_ID` or `NEXT_PUBLIC_YOUTUBE_LIVE_URL`.
3. Publish. Framework preset: Next.js.

## What’s out of scope (v1)

OBS, sign-in, a separate editor, Google Sheets sync, Zoom guests, ticket checkout. See [ROADMAP.md](ROADMAP.md).
