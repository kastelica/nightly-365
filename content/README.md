# Content — edit these during the night

These files are the source of truth for the public pages. Change them when the show needs an update. The live site refreshes from them.

## `schedule.json`

Upcoming (and past) nights.

| Field | What to put |
| --- | --- |
| `id` | Stable id. Date is fine: `2026-09-05` |
| `date` | Calendar date in Pacific Time, `YYYY-MM-DD` |
| `question` | The night's hard question |
| `status` | `next` · `queued` · `aired` |
| `notes` | Optional. Shown under the question. |
| `slug` | Optional. When set, the upcoming list links to `/events/[slug]`. |

Keep exactly one episode as `next`. After the night, set it to `aired` and mark tomorrow `next`.

## `events.json`

One page per night (or special gathering) at `/events/[slug]`.

```json
{
  "events": [
    {
      "slug": "how-can-ai-make-us-all-money",
      "date": "2026-09-05",
      "question": "How can AI make us all money?",
      "blurb": "What this night is.",
      "join": "How to join in and help.",
      "ticketUrl": ""
    }
  ]
}
```

`join` and `ticketUrl` are optional. Leave `ticketUrl` empty for “Tickets coming soon”.

## `ships.json`

What came out of a night. Shown on the homepage and on that night’s page.

```json
{
  "ships": [
    {
      "id": "2026-09-05-site",
      "date": "2026-09-05",
      "episodeQuestion": "How can AI make us all money?",
      "title": "Nightly 365 public site",
      "link": "https://www.youtube.com/@Nightly365",
      "note": "The house we gather in."
    }
  ]
}
```

`link` and `note` are optional. Newest dates show first.
