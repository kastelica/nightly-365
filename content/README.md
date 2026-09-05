# Content — edit these during the stream

These two files are the source of truth for the homepage. Change them, commit, push. Vercel rebuilds.

## `schedule.json`

Upcoming (and past) episodes.

| Field | What to put |
| --- | --- |
| `id` | Stable id. Date is fine: `2026-09-05` |
| `date` | Calendar date in Pacific Time, `YYYY-MM-DD` |
| `question` | The night's hard question |
| `status` | `next` · `queued` · `aired` |
| `notes` | Optional. Shown under the question. |

Keep exactly one episode as `next`. After the show, set it to `aired` and mark tomorrow `next`.

## `ships.json`

What we built tonight.

```json
{
  "ships": [
    {
      "id": "2026-09-05-site",
      "date": "2026-09-05",
      "episodeQuestion": "How can AI make us all money?",
      "title": "Nightly 365 public site",
      "link": "https://github.com/kastelica/nightly-365",
      "note": "The house we gather in."
    }
  ]
}
```

`link` and `note` are optional. Newest dates show first.

The TypeScript types in `lib/types.ts` match this shape so a later API or database can replace the JSON without rewriting the page.
