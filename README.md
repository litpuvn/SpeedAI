# Introduction Team — Single-Page Website

Open `index.html` in a browser. No build step or server needed.

## Project structure

```
index.html              Page structure (rarely edited)
css/style.css           All styles / theme colors (UofL red: #C71E3A)
js/
  main.js               Rendering & interaction logic (rarely edited)
  data/
    recommendations.js  Recommendations list
    projects.js         Team's Work projects
    team-members.js     Team member profiles
assets/images/
  projects/             Project card images
  members/              Member photos
```

## Pagination

Each section shows a subset per page — page size is set in `js/main.js`
(`SECTIONS` object):

| Section          | Data file                   | Items / page |
|------------------|-----------------------------|--------------|
| Recommendations  | `js/data/recommendations.js`| 4            |
| Team's Work      | `js/data/projects.js`       | 6            |
| Team Members     | `js/data/team-members.js`   | 8            |

Pages appear automatically when there are more items than fit one page —
no other changes needed when adding entries.

## How to update content

**Add/edit a recommendation** — open `js/data/recommendations.js`, copy an
object in the array, change `id`, `title`, and `content` (HTML).

**Add/edit a project** — open `js/data/projects.js`, copy an object, change
`id`, `title`, `video`, `image`, `shortDesc`, `fullContent` (HTML).
Put the image in `assets/images/projects/`.

`video` is the YouTube link played in the popup (e.g.
`https://www.youtube.com/watch?v=XXXXXXXXXXX`). Only the first section of
`fullContent` — the `Project Overview` heading and its paragraph — is shown
under the video; the rest of the sections are kept in the file but hidden.
Leave `video` empty to fall back to the card image in the popup.

**Add/edit a team member** — open `js/data/team-members.js`, copy an object,
change `id`, `name`, `role`, `image`, `bio` (HTML).
Put the photo in `assets/images/members/`.

**Change colors / layout** — edit the CSS variables at the top of
`css/style.css`.

Note: `id` values must be unique, no spaces. The modal image is inserted
automatically — do not include `<img>` tags in `fullContent` / `bio`.
