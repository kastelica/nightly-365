# Nightly 365

A collaborative YouTube livestream every night at **6:00 PM PT / 9:00 PM ET**.

Aaron holds one hard question. Chat, callers, AI, and the community think it through. Ideas ship the same night.

This repo is the public house: live embed, upcoming questions, and a ship log of what each night produced.

Tone: good and benevolent.

## Run locally

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

## Set the YouTube live embed

The Live section needs a channel or a video/live URL. **Do not invent a channel id.** If nothing is set, the page shows:

> Going live soon · every night at 6pm PT

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

On Vercel, add the same variable in **Project → Settings → Environment Variables**, then redeploy.

## Edit schedule and ships during a stream

Content lives in two JSON files. They are the obvious place to update mid-show. Details and a ship example are in [`content/README.md`](content/README.md).

| File | What it is |
| --- | --- |
| [`content/schedule.json`](content/schedule.json) | Upcoming nights: date (PT), question, `next` / `queued` / `aired`, optional notes |
| [`content/ships.json`](content/ships.json) | What we built: date, episode question, title, link, note |

1. Edit the file.
2. Commit and push to `main` (or open a PR).
3. Vercel rebuilds the site.

Keep one episode as `next`. After air, mark it `aired` and promote tomorrow.

The TypeScript types in [`lib/types.ts`](lib/types.ts) match these files so a later API or database can replace the JSON without rewriting the page.

## Deploy on Vercel

1. Import [github.com/kastelica/nightly-365](https://github.com/kastelica/nightly-365) in Vercel (Next.js is detected).
2. Add `NEXT_PUBLIC_YOUTUBE_CHANNEL_ID` or `NEXT_PUBLIC_YOUTUBE_LIVE_URL`.
3. Deploy. Framework preset: Next.js. Build command: `npm run build`.

## What’s out of scope (v1)

OBS, auth, CMS, Google Sheets sync, Zoom guests. See [ROADMAP.md](ROADMAP.md).
