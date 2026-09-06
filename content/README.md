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
      "subquestions": [
        "If AI grows the pie while taking jobs, how do people still get a slice?",
        "A citizens dividend from robot and compute permits — promising path or trap?",
        "When the check shows up, what happens to work, status, and politics?"
      ],
      "join": "How to join in and help.",
      "ticketUrl": ""
    }
  ]
}
```

| Field | What to put |
| --- | --- |
| `subquestions` | Pocket sub-questions. Prefer exactly three. These are doors if the room stalls — not a script, not a checklist. |
| `agenda` | Optional short bullet steps for that night. If omitted, the shared default agenda is used. |
| `join` | Optional. How to join in and help. |
| `ticketUrl` | Optional. Leave empty for “Tickets coming soon”. |

The default agenda and the “How it works” copy live in the site helper language, so every night page can share them.

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
